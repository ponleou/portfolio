import { useOutletContext } from "react-router";
import type { HomeContextType } from "../types/home";
import RevealOn from "../components/movement/RevealOn";
import { useState, useEffect } from "react";

export default function NotFound() {
    const { relativePath } = useOutletContext<HomeContextType>();

    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        setReveal(true);
    }, []);

    return (
        <div className="px-24 py-48 h-dvh" id="main">
            <RevealOn
                className="flex text-primary text-base-ad transition-all ease-out duration-500"
                on={reveal}
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 -translate-y-0"
            >
                <p>
                    bash: <span className="">{relativePath !== "" ? `./${relativePath}.sh` : ""}</span>: No such file or
                    directory
                </p>
            </RevealOn>
        </div>
    );
}
