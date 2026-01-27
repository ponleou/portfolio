import { useEffect } from "react";
import { projects } from "../content/projects";

export default function Project() {
    useEffect(() => {
        console.log(projects);
    }, []);

    return <div className="px-24 py-48 min-h-dvh" id="main"></div>;
}
