import type { MouseEventHandler, ReactNode } from "react";

export default function WindowCard({
    className = "",
    sidebar,
    small = false,
    children,
    onClick = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
}: {
    className?: string;
    sidebar?: "left" | "right";
    small?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`rounded-2xl border border-l-4 ${sidebar === "left" ? (small ? "md:border-l-4" : "md:border-l-6") : sidebar === "right" ? (small ? "md:border-r-4" : "md:border-r-6") : small ? "md:border-t-4" : "md:border-t-6"} md:border-l border-primary hover:border-accent active:border-accent transition-all duration-300 ease-out bg-bg ${small ? "px-8 py-6" : "p-12"} ${className}`}
        >
            {children}
        </div>
    );
}
