import type { ReactNode } from "react";

export default function TextCursor({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center gap-1">
            {children}
            <div className="h-lh w-[0.4em] bg-accent"></div>
        </div>
    );
}
