import { useEffect, useRef, useState, type ReactNode } from "react";

type Coordinate = { x: number; y: number };

export default function CursorFollower({
    ratePerFrame = 1,
    warpDegree,
    distanceFadeRatio,
    children,
}: {
    ratePerFrame?: number;
    warpDegree: number;
    distanceFadeRatio: number;
    children: ReactNode;
}) {
    const [visible, setVisisble] = useState<boolean>(false);
    const parent = useRef<HTMLDivElement>(null);

    const mousePos = useRef<Coordinate>({ x: 0, y: 0 });

    function updateMousePos(event: MouseEvent) {
        mousePos.current.x = event.clientX;
        mousePos.current.y = event.clientY;
    }

    const currentPos = useRef<Coordinate>({ x: 0, y: 0 });
    function updatePos(coordinate: Coordinate) {
        currentPos.current.x += (coordinate.x - currentPos.current.x) * ratePerFrame;
        currentPos.current.y += (coordinate.y - currentPos.current.y) * ratePerFrame;
    }

    function distanceFade(coordinate: Coordinate, minDistance: number) {
        const dx = coordinate.x - currentPos.current.x;
        const dy = coordinate.y - currentPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        setVisisble(distance < minDistance);
    }

    function warpElement(element: HTMLDivElement, coordinate: Coordinate, maxWarp: number, maxDistance: number) {
        const dx = coordinate.x - currentPos.current.x;
        const dy = coordinate.y - currentPos.current.y;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.min(distance / maxDistance, 1);

        const total = Math.abs(dx) + Math.abs(dy);
        const component: Coordinate = { x: dx / total, y: dy / total };

        const rotate: Coordinate = {
            x: maxWarp * component.x * intensity,
            y: maxWarp * component.y * intensity,
        };

        element.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
    }

    function moveElement(element: HTMLDivElement, coordinate: Coordinate) {
        updatePos(coordinate);
        element.style.left = currentPos.current.x + "px";
        element.style.top = currentPos.current.y + "px";
    }

    const shape = { height: 0, width: 0 };
    useEffect(() => {
        document.addEventListener("mousemove", updateMousePos);

        let frame = 0;
        const animate = () => {
            const targetCoords: Coordinate = {
                x: mousePos.current.x - shape.width / 2,
                y: mousePos.current.y - shape.height / 2,
            };
            const smallestSide = shape.height >= shape.width ? shape.width : shape.height;

            moveElement(parent.current!, targetCoords);
            warpElement(parent.current!, targetCoords, warpDegree, smallestSide);
            distanceFade(targetCoords, smallestSide * distanceFadeRatio);

            frame = requestAnimationFrame(animate);
        };

        const observer = new ResizeObserver(([entry]) => {
            const { height, width } = entry.contentRect;
            shape.height = height;
            shape.width = width;

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
        <div
            ref={parent}
            className={`fixed ${
                !visible ? "opacity-0" : "opacity-100"
            } transition-all ease-out duration-500 perspective-near`}
        >
            {children}
        </div>
    );
}
