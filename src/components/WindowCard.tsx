import type { ReactNode } from "react";

export default function WindowCard({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-l-4 md:border-t-6 md:border-l border-primary hover:border-accent active:border-accent transition-all duration-300 ease-out bg-bg p-12">
            {children}
        </div>
    );
}
