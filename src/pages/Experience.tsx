import RevealOn from "../components/movement/RevealOn";
import { works, extras } from "../content/experience";
import { useState, useEffect, useRef } from "react";
import { ScrollEvent } from "../functions/subscribeEvents";
import ContentTemplate from "../components/pages/experience/ContentTemplate";

export default function Experience() {
    const [reveal, setReveal] = useState(false);
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!parent.current) return;

        const watchReveal = () => {
            if (parent.current!.getBoundingClientRect().top - window.innerHeight <= 0) setReveal(true);
            else setReveal(false);
        };

        ScrollEvent.subscribe(watchReveal);

        return () => {
            ScrollEvent.unsubscribe(watchReveal);
        };
    }, []);

    return (
        <div className="px-24 py-48 min-h-dvh flex" id="experience">
            <RevealOn
                className="transition-all ease-out duration-500 grow flex"
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 -translate-y-0"
                on={reveal}
            >
                <div
                    ref={parent}
                    className="grow my-auto flex flex-row flex-wrap max-w-lg-static 3xl:max-w-xl-static mx-auto gap-y-24 gap-x-24 3xl:gap-x-32 justify-center"
                >
                    <div className="flex flex-col">
                        <h3 className="text-h3-ad font-bold text-accent/80">Professional</h3>
                        <ContentTemplate contents={works} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-h3-ad font-bold text-accent/80">Extracurricular</h3>
                        <ContentTemplate contents={extras} />
                    </div>
                </div>
            </RevealOn>
        </div>
    );
}
