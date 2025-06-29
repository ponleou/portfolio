import { useEffect, useRef, type ReactNode } from "react";

export default function WidthOnScroll({
    children,
    className = "",
    initialPercent,
    finalPercent,
    maxScroll = -1,
}: {
    children: ReactNode;
    className?: string;
    initialPercent: number;
    finalPercent: number;
    maxScroll?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function setElementWidth(element: HTMLDivElement, percent: number) {
        element.style.width = `${percent}%`;
    }

    useEffect(() => {
        if (maxScroll < 0) {
            maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        }
        if (parent.current) {
            document.addEventListener("scroll", () => {
                const currentScroll = window.scrollY > maxScroll ? maxScroll : window.scrollY;
                const scrollRate = currentScroll / maxScroll;
                const widthDiff = finalPercent - initialPercent;
                const percent = widthDiff * scrollRate + initialPercent;
                setElementWidth(parent.current!, percent);
            });
            setElementWidth(parent.current, initialPercent);
        }
    }, []);

    return (
        <div className={className}>
            <div ref={parent}>{children}</div>
        </div>
    );
}
