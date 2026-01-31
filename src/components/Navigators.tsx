import { NavLink } from "react-router";
import TextSh from "./TextSh";
import type { MouseEventHandler } from "react";

type Route = {
    to: string;
    hash: string;
};

type ActiveState = {
    matchHash: string;
    navLinkClass?: string;
    navClass?: string;
};

export default function Navigators({
    className = "",
    routes,
    navClassName = "",
    navLinkClassName = "",
    onClick = () => {},
    active,
}: {
    className?: string;
    routes: Array<Route>;
    navClassName?: string;
    navLinkClassName?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    active?: ActiveState;
}) {
    return (
        <div className={`${className}`}>
            {routes.map((route, index) => (
                <NavLink
                    onClick={onClick}
                    key={index}
                    className={`${navLinkClassName} ${active && active.matchHash === route.hash && active.navLinkClass}`}
                    to={`/${route.to}`}
                    state={{ hash: route.hash }}
                >
                    <TextSh
                        className={`${navClassName} ${active && active.matchHash === route.hash && active.navClass}`}
                    >
                        {route.hash}
                    </TextSh>
                </NavLink>
            ))}
        </div>
    );
}
