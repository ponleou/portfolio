import type { ReactNode } from "react";

export default function WindowCard({ sidebar = false, children }: { sidebar?: boolean; children: ReactNode }) {
    return (
        <div
            className={`rounded-2xl border border-l-4 ${sidebar ? "md:border-l-6" : "md:border-t-6"} md:border-l border-primary hover:border-accent active:border-accent transition-all duration-300 ease-out bg-bg p-12`}
        >
            {children}
        </div>
    );
}
