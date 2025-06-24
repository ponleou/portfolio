import { useEffect, useState, type ReactNode } from "react";

export default function RenderAfter({
    after,
    children,
    rerenderCallback,
}: {
    after: HTMLDivElement | boolean | null;
    children: ReactNode;
    rerenderCallback: () => void;
}) {
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        if (after) {
            setRender(true);
        } else {
            rerenderCallback();
        }
    }, [after]);

    return <>{render && children}</>;
}
