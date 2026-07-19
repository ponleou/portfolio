import { Icon } from "@iconify-icon/react";
import { languageColors } from "../../../functions/projects";
import WindowCard from "../../WindowCard";
import type { Project } from "../../../types/projects";

export default function ProjectCard({ project, showOwner = false }: { project: Project, showOwner?: boolean }) {
    return <div className="max-w-4xl flex grow text-base-ad text-primary">
        <WindowCard sidebar={"left"} small={true} className="min-w-xl flex grow">
            <div className="flex flex-col gap-4 grow">
                <h4 className="font-bold text-h4-ad">{showOwner && (<span className="text-accent/80">{project.owner}/</span>)}{project.name}</h4>
                <p className="grow line-clamp-2 text-primary/80">{project.description}</p>
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
                                    className="pb-0.5"
                                />
                                <p className="line-clamp-1">{project.license.name}</p>
                            </a>
                        )}
                    </div>
                    <div className="flex gap-8 items-end">
                        {project.alt_url && (
                            <a
                                className="hover:text-accent transition-color ease-out duration-300 flex relative"
                                href={project.alt_url}
                                target="_blank"
                            >
                                {
                                    // if the main url is empty (project.url), then we make the alt_url visually main with the external link icon
                                    project.url === "" ? (
                                        <>
                                            <Icon icon="mdi:external-link" width="2em" height="2em" />
                                            <div className="absolute flex items-center justify-center p-0.5 bg-bg rounded-full right-0 bottom-0 translate-1/10">
                                                <Icon icon="mdi:github" width="1em" height="1em" />
                                            </div>
                                        </>
                                    ) :
                                        (
                                            <Icon
                                                icon="mdi:github"
                                                width="1.2em"
                                                height="1.2em"
                                                className="pb-1"
                                            />
                                        )
                                }
                            </a>
                        )}
                        {project.url && (
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
                        )}
                    </div>
                </div>
            </div>
        </WindowCard>
    </div>
}