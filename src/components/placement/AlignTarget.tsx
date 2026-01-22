import { useEffect, useRef, type ReactNode } from "react";
import { ResizeEvent, ScrollEvent } from "../../functions/subscribeEvents";

const positions = ["top", "right", "bottom", "left"] as const;
type Position = (typeof positions)[number];

export default function AlignTarget({
    alignPosition,
    alignTo,
    parent,
    children,
}: {
    alignPosition: Position;
    alignTo: HTMLDivElement;
    parent: HTMLDivElement;
    children: ReactNode;
}) {
    const aligner = useRef<HTMLDivElement>(null);
    function alignLeft() {
        aligner.current!.style.left = `${alignTo.getBoundingClientRect().left - parent.getBoundingClientRect().left}px`;
    }

    function alignRight() {
        aligner.current!.style.left = `${
            alignTo.getBoundingClientRect().right - parent.getBoundingClientRect().left
        }px`;
    }

    function alignTop() {
        aligner.current!.style.top = `${alignTo.getBoundingClientRect().top - parent.getBoundingClientRect().top}px`;
    }

    function alignBottom() {
        aligner.current!.style.top = `${alignTo.getBoundingClientRect().bottom - parent.getBoundingClientRect().top}px`;
    }

    function align() {
        if (alignPosition === "left") alignLeft();
        if (alignPosition === "right") alignRight();
        if (alignPosition === "top") alignTop();
        if (alignPosition === "bottom") alignBottom();
    }

    useEffect(() => {
        const observer = new ResizeObserver(align);
        if (aligner.current) {
            observer.observe(aligner.current);
            ResizeEvent.subscribe(align);
            ScrollEvent.subscribe(align);
        }
        return () => {
            observer.disconnect();
            ResizeEvent.unsubscribe(align);
            ScrollEvent.unsubscribe(align);
        };
    }, []);

    return (
        <div ref={aligner} className={`absolute transition-all duration-150 ease-out`}>
            {children}
        </div>
    );
}
