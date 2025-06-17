import { useEffect, useRef, type ReactNode } from "react";

export default function AlignTarget({
    toggleAlign,
    element,
    children,
}: {
    toggleAlign: Partial<{ top: boolean; right: boolean; bottom: boolean; left: boolean }>;
    element: HTMLDivElement;
    children: ReactNode;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function alignLeft() {
        parent.current!.style.left = `${element.getBoundingClientRect().left}px`;
    }

    function alignRight() {
        parent.current!.style.left = `${element.getBoundingClientRect().right}px`;
    }

    function alignTop() {
        parent.current!.style.top = `${element.getBoundingClientRect().top}px`;
    }

    function alignBottom() {
        parent.current!.style.top = `${element.getBoundingClientRect().bottom}px`;
    }

    function align() {
        if (toggleAlign.left) alignLeft();
        if (toggleAlign.right) alignRight();
        if (toggleAlign.top) alignTop();
        if (toggleAlign.bottom) alignBottom();
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
