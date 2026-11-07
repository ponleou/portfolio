import { useEffect, useRef, type ReactNode } from "react";
import { MouseMoveEvent } from "../../functions/subscribeEvents";
import delay from "../../functions/delay";

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
        rangeLimit: number,
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
        MouseMoveEvent.subscribe(updateMousePos);

        const FPS = 10;
        const targetFps = 60;
        const interval = 1000 / FPS;

        let frame = 0;
        let lastTime = 0;
        const animate = async (time: DOMHighResTimeStamp) => {
            const timeLeft = interval - (time - lastTime);
            if (timeLeft > 0) {
                await delay(timeLeft);
                frame = requestAnimationFrame(animate);
                return;
            }

            lastTime = time;

            const rect = parent.current!.getBoundingClientRect();
            const parentMiddle: Coordinate = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
            const vector = calculateVector(parentMiddle, mousePos.current);
            const { x, y }: Coordinate = calculateTranslate(
                vector,
                translateMultiplier * (targetFps / FPS),
                maxTranslate,
                rangeLimit,
            );
            parent.current!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            frame = requestAnimationFrame(animate);
        };
        
        if (parent.current) {
            frame = requestAnimationFrame(animate);
        }

        return () => {
            MouseMoveEvent.unsubscribe(updateMousePos);
            cancelAnimationFrame(frame);
        };
    }, []);
    return (
        <div className="transition-transform ease-out duration-500" ref={parent}>
            {children}
        </div>
    );
}
