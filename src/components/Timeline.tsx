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
                {start && <div className={`bg-accent/80 w-px h-14 -mt-4 -mb-16 top-fade-[100%]`}></div>}
                <div className="bg-accent/80 text-base-ad rounded-full w-4 h-4 mt-10"></div>
                <div
                    className={`bg-accent/80 w-px grow ${!end ? "-mb-10 top-fade-[10%]" : "bottom-fade-[100%]"}`}
                ></div>
            </div>
            <div className={`grow ${!end && "mb-10"}`}>{children}</div>
        </div>
    );
}
