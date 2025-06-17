import { useEffect, useRef, type ReactNode } from "react";

export default function RevealOn({
    on,
    className = "",
    preRevealClass = "invisible",
    postRevealClass = "visible",
    children,
    finishedCallback,
}: {
    on: boolean;
    className?: string;
    preRevealClass?: string;
    postRevealClass?: string;
    children: ReactNode;
    finishedCallback?: (finished: boolean) => void;
}) {
    const parent = useRef<HTMLDivElement>(null);

    function parseDuration(duration: string): number {
        const parts = duration.split(",").map((d) => d.trim());

        return Math.max(
            ...parts.map((part) => {
                if (part.endsWith("ms")) {
                    return parseFloat(part);
                } else if (part.endsWith("s")) {
                    return parseFloat(part) * 1000;
                }
                return 0;
            })
        );
    }

    useEffect(() => {
        if (on) {
            if (parent.current) {
                setTimeout(() => {
                    if (finishedCallback) finishedCallback(true);
                }, parseDuration(getComputedStyle(parent.current).transitionDuration));
            }
        }
    }, [on]);

    return (
        <div ref={parent} className={`${on ? `${className} ${postRevealClass}` : `${preRevealClass}`} )`}>
            {children}
        </div>
    );
}
