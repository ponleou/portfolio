import type { ReactNode } from "react";

const orientations = ["vertical", "horizontal"] as const;
type Orientation = (typeof orientations)[number];

export default function Lined({
    children,
    orientation,
    lineOrientation = orientation,
    lengthRem,
    gapRem,
    enable = { start: true, end: true },
}: {
    children: ReactNode;
    orientation: Orientation;
    lineOrientation?: Orientation;
    lengthRem: number;
    gapRem: number;
    enable?: Partial<{ start: boolean; end: boolean }>;
}) {
    return (
        <div className={`flex items-center ${orientation === "vertical" ? "flex-col" : ""}`} style={{ gap: `${gapRem}rem` }}>
            {enable.start && (
                <div
                    style={lineOrientation === "vertical" ? { height: `${lengthRem}rem` } : { width: `${lengthRem}rem` }}
                    className={`${lineOrientation === "vertical" ? "w-[1px]" : "h-[1px]"} bg-primary`}
                ></div>
            )}
            {children}
            {enable.end && (
                <div
                    style={lineOrientation === "vertical" ? { height: `${lengthRem}rem` } : { width: `${lengthRem}rem` }}
                    className={`${lineOrientation === "vertical" ? "w-[1px]" : "h-[1px]"} bg-primary`}
                ></div>
            )}
        </div>
    );
}
