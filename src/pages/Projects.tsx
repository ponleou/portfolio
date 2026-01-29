import { languageColors, projects } from "../functions/projects";
import WindowCard from "../components/WindowCard";
import { Icon } from "@iconify-icon/react";
import RevealOn from "../components/movement/RevealOn";
import { useState, useEffect } from "react";

export default function Project() {
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        setReveal(true);
    }, []);

    return (
        <div className="px-24 py-48 min-h-dvh flex" id="main">
            <RevealOn
                className="transition-all ease-out duration-500 grow flex"
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 translate-y-0"
                on={reveal}
            >
                <div className="grow my-auto max-w-xl-static mx-auto flex flex-wrap gap-12 text-base-ad text-primary justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="max-w-4xl flex grow">
                            <WindowCard sidebar={true} small={true} className="min-w-xl flex grow">
                                <div className="flex flex-col gap-4 grow">
                                    <h4 className="font-bold text-h4-ad">{project.name}</h4>
                                    <p className="grow line-clamp-2">{project.description}</p>
                                    <div className="flex justify-between mt-4 gap-12 items-end">
                                        <div className="flex gap-8">
                                            <div className="flex gap-2 items-center">
                                                <span
                                                    className="w-4 rounded-full aspect-square mb-0.5"
                                                    style={{
                                                        backgroundColor:
                                                            languageColors[project.language] ||
                                                            getComputedStyle(document.documentElement).getPropertyValue(
                                                                "--color-accent",
                                                            ),
                                                    }}
                                                ></span>
                                                <p>{project.language}</p>
                                            </div>
                                            {project.stars > 0 && (
                                                <div className="flex items-center gap-1.5 rounded-lg border-primary">
                                                    <Icon
                                                        icon="mdi:star-outline"
                                                        width="1.2em"
                                                        height="1.2em"
                                                        className="pb-0.5"
                                                    />
                                                    <p>{project.stars}</p>
                                                </div>
                                            )}
                                            {project.license.name && (
                                                <a
                                                    className="underline hover:no-underline transition-color ease-out duration-300 flex gap-2 items-center"
                                                    href={project.license.url}
                                                    target="_blank"
                                                >
                                                    <Icon
                                                        icon="mdi:scale-balance"
                                                        width="1.2em"
                                                        height="1.2em"
                                                        className="pb-1"
                                                    />
                                                    <p className="line-clamp-1">{project.license.name}</p>
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex gap-8 items-end">
                                            {project.alt_url && (
                                                <a
                                                    className="hover:text-accent transition-color ease-out duration-300 flex"
                                                    href={project.alt_url}
                                                    target="_blank"
                                                >
                                                    <Icon
                                                        icon="mdi:github"
                                                        width="1.2em"
                                                        height="1.2em"
                                                        className="pb-1"
                                                    />
                                                </a>
                                            )}
                                            <a
                                                className="hover:text-accent transition-color ease-out duration-300 flex relative"
                                                href={project.url}
                                                target="_blank"
                                            >
                                                <Icon icon="mdi:external-link" width="2em" height="2em" />
                                                <div className="absolute flex items-center justify-center p-0.5 bg-bg rounded-full right-0 bottom-0 translate-1/10">
                                                    <Icon icon="simple-icons:codeberg" width="1em" height="1em" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </WindowCard>
                        </div>
                    ))}
                </div>
            </RevealOn>
        </div>
    );
}
