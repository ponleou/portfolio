import { useEffect, useRef, useState, type ReactNode } from "react";

export default function VerticalAlignTarget({ element, children }: { element: HTMLDivElement; children: ReactNode }) {
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            parent.current!.style.left = `${element.getBoundingClientRect().left}px`;
        });

        if (parent.current) observer.observe(parent.current);

        return () => observer.disconnect();
    }, [element.getBoundingClientRect()]);

    return (
        <div ref={parent} className={`absolute`}>
            {children}
        </div>
    );
}
