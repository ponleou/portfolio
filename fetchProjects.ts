import fs from "fs";
import axios from "axios";
import { projectList, apiList } from "./src/content/projects_source";

async function fetchProjects() {
    const projects: Record<string, object> = {};

    for (const [index, api] of apiList.entries()) {
        for (const projectRepo of projectList) {
            try {
                const response = await axios.get(api + projectRepo);
                projects[projectRepo] = response.data;
            } catch (error) {
                if (!(error instanceof Error)) return;
                console.error(error.message);
            }
        }
        fs.writeFileSync(
            `src/data${process.env.ENVIRONMENT === "development" ? "/dev" : ""}/projects-${index}.json`,
            JSON.stringify(projects, null, 4),
        );
    }
}

fetchProjects();
