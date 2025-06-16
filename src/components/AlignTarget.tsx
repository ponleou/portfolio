import { useEffect, useRef, type ReactNode } from "react";

export default function AlignTarget({
    toggleAlign = { x: true, y: true },
    element,
    children,
}: {
    toggleAlign?: { x: boolean; y: boolean };
    element: HTMLDivElement;
    children: ReactNode;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function alignX() {
        parent.current!.style.left = `${element.getBoundingClientRect().left}px`;
    }

    function alignY() {
        parent.current!.style.top = `${element.getBoundingClientRect().top}px`;
    }

    function align() {
        if (toggleAlign.x) alignX();
        if (toggleAlign.y) alignY();
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
