import { useEffect, useState, type ReactNode } from "react";

export default function RenderAfter({
    after,
    children,
    allowUnrender = false,
}: {
    after: HTMLDivElement | boolean | null;
    children: ReactNode;
    allowUnrender?: boolean;
}) {
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        if (after) {
            setRender(true);
        }

        if (allowUnrender && !after) {
            setRender(false);
        }
    }, [after]);

    return <>{render && children}</>;
}
