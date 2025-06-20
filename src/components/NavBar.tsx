import { NavLink } from "react-router";
import TextSh from "./TextSh";
import TranslateToCursor from "./TranslateToCursor";

export default function NavBar({ className = "", navClassName = "" }: { className?: string; navClassName?: string }) {
    return (
        <div className={`${className} text-accent text-base font-bold`}>
            <NavLink to="/about">
                <TextSh className={`${navClassName}`}>about</TextSh>
            </NavLink>
            <NavLink to="/experience">
                <TextSh className={`${navClassName}`}>experience</TextSh>
            </NavLink>
            <NavLink to="/projects">
                <TextSh className={`${navClassName}`}>projects</TextSh>
            </NavLink>
            <NavLink to="/skills">
                <TextSh className={`${navClassName}`}>skills</TextSh>
            </NavLink>
            <NavLink to="/contact">
                <TextSh className={`${navClassName}`}>contact</TextSh>
            </NavLink>
        </div>
    );
}
