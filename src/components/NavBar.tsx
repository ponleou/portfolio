import { NavLink } from "react-router";
import TextSh from "./TextSh";
import TranslateToCursor from "./TranslateToCursor";

export default function NavBar({ className = "", navClassName = "" }: { className?: string; navClassName?: string }) {
    return (
        <div className={`${className} text-accent text-base font-bold`}>
            <TranslateToCursor maxTranslate={2} translateMultiplier={0.1}>
                <NavLink to="/about">
                    <TextSh className={`${navClassName}`}>about</TextSh>
                </NavLink>
            </TranslateToCursor>
            <TranslateToCursor maxTranslate={2} translateMultiplier={0.1}>
                <NavLink to="/experience">
                    <TextSh className={`${navClassName}`}>experience</TextSh>
                </NavLink>
            </TranslateToCursor>
            <TranslateToCursor maxTranslate={2} translateMultiplier={0.1}>
                <NavLink to="/projects">
                    <TextSh className={`${navClassName}`}>projects</TextSh>
                </NavLink>
            </TranslateToCursor>
            <TranslateToCursor maxTranslate={2} translateMultiplier={0.1}>
                <NavLink to="/skills">
                    <TextSh className={`${navClassName}`}>skills</TextSh>
                </NavLink>
            </TranslateToCursor>
            <TranslateToCursor maxTranslate={2} translateMultiplier={0.1}>
                <NavLink to="/contact">
                    <TextSh className={`${navClassName}`}>contact</TextSh>
                </NavLink>
            </TranslateToCursor>
        </div>
    );
}
