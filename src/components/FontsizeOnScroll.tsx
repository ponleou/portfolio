import throttle from "lodash.throttle";
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
    initialRem: number | string;
    finalRem: number | string;
    maxScroll?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function setElementFontsize(element: HTMLDivElement, fontSize: number) {
        element.style.fontSize = `${fontSize}rem`;
    }

    function getRemValue(variableName: string): number {
        const value = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();

        if (!value.endsWith("rem")) {
            throw new Error(`Variable ${variableName} is not in rem units: ${value}`);
        }

        return parseFloat(value);
    }

    const scrollFunction = throttle(() => {
        let finalNumber: number, initialNumber: number;

        if (typeof initialRem === "number") {
            initialNumber = initialRem;
        } else {
            initialNumber = getRemValue(initialRem);
        }

        if (typeof finalRem === "number") {
            finalNumber = finalRem;
        } else {
            finalNumber = getRemValue(finalRem);
        }
        const currentScroll = window.scrollY > maxScroll ? maxScroll : window.scrollY;
        const scrollRate = currentScroll / maxScroll;

        const widthDiff = finalNumber - initialNumber;
        const Rem = widthDiff * scrollRate + initialNumber;
        setElementFontsize(parent.current!, Rem);
    }, 50);

    useEffect(() => {
        if (maxScroll < 0) {
            maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        }
        if (parent.current) {
            document.addEventListener("scroll", scrollFunction);
            scrollFunction();
        }

        return () => {
            document.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <div className={className} ref={parent}>
            {children}
        </div>
    );
}
