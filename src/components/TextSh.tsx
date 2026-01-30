import type { ReactNode } from "react";

export default function TextSh({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`flex ${className}`}>
            <p>./</p>
            <p>{children}</p>
            <p>.sh</p>
        </div>
    );
}
