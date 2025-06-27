import { NavLink } from "react-router";
import TextSh from "./TextSh";

export default function NavBar({ className = "", navClassName = "", navLinkClassName = "" }: { className?: string; navClassName?: string; navLinkClassName?: string }) {
    return (
        <div className={`${className}`}>
            <NavLink className={`${navLinkClassName}`} to="/about">
                <TextSh className={`${navClassName}`}>about</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/experience">
                <TextSh className={`${navClassName}`}>experience</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/projects">
                <TextSh className={`${navClassName}`}>projects</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/skills">
                <TextSh className={`${navClassName}`}>skills</TextSh>
            </NavLink>
            <NavLink className={`${navLinkClassName}`} to="/contact">
                <TextSh className={`${navClassName}`}>contact</TextSh>
            </NavLink>
        </div>
    );
}
