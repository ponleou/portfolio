import { useState, useRef, useEffect } from "react";
import RevealOn from "../components/movement/RevealOn";
import { ScrollEvent } from "../functions/subscribeEvents";
import WindowCard from "../components/WindowCard";
import { educations } from "../content/education";

export default function Education() {
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
        <div className="px-24 py-48 min-h-dvh flex" id="education">
            <RevealOn
                className="transition-all ease-out duration-500 grow flex justify-center items-center"
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 translate-y-0"
                on={reveal}
            >
                <div ref={parent} className="flex flex-col text-primary text-base-ad relative gap-y-12">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="h-1/2 w-px ml-2 -translate-x-1/2 md:translate-x-0 md:mx-auto bg-accent top-fade-[2.5rem]"></div>
                        <div className="h-1/2 w-px ml-2 -translate-x-1/2 md:translate-x-0 md:mx-auto bg-accent bottom-fade-[75%]"></div>
                    </div>
                    {educations.map((education, index) => (
                        <div key={index} className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-12">
                            {index % 2 === 1 && <div className="hidden md:block"></div>}
                            {index % 2 === 1 && <div className="mt-10 w-4 h-4 rounded-full bg-accent"></div>}
                            {index % 2 === 0 && (
                                <div className="block md:hidden mt-10 w-4 h-4 rounded-full bg-accent"></div>
                            )}
                            <WindowCard
                                className={`${index % 2 === 1 ? "" : "md:justify-self-end"} md:max-w-3xl flex gap-4 flex-col md:w-full`}
                                small={true}
                                sidebar={index % 2 === 1 ? "left" : "right"}
                            >
                                <h4 className="text-h4-ad font-bold">{education.name}</h4>
                                <div className="flex flex-col gap-1">
                                    <p>
                                        {" "}
                                        {education.startDate.toLocaleDateString("en-AU", {
                                            month: "short",
                                            year: "numeric",
                                        })}{" "}
                                        {education.endDate
                                            ? `– 
                                                ${education.endDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}`
                                            : ""}{" "}
                                        {new Date() < education.endDate && " (expected)"}
                                    </p>
                                    <p>
                                        {education.institution}{" "}
                                        <span className="text-accent">
                                            @ {education.locationSpecific}, {education.locationArea}
                                        </span>
                                    </p>
                                </div>
                                <ul className="flex flex-col gap-1 text-primary/80 list-disc ml-10">
                                    {education.grade && education.gradeLabel && (
                                        <li className="pl-4">
                                            {education.gradeLabel}: {education.grade}{" "}
                                            {education.gradeLabel === "WAM" && (
                                                <span>
                                                    ({education.grade >= 80 && "HD"}
                                                    {education.grade >= 70 && education.grade < 80 && "D"}
                                                    {education.grade >= 60 && education.grade < 70 && "C"}
                                                    {education.grade >= 50 && education.grade < 60 && "P"}
                                                    {education.grade >= 0 && education.grade < 50 && "N"}
                                                    {education.grade < 0 && "N/A"})
                                                </span>
                                            )}
                                        </li>
                                    )}
                                    {education.subname && <li className="pl-4">{education.subname}</li>}

                                    {education.points.map((point, i) => (
                                        <li key={i} className="pl-4">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </WindowCard>
                            {index % 2 === 0 && (
                                <div className="hidden md:block mt-10 w-4 h-4 rounded-full bg-accent"></div>
                            )}
                            {index % 2 === 0 && <div className="hidden md:block"></div>}
                        </div>
                    ))}
                </div>
            </RevealOn>
        </div>
    );
}
