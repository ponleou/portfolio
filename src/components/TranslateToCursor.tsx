import { useEffect, useRef, type ReactNode } from "react";

type Coordinate = { x: number; y: number };
type Vector = { direction: Coordinate; magnitude: number };

export default function TranslateToCursor({
    children,
    translateMultiplier,
    maxTranslate,
    rangeLimit = -1,
}: {
    children: ReactNode;
    translateMultiplier: number;
    maxTranslate: number;
    rangeLimit?: number;
}) {
    const parent = useRef<HTMLDivElement>(null);
    const mousePos = useRef<Coordinate>({ x: 0, y: 0 });

    function updateMousePos(event: MouseEvent) {
        mousePos.current.x = event.pageX;
        mousePos.current.y = event.pageY;
    }

    const shape = { height: 0, width: 0 };
    const parentPos: Coordinate = { x: 0, y: 0 };

    function calculateVector(coord1: Coordinate, coord2: Coordinate): Vector {
        const dx = coord2.x - coord1.x;
        const dy = coord2.y - coord1.y;

        const length = Math.sqrt(dx * dx + dy * dy);

        if (length === 0) return { direction: { x: 0, y: 0 }, magnitude: length };

        return {
            direction: {
                x: dx / length,
                y: dy / length,
            },
            magnitude: length,
        };
    }

    function calculateTranslate(
        vector: Vector,
        translateMultiplier: number,
        maxTranslate: number,
        rangeLimit: number
    ): Coordinate {
        if (rangeLimit > 0 && vector.magnitude > rangeLimit) {
            return { x: 0, y: 0 };
        }

        const multiplier = vector.magnitude * translateMultiplier;
        let x = vector.direction.x * multiplier;
        let y = vector.direction.y * multiplier;

        const length = Math.sqrt(x * x + y * y);
        if (length > maxTranslate) {
            const scale = maxTranslate / length;
            x *= scale;
            y *= scale;
        }

        return { x, y };
    }

    useEffect(() => {
        document.addEventListener("mousemove", updateMousePos);

        let frame = 0;
        const animate = () => {
            const parentMiddle: Coordinate = { x: parentPos.x + shape.width / 2, y: parentPos.y + shape.height / 2 };
            const vector = calculateVector(parentMiddle, mousePos.current);
            const { x, y }: Coordinate = calculateTranslate(vector, translateMultiplier, maxTranslate, rangeLimit);
            parent.current!.style.transform = `translate(${x}px, ${y}px)`;
            frame = requestAnimationFrame(animate);
        };

        const observer = new ResizeObserver(([entry]) => {
            const { height, width } = entry.contentRect;
            shape.height = height;
            shape.width = width;

            const rect = entry.target.getBoundingClientRect();
            parentPos.x = rect.left;
            parentPos.y = rect.top;

            animate();
        });

        if (parent.current) {
            observer.observe(parent.current);
        }

        return () => {
            document.removeEventListener("mousemove", updateMousePos);
            cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, []);
    return (
        <div className="transition-transform ease-out duration-500" ref={parent}>
            {children}
        </div>
    );
}
