import { useEffect, useState, type ReactNode } from "react";
import RevealOn from "./RevealOn";
import throttle from "lodash.throttle";

export default function RevealOnScroll({
    scrollTo,
    className = "",
    preRevealClass = "invisible",
    postRevealClass = "visible",
    children,
    finishedCallback,
}: {
    scrollTo: number;
    className?: string;
    preRevealClass?: string;
    postRevealClass?: string;
    children: ReactNode;
    finishedCallback?: (finished: boolean) => void;
}) {
    const [reveal, setReveal] = useState<boolean>(false);

    useEffect(() => {
        const checkReveal = throttle(() => {
            if (window.scrollY >= scrollTo) {
                setReveal(true);
            }
            else {
                setReveal(false);
            }
        }, 50);

        document.addEventListener("scroll", checkReveal);
        checkReveal();

        return () => {
            document.removeEventListener("scroll", checkReveal);
        }
    }, [])

    return (
        <RevealOn
            on={reveal}
            className={className}
            preRevealClass={preRevealClass}
            postRevealClass={postRevealClass}
            finishedCallback={finishedCallback}
        >
            {children}
        </RevealOn>
    );
}
