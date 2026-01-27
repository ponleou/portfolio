import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
