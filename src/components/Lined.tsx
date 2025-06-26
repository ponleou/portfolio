import type { ReactNode } from "react";

const orientations = ["vertical", "horizontal"] as const;
type Orientation = (typeof orientations)[number];

export default function Lined({
    children,
    orientation,
    lengthRem,
    enable = { start: true, end: true },
}: {
    children: ReactNode;
    orientation: Orientation;
    lengthRem: number;
    enable?: Partial<{ start: boolean; end: boolean }>;
}) {
    return (
        <>
            {enable.start && (
                <div
                    style={orientation === "vertical" ? { height: `${lengthRem}rem` } : { width: `${lengthRem}rem` }}
                    className={`${orientation === "vertical" ? "w-[1px]" : "h-[1px]"} bg-primary`}
                ></div>
            )}
            {children}
            {enable.end && (
                <div
                    style={orientation === "vertical" ? { height: `${lengthRem}rem` } : { width: `${lengthRem}rem` }}
                    className={`${orientation === "vertical" ? "w-[1px]" : "h-[1px]"} bg-primary`}
                ></div>
            )}
        </>
    );
}
