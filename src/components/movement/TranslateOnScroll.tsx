import { useEffect, useRef, type ReactNode } from "react";
import { ScrollEvent } from "../../functions/subscribeEvents";

type Direction = "vertical" | "horizontal" | "vertical-reverse" | "horizontal-reverse";

export default function TranslateOnScroll({
    children,
    direction,
    rate,
    maxScroll = -1,
    start = -1,
}: {
    children: ReactNode;
    direction: Direction;
    rate: number;
    maxScroll?: number;
    start?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function translateElement(element: HTMLDivElement, direction: Direction, translate: number) {
        if (direction === "horizontal") element.style.transform = `translateX(${translate}px)`;
        else if (direction === "horizontal-reverse") element.style.transform = `translateX(${-translate}px)`;
        else if (direction === "vertical") element.style.transform = `translateY(${translate}px)`;
        else if (direction === "vertical-reverse") element.style.transform = `translateY(${-translate}px)`;
    }

    function getScrollLength(direction: Direction): number {
        if (direction === "horizontal" || direction === "vertical") {
            if (start < 0) start = 0;
            const length = Math.max(window.scrollY - start, 0);

            if (maxScroll <= 0) return length;
            else return Math.min(length, maxScroll);
        } else if (direction === "horizontal-reverse" || direction === "vertical-reverse") {
            if (start < 0) start = document.documentElement.scrollHeight;
            const length = Math.max(start - (window.scrollY + window.innerHeight), 0);

            if (maxScroll <= 0) return length;
            else return Math.min(length, maxScroll);
        }

        return 0;
    }

    const scrollFunction = () => {
        const currentScroll = getScrollLength(direction);
        const translate = currentScroll * rate;
        translateElement(parent.current!, direction, translate);
    };

    useEffect(() => {
        if (parent.current) {
            ScrollEvent.subscribe(scrollFunction);
        }

        return () => {
            ScrollEvent.unsubscribe(scrollFunction);
        };
    }, []);

    return (
        <div className="transition-transform ease-out duration-150" ref={parent}>
            {children}
        </div>
    );
}
