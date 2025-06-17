import { useState } from "react";

export default function forceRerender() {
    const [x, set] = useState<number>(0);
    return () => set((x) => x + 1);
}
