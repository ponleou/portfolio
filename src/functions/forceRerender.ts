import { useState } from "react";

export default function forceRerender() {
    const [_, set] = useState<number>(0);
    return () => set((x) => x + 1);
}
