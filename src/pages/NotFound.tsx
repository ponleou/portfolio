import { useOutletContext } from "react-router";
import type { HomeContextType } from "../types/home";

export default function NotFound() {
    const { relativePath } = useOutletContext<HomeContextType>();
    return (
        <div className="px-24 py-48 h-dvh" id="main">
            <div className="flex text-primary text-base-ad">
                <p>
                    bash: <span className="">{relativePath !== "" ? `./${relativePath}.sh` : ""}</span>: No such file or
                    directory
                </p>
            </div>
        </div>
    );
}
