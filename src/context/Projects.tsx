import axios from "axios";
import { createContext, useContext, useState, type ReactNode } from "react";

type Project = {
    name: string;
    description: string;
    language: string;
    license: {
        name: string;
        url: string;
    };
    url: string;
    alt_url: string;
};

type ProjectsContextType = {
    projects: Array<Project>;
    fetchProjects: () => Promise<void>;
};

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({ children }: { children: ReactNode }) {
    const fallbackUrl = {
        main: "https://codeberg.org/",
        alt: "https://github.com/",
    };

    const queryList: Array<string> = [
        "ponleou/pipetron",
        "ponleou/portfolio",
        "ponleou/dotfiles",
        "ponleou/rockscale",
        "ponleou/EcoRound",
        "ponleou/Audio-Visualiser",
        "ponleou/Find-The-Fake-Game",
        "ponleou/Intrusion-Detection-System",
    ];

    const apiList = ["https://codeberg.org/api/v1/repos/", "https://api.github.com/repos/"];

    const [projects, setProjects] = useState<Array<Project>>([]);

    async function fetchProjects() {
        for (const query of queryList) {
            const project: Project = {
                name: "",
                description: "",
                language: "",
                license: {
                    name: "",
                    url: "",
                },
                url: "",
                alt_url: "",
            };

            for (const [index, api] of apiList.entries()) {
                try {
                    const response = await axios.get(api + query);
                    if (!project.name) project.name = response.data.name;
                    if (!project.description) project.description = response.data.description;
                    if (!project.language) project.language = response.data.language;
                    if (!project.license.name) project.license.name = response.data.license?.name;
                    if (!project.license.url) project.license.url = response.data.license?.url;
                    if (index === 0 && !project.url) project.url = response.data.clone_url;
                    if (index !== 0 && !project.alt_url) project.alt_url = response.data.clone_url;
                } catch (error) {
                    if (!axios.isAxiosError(error)) return;
                    console.error(error.message);
                } finally {
                    if (index === 0 && !project.url) project.url = fallbackUrl.main + query;
                    if (index !== 0 && !project.alt_url) project.alt_url = fallbackUrl.alt + query;
                }
            }

            setProjects((prev) => [...prev, project]);
        }
    }

    return <ProjectsContext.Provider value={{ projects, fetchProjects }}>{children}</ProjectsContext.Provider>;
}

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (!context) throw new Error("useProjects must be used within ProjectsProvider");
    return context;
}
