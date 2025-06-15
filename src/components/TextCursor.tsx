import type { ReactNode } from "react";

export default function TextCursor({ children }: { children: ReactNode }) {
    return (
        <div className="leading-0 flex items-center gap-1">
            {children}
            <div className="h-[1em] w-[5px] bg-accent"></div>
        </div>
    );
}
