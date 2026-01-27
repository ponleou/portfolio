import { useOutletContext } from "react-router";
import type { HomeContextType } from "../types/home";
import RevealOn from "../components/movement/RevealOn";
import WindowCard from "../components/WindowCard";
import Timeline from "../components/Timeline";
import { works, extras } from "../content/experience";

export default function Experience() {
    const { reveal } = useOutletContext<HomeContextType>();

    return (
        <div className="px-24 py-48 min-h-dvh" id="main">
            <RevealOn
                className="transition-opacity ease-out duration-500"
                preRevealClass="opacity-0"
                postRevealClass="opacity-100"
                on={reveal}
            >
                <div className="flex flex-col pl-4 max-w-7xl mx-auto gap-24">
                    <div className="flex flex-col">
                        <h3 className="text-h3-ad font-bold text-accent">Work Experience</h3>
                        {works.map((work, index) => (
                            <Timeline key={index} start={index === 0} end={index === works.length - 1}>
                                <WindowCard sidebar={true}>
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
                                <WindowCard sidebar={true}>
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
