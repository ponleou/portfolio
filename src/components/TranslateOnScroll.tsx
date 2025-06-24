import { useEffect, useRef, type ReactNode } from "react";

const directions = ["vertical", "horizontal"] as const;
type Direction = (typeof directions)[number];

export default function TranslateOnScroll({
    children,
    direction,
    rate,
    maxScroll = -1,
}: {
    children: ReactNode;
    direction: Direction;
    rate: number;
    maxScroll?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function translateElement(element: HTMLDivElement, direction: Direction, translate: number) {
        if (direction === "horizontal") {
            element.style.transform = `translateX(${translate}px)`;
        } else if (direction === "vertical") {
            element.style.transform = `translateY(${translate}px)`;
        }
    }

    useEffect(() => {
        if (parent.current) {
            document.addEventListener("scroll", () => {
                const currentScroll = maxScroll > 0 && window.scrollY > maxScroll ? maxScroll : window.scrollY;
                const translate = currentScroll * rate;
                translateElement(parent.current!, direction, translate);
            });
        }
    }, []);

    return (
        <div className="transition-transform ease-out duration-150" ref={parent}>
            {children}
        </div>
    );
}
