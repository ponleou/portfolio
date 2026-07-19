import { contributeProjects, projects } from "../functions/projects";
import RevealOn from "../components/movement/RevealOn";
import { useState, useEffect, useRef } from "react";
import { ScrollEvent } from "../functions/subscribeEvents";
import ProjectCard from "../components/pages/projects/ProjectCard";

export default function Project() {
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
        <div className="px-24 py-48 min-h-dvh flex" id="projects">
            <RevealOn
                className="transition-all ease-out duration-500 grow flex flex-col gap-24"
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 translate-y-0"
                on={reveal}
            >
                <div
                    ref={parent}
                    className="grow my-auto max-w-lg-static 3xl:max-w-xl-static mx-auto flex flex-wrap gap-12 text-base-ad text-primary justify-center"
                >
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index}></ProjectCard>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-12">
                    <h3 className="text-h3-ad text-accent/80 font-bold">Contributions</h3>
                    <div
                        className="grow my-auto max-w-lg-static 3xl:max-w-xl-static mx-auto flex flex-wrap gap-12 text-base-ad text-primary justify-center"
                    >
                        {contributeProjects.map((project, index) => (
                            <ProjectCard project={project} key={index}></ProjectCard>
                        ))}
                    </div>
                </div>
            </RevealOn>
        </div>
    );
}
