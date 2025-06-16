import { useEffect, useRef, useState, type ReactNode } from "react";

export default function VerticalAlignTarget({ element, children }: { element: HTMLDivElement; children: ReactNode }) {
    const parent = useRef<HTMLDivElement>(null);

    function align() {
        parent.current!.style.left = `${element.getBoundingClientRect().left}px`;
    }

    useEffect(() => {
        const observer = new ResizeObserver(align);

        if (parent.current) {
            observer.observe(parent.current);
            window.addEventListener("resize", align);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", align);
        };
    }, []);

    return (
        <div ref={parent} className={`absolute`}>
            {children}
        </div>
    );
}
