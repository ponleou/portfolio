import RevealOn from "../components/movement/RevealOn";
import WindowCard from "../components/WindowCard";
import Timeline from "../components/Timeline";
import { works, extras } from "../content/experience";
import { useState, useEffect, useRef } from "react";
import { ScrollEvent } from "../functions/subscribeEvents";

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
                        <h3 className="text-h3-ad font-bold text-accent">Work Experience</h3>
                        {works.map((work, index) => (
                            <Timeline key={index} start={index === 0} end={index === works.length - 1}>
                                <WindowCard sidebar={true} small={true} className="max-w-5xl">
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-h4-ad font-bold">{work.position}</h4>
                                        <div className="flex flex-col gap-1 text-base-ad font-bold">
                                            <p>
                                                {work.startDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}{" "}
                                                &ndash;{" "}
                                                {work.endDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                            <p>
                                                {work.company}{" "}
                                                <span className="text-accent font-normal">@ {work.location}</span>
                                            </p>
                                        </div>
                                        <p className="text-base-ad">{work.description}</p>
                                    </div>
                                </WindowCard>
                            </Timeline>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-h3-ad font-bold text-accent">Extracurricular</h3>
                        {extras.map((extra, index) => (
                            <Timeline key={index} start={index === 0} end={index === extras.length - 1}>
                                <WindowCard sidebar={true} small={true} className="max-w-5xl">
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-h4-ad font-bold">{extra.name}</h4>
                                        <div className="flex flex-col gap-1 text-base-ad font-bold">
                                            <p>
                                                {extra.startDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}{" "}
                                                {extra.endDate
                                                    ? `– 
                                                ${extra.endDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}`
                                                    : ""}
                                            </p>
                                            <p>
                                                {extra.company}{" "}
                                                <span className="text-accent font-normal">@ {extra.location}</span>
                                            </p>
                                        </div>
                                        <p className="text-base-ad">{extra.description}</p>
                                    </div>
                                </WindowCard>
                            </Timeline>
                        ))}
                    </div>
                </div>
            </RevealOn>
        </div>
    );
}
