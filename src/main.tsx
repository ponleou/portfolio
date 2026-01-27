// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import { ProjectsProvider } from "./context/Projects.tsx";

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <ProjectsProvider>
        <Router />
    </ProjectsProvider>,
    // </StrictMode>,
);
