import { useEffect, useState, type ReactNode } from "react";
import RevealOn from "./RevealOn";
import { ScrollEvent } from "../../functions/subscribeEvents";

export default function RevealOnScroll({
    scrollTo,
    resetAt = -1,
    className = "",
    preRevealClass = "invisible",
    postRevealClass = "visible",
    children,
    finishedCallback,
    resetCallback = () => {},
}: {
    scrollTo: number;
    resetAt?: number;
    className?: string;
    preRevealClass?: string;
    postRevealClass?: string;
    children: ReactNode;
    finishedCallback?: (finished: boolean) => void;
    resetCallback?: (finished: boolean) => void;
}) {
    const [reveal, setReveal] = useState<boolean>(false);

    useEffect(() => {
        const checkReveal = () => {
            if (window.scrollY >= scrollTo && (resetAt < 0 || window.scrollY < resetAt)) {
                setReveal(true);
            } else {
                setReveal(false);
                resetCallback(false);
            }
        };

        ScrollEvent.subscribe(checkReveal);
        checkReveal();

        return () => {
            ScrollEvent.unsubscribe(checkReveal);
        };
    }, []);

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
