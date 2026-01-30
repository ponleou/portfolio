import { NavLink } from "react-router";
import TextSh from "./TextSh";

type Route = {
    to: string;
    hash: string;
};

export default function Navigators({
    className = "",
    routes,
    navClassName = "",
    navLinkClassName = "",
}: {
    className?: string;
    routes: Array<Route>;
    navClassName?: string;
    navLinkClassName?: string;
}) {
    return (
        <div className={`${className}`}>
            {routes.map((route, index) => (
                <NavLink key={index} className={`${navLinkClassName}`} to={`/${route.to}`} state={{ hash: route.hash }}>
                    <TextSh className={`${navClassName}`}>{route.hash}</TextSh>
                </NavLink>
            ))}
        </div>
    );
}
