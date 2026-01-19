import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
