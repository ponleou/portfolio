import { NavLink } from "react-router";
import TextSh from "./TextSh";

export default function Navigators({
    className = "",
    routes,
    navClassName = "",
    navLinkClassName = "",
}: {
    className?: string;
    routes: Array<string>;
    navClassName?: string;
    navLinkClassName?: string;
}) {
    return (
        <div className={`${className}`}>
            {routes.map((route, index) => (
                <NavLink key={index} className={`${navLinkClassName}`} to={`/${route}`} state={{ hash: "main" }}>
                    <TextSh className={`${navClassName}`}>{route}</TextSh>
                </NavLink>
            ))}
        </div>
    );
}
