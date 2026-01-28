import { NavLink } from "react-router";
import TextSh from "./TextSh";

export default function NavBar({
    className = "",
    navClassName = "",
    navLinkClassName = "",
}: {
    className?: string;
    navClassName?: string;
    navLinkClassName?: string;
}) {
    return (
        <div className={`${className}`}>
            <NavLink className={`${navLinkClassName}`} to="/about" state={{ hash: "main" }}>
                <TextSh className={`${navClassName}`}>about</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/experience" state={{ hash: "main" }}>
                <TextSh className={`${navClassName}`}>experience</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/projects" state={{ hash: "main" }}>
                <TextSh className={`${navClassName}`}>projects</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/education" state={{ hash: "main" }}>
                <TextSh className={`${navClassName}`}>education</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/contacts" state={{ hash: "main" }}>
                <TextSh className={`${navClassName}`}>contacts</TextSh>
            </NavLink>
        </div>
    );
}
