import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import Pages from "./pages/Pages";

function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="page" element={<Pages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
