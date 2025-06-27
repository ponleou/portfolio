import { useEffect, useRef, type ReactNode } from "react";
import { ScrollEvent } from "../functions/subscribeEvents";

export default function WidthOnScroll({
    children,
    className = "",
    childClassName = "",
    initialPercent,
    finalPercent,
    maxScroll = -1,
}: {
    children: ReactNode;
    className?: string;
    childClassName?: string;
    initialPercent: number;
    finalPercent: number;
    maxScroll?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function setElementWidth(element: HTMLDivElement, percent: number) {
        element.style.width = `${percent}%`;
    }

    const scrollFunction = () => {
        const currentScroll = window.scrollY > maxScroll ? maxScroll : window.scrollY;
        const scrollRate = currentScroll / maxScroll;
        const widthDiff = finalPercent - initialPercent;
        const percent = widthDiff * scrollRate + initialPercent;
        setElementWidth(parent.current!, percent);
    };

    useEffect(() => {
        if (maxScroll < 0) {
            maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        }
        if (parent.current) {
            ScrollEvent.subscribe(scrollFunction);

            setElementWidth(parent.current, initialPercent);
        }

        return () => {
            ScrollEvent.unsubscribe(scrollFunction);
        };
    }, []);

    return (
        <div className={className}>
            <div className={childClassName} ref={parent}>
                {children}
            </div>
        </div>
    );
}
