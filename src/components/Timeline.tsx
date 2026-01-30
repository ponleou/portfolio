import type { ReactNode } from "react";

export default function Timeline({
    children,
    start = false,
    end = false,
}: {
    children: ReactNode;
    start?: boolean;
    end?: boolean;
}) {
    return (
        <div className={`flex gap-8 ${start && "mt-4"}`}>
            <div className="flex flex-col items-center gap-6">
                {start && <div className={`bg-accent w-px h-8 -mt-4 -mb-12`}></div>}
                <div className="bg-accent text-base-ad rounded-full w-4 h-4 mt-6"></div>
                <div className={`bg-accent w-px grow ${!end && "-mb-6"}`}></div>
            </div>
            <div className={`grow text-primary ${!end && "mb-10"}`}>{children}</div>
        </div>
    );
}
