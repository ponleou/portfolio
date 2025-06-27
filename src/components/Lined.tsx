import type { ReactNode } from "react";

const orientations = ["vertical", "horizontal"] as const;
type Orientation = (typeof orientations)[number];

export default function Lined({
    children,
    orientation,
    lineOrientation = orientation,
    lengthRem,
    gapRem,
    cssColor,
    enable = { start: true, end: true },
}: {
    children: ReactNode;
    orientation: Orientation;
    lineOrientation?: Orientation;
    lengthRem: number;
    gapRem: number;
    cssColor: string;
    enable?: Partial<{ start: boolean; end: boolean }>;
}) {
    return (
        <div className={`flex items-center ${orientation === "vertical" ? "flex-col" : ""}`} style={{ gap: `${gapRem}rem` }}>
            {enable.start && (
                <div
                    style={lineOrientation === "vertical" ? { height: `${lengthRem}rem`, backgroundColor: cssColor } : { width: `${lengthRem}rem`, backgroundColor: cssColor }}
                    className={`${lineOrientation === "vertical" ? "w-[1px]" : "h-[1px]"}`}
                ></div>
            )}
            {children}
            {enable.end && (
                <div
                    style={lineOrientation === "vertical" ? { height: `${lengthRem}rem`, backgroundColor: cssColor } : { width: `${lengthRem}rem`, backgroundColor: cssColor }}
                    className={`${lineOrientation === "vertical" ? "w-[1px]" : "h-[1px]"}`}
                ></div>
            )}
        </div>
    );
}
