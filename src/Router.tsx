import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Experience from "./pages/Experience";
import { useEffect } from "react";
import Project from "./pages/Project";
import { useProjects } from "./context/Projects";

function Router() {
    const { projects, fetchProjects } = useProjects();

    useEffect(() => {
        const fetch = async () => {
            await fetchProjects();
        };

        fetch();
    }, []);

    useEffect(() => {
        console.log(projects);
    }, [projects]);

    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="project" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
