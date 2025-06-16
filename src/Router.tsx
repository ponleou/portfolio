import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import Home from "./Home";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
