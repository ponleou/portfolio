import { useEffect, useRef, type ReactNode } from "react";

export default function FontsizeOnScroll({
    children,
    className = "",
    initialRem,
    finalRem,
    maxScroll = -1,
}: {
    children: ReactNode;
    className?: string;
    initialRem: number;
    finalRem: number;
    maxScroll?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function setElementFontsize(element: HTMLDivElement, fontSize: number) {
        element.style.fontSize = `${fontSize}rem`;
    }

    useEffect(() => {
        if (maxScroll < 0) {
            maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        }
        if (parent.current) {
            document.addEventListener("scroll", () => {
                const currentScroll = window.scrollY > maxScroll ? maxScroll : window.scrollY;
                const scrollRate = currentScroll / maxScroll;
                const widthDiff = finalRem - initialRem;
                const Rem = widthDiff * scrollRate + initialRem;
                setElementFontsize(parent.current!, Rem);
            });
            setElementFontsize(parent.current, initialRem);
        }

        console.log(maxScroll);
    }, []);

    return (
        <div className={className} ref={parent}>
            {children}
        </div>
    );
}
