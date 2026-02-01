import GoldenHorizontal from "../components/placement/GoldenHorizontal";
import TextCycle from "../components/TextCycle";
import { typewriter } from "../functions/revealFunctions";
import TextCursor from "../components/TextCursor";
import { useEffect, useRef, useState } from "react";
import AlignTarget from "../components/placement/AlignTarget";
import RenderAfter from "../components/movement/RenderAfter";
import RevealText from "../components/movement/RevealText";
import RevealOn from "../components/movement/RevealOn";
import TranslateToCursor from "../components/movement/TranslateToCursor";
import TranslateOnScroll from "../components/movement/TranslateOnScroll";
import RevealOnScroll from "../components/movement/RevealOnScroll";
import { Outlet, useLocation, useNavigate } from "react-router";
import type { InnerHeightRatios } from "../types/home";
import { ScrollEvent } from "../functions/subscribeEvents";
import delay from "../functions/delay";
import profile from "../content/profile";
import TopNavigator from "../components/pages/home/TopNavigator";
import SideContacts from "../components/pages/home/SideContacts";
import BottomNavigator from "../components/pages/home/BottomNavigator";
import Footer from "../components/pages/home/Footer";
import Background from "../components/pages/home/Background";

export default function Home() {
    /**
     * Element reference and revealing management
     */
    const codeLineContainer = useRef<HTMLDivElement>(null);
    const descTextContainer = useRef<HTMLDivElement>(null);

    const mainTitle = useRef<HTMLDivElement>(null);
    const mainTitleContainer = useRef<HTMLDivElement>(null);
    const bashText = useRef<HTMLDivElement>(null);
    const descText1 = useRef<HTMLDivElement>(null);
    const descText2 = useRef<HTMLDivElement>(null);
    const descText3 = useRef<HTMLDivElement>(null);
    const roleTitle = useRef<HTMLDivElement>(null);
    const skillText = useRef<HTMLDivElement>(null);

    const [revealSubtext1, setRevealSubtext1] = useState<boolean>(false);
    const [revealSubtext2, setRevealSubtext2] = useState<boolean>(false);
    const [revealSubtext3, setRevealSubtext3] = useState<boolean>(false);

    const [revealMainTitle, setRevealMainTitle] = useState<boolean>(false);
    const [revealRoleTitle, setRevealRoleTitle] = useState<boolean>(false);
    const [revealSkillsText, setRevealSkillsText] = useState<boolean>(false);
    const [revealNavigators, setRevealNavigators] = useState<boolean>(false);

    const [revealNavigatorsTitle, setRevealNavigatorsTitle] = useState<boolean>(false);
    const [revealNavigatorsFooter, setRevealNavigatorsFooter] = useState<boolean>(false);

    const outletDiv = useRef<HTMLDivElement>(null);

    const innerHeightRatios: InnerHeightRatios = {
        bashCommandAtBottom: 0.2,
        skillsTextAtTop: 0.45,
        outletAtBottom: 0.6,
        lsCommandAtTop: 0.8,
        bashCommandAtTop: 1.2,
    };

    /**
     * Route location management
     */
    const location = useLocation();
    const navigate = useNavigate();
    const [lastNavClicked, setLastNavClicked] = useState("");

    useEffect(() => {
        // return to home
        const returnNavHome = () => {
            if (location.pathname === "/") return;

            if (window.scrollY <= window.innerHeight * (innerHeightRatios.outletAtBottom - 0.1)) {
                // -0.1 because i want the renavigate to happen a bit later when scrolling up
                navigate("//");
                setLastNavClicked("");

                ScrollEvent.unsubscribe(returnNavHome);
            }
        };

        let cancelEffect = false;

        const effect = async () => {
            const hash = location.state?.hash || "";
            if (hash) {
                setLastNavClicked(hash);
                // this delay should NOT be solving ref or sth, this delay is there for styling purposes only
                // there is an animation that users should see before it scrolls into view
                await delay(150);
                if (cancelEffect) return;

                const element = outletDiv.current!.querySelector(`#${hash}`);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }
            await delay(1000);

            if (cancelEffect) return;
            ScrollEvent.subscribe(returnNavHome);
        };

        effect();

        return () => {
            cancelEffect = true;
            ScrollEvent.unsubscribe(returnNavHome);
        };
    }, [location]);

    return (
        <>
            <div className="bg-bg relative">
                <Background revealCircles={revealSkillsText}></Background>

                {/* start page */}
                <div className={`${revealNavigators ? "h-[150dvh]" : "h-dvh"} relative`}>
                    <div className="opacity-60 text-base-ad">
                        {/* line numbers */}
                        <div ref={codeLineContainer} className="absolute pl-12 text-primary ">
                            <RenderAfter after={bashText.current}>
                                <AlignTarget
                                    parent={codeLineContainer.current!}
                                    alignTo={bashText.current!}
                                    alignPosition="top"
                                >
                                    1
                                </AlignTarget>
                            </RenderAfter>
                            <RenderAfter after={mainTitle.current}>
                                <RenderAfter after={descText1.current}>
                                    <AlignTarget
                                        parent={codeLineContainer.current!}
                                        alignTo={descText1.current!}
                                        alignPosition="top"
                                    >
                                        <RevealOn
                                            on={revealSubtext1}
                                            className="transition-all ease-out duration-500"
                                            preRevealClass="opacity-0"
                                            postRevealClass="opacity-100"
                                        >
                                            2
                                        </RevealOn>
                                    </AlignTarget>
                                </RenderAfter>
                                <RenderAfter after={descText2.current}>
                                    <AlignTarget
                                        parent={codeLineContainer.current!}
                                        alignTo={descText2.current!}
                                        alignPosition="top"
                                    >
                                        <RevealOn
                                            on={revealSubtext2}
                                            className="transition-all ease-out duration-500"
                                            preRevealClass="opacity-0"
                                            postRevealClass="opacity-100"
                                        >
                                            3
                                        </RevealOn>
                                    </AlignTarget>
                                </RenderAfter>
                                <RenderAfter after={descText3.current}>
                                    <AlignTarget
                                        parent={codeLineContainer.current!}
                                        alignTo={descText3.current!}
                                        alignPosition="top"
                                    >
                                        <RevealOn
                                            on={revealSubtext3}
                                            className="transition-all ease-out duration-500"
                                            preRevealClass="opacity-0"
                                            postRevealClass="opacity-100"
                                        >
                                            4
                                        </RevealOn>
                                    </AlignTarget>
                                </RenderAfter>
                            </RenderAfter>
                            <RenderAfter after={mainTitleContainer.current}>
                                <AlignTarget
                                    parent={codeLineContainer.current!}
                                    alignTo={mainTitleContainer.current!}
                                    alignPosition="top"
                                >
                                    <RevealOn
                                        on={revealMainTitle}
                                        className="transition-all ease-out duration-500"
                                        preRevealClass="opacity-0"
                                        postRevealClass="opacity-100"
                                    >
                                        5
                                    </RevealOn>
                                </AlignTarget>
                            </RenderAfter>
                            <RenderAfter after={roleTitle.current}>
                                <AlignTarget
                                    parent={codeLineContainer.current!}
                                    alignTo={roleTitle.current!}
                                    alignPosition="top"
                                >
                                    <RevealOn
                                        on={revealRoleTitle}
                                        className="transition-all ease-out duration-500"
                                        preRevealClass="opacity-0"
                                        postRevealClass="opacity-100"
                                    >
                                        6
                                    </RevealOn>
                                </AlignTarget>
                            </RenderAfter>
                            <RenderAfter after={skillText.current}>
                                <AlignTarget
                                    parent={codeLineContainer.current!}
                                    alignTo={skillText.current!}
                                    alignPosition="top"
                                >
                                    <RevealOn
                                        on={revealSkillsText}
                                        className="transition-all ease-out duration-500"
                                        preRevealClass="opacity-0"
                                        postRevealClass="opacity-100"
                                    >
                                        7
                                    </RevealOn>
                                </AlignTarget>
                            </RenderAfter>
                        </div>
                        {/* background text */}
                        <TranslateOnScroll direction="vertical" rate={0.5} maxScroll={window.innerHeight}>
                            <div className="absolute pl-32 pt-12 text-nowrap text-primary">
                                <div ref={bashText}>
                                    <RevealText
                                        text="#!/bin/bash"
                                        revealCallback={typewriter}
                                        delayPerCallback={30}
                                        finishedCallback={(bool) => {
                                            setTimeout(() => setRevealMainTitle(bool), 500);
                                            setTimeout(() => setRevealRoleTitle(bool), 600);
                                            setTimeout(() => setRevealSkillsText(bool), 700);
                                            setTimeout(() => setRevealNavigators(bool), 800);
                                        }}
                                    ></RevealText>
                                </div>
                            </div>
                        </TranslateOnScroll>
                        {/* background text description */}
                        <TranslateOnScroll direction="vertical" rate={0.15} maxScroll={window.innerHeight}>
                            <div ref={descTextContainer} className="absolute top-[19dvh]">
                                <RenderAfter after={mainTitle.current}>
                                    <AlignTarget
                                        parent={descTextContainer.current!}
                                        alignTo={mainTitle.current!}
                                        alignPosition="left"
                                    >
                                        <div className="text-primary -translate-y-1/2 text-nowrap ">
                                            <div ref={descText1}>
                                                <RevealText
                                                    text="# Open source developer"
                                                    revealCallback={typewriter}
                                                    delayPerCallback={30}
                                                    startOn={revealSubtext1}
                                                    finishedCallback={(bool) =>
                                                        setTimeout(() => setRevealSubtext2(bool), 400)
                                                    }
                                                ></RevealText>
                                            </div>
                                            <div ref={descText2}>
                                                <RevealText
                                                    text="# Computer science student"
                                                    revealCallback={typewriter}
                                                    delayPerCallback={30}
                                                    startOn={revealSubtext2}
                                                    finishedCallback={(bool) =>
                                                        setTimeout(() => setRevealSubtext3(bool), 400)
                                                    }
                                                ></RevealText>
                                            </div>
                                            <div ref={descText3}>
                                                <RevealText
                                                    text="# Based in Melbourne, Australia"
                                                    revealCallback={typewriter}
                                                    delayPerCallback={30}
                                                    startOn={revealSubtext3}
                                                ></RevealText>
                                            </div>
                                        </div>
                                    </AlignTarget>
                                </RenderAfter>
                            </div>
                        </TranslateOnScroll>
                    </div>
                    {/* main page text */}
                    <GoldenHorizontal
                        className="top-0 h-dvh left-0 right-0 absolute"
                        top={
                            <TranslateOnScroll direction="vertical" rate={-0.1} maxScroll={window.innerHeight}>
                                <div ref={mainTitleContainer} className="flex justify-center">
                                    <RevealOn
                                        on={revealMainTitle}
                                        className="transition-all ease-out duration-500"
                                        preRevealClass="opacity-0 -translate-y-8"
                                        postRevealClass="opacity-100 translate-y-0"
                                    >
                                        <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                            <h1
                                                ref={mainTitle}
                                                className="text-primary text-h1-ad font-bold leading-[1em]"
                                            >
                                                {profile.first_name}
                                            </h1>
                                        </TranslateToCursor>
                                    </RevealOn>
                                </div>
                            </TranslateOnScroll>
                        }
                        bottom={
                            <TranslateOnScroll direction="vertical" rate={-0.4} maxScroll={window.innerHeight}>
                                <div className="text-primary flex items-center flex-col gap-4">
                                    <div ref={roleTitle}>
                                        <RevealOn
                                            on={revealRoleTitle}
                                            className="transition-all ease-out duration-500"
                                            preRevealClass="opacity-0 -translate-y-8"
                                            postRevealClass="opacity-100 translate-y-0"
                                        >
                                            <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                                <p className="text-h3-ad font-semibold leading-[1em]">
                                                    {profile.role.toUpperCase()}
                                                </p>
                                            </TranslateToCursor>
                                        </RevealOn>
                                    </div>
                                    <div ref={skillText} className="text-base-ad leading-none">
                                        <RevealOn
                                            on={revealSkillsText}
                                            className="transition-all ease-out duration-500"
                                            preRevealClass="opacity-0 -translate-y-8"
                                            postRevealClass="opacity-100 translate-y-0"
                                        >
                                            <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                                <TextCursor>
                                                    <TextCycle
                                                        textArray={profile.languages}
                                                        changeTime={100}
                                                        pauseTime={1500}
                                                        revealCallback={typewriter}
                                                        startOn={revealSkillsText}
                                                    />
                                                </TextCursor>
                                            </TranslateToCursor>
                                        </RevealOn>
                                    </div>
                                </div>
                            </TranslateOnScroll>
                        }
                    />

                    {/* terminal page */}
                    {/* NOTE: the sidebar and navigation bottom is lower */}
                    <RevealOnScroll
                        scrollTo={window.innerHeight * innerHeightRatios.bashCommandAtBottom}
                        preRevealClass="opacity-0"
                        postRevealClass="opacity-100"
                        className="h-dvh absolute left-0 right-0 bottom-0 transition-opacity ease-out duration-500"
                        finishedCallback={(reveal) => setRevealNavigatorsFooter(reveal)}
                        resetCallback={(reveal) => setRevealNavigatorsFooter(reveal)}
                    >
                        {/* top navigation bar */}
                        <RevealOnScroll
                            scrollTo={window.innerHeight * innerHeightRatios.skillsTextAtTop}
                            preRevealClass="opacity-0"
                            postRevealClass="opacity-100"
                            className="transition-opacity ease-out duration-500"
                            finishedCallback={(reveal) => setRevealNavigatorsTitle(reveal)}
                            resetCallback={(reveal) => setRevealNavigatorsTitle(reveal)}
                        >
                            <RevealOn
                                on={revealNavigatorsTitle}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                {/* darken welcome text when above the terminal sections */}
                                <RevealOnScroll
                                    scrollTo={window.innerHeight * innerHeightRatios.lsCommandAtTop}
                                    resetAt={window.innerHeight * innerHeightRatios.bashCommandAtTop}
                                    preRevealClass="opacity-100"
                                    postRevealClass="opacity-60"
                                    className="transition-opacity ease-out duration-500"
                                >
                                    <TopNavigator
                                        innerHeightRatios={innerHeightRatios}
                                        revealNavigatorsTitle={revealNavigatorsTitle}
                                    ></TopNavigator>
                                </RevealOnScroll>
                            </RevealOn>
                        </RevealOnScroll>

                        {/* terminal text sections */}
                        <div className="w-full h-full relative">
                            <GoldenHorizontal
                                className="text-primary text-base-ad absolute inset-0"
                                top={<div className="pl-24">Ponleou@Portfolio: ~ $ ls</div>}
                                bottom={
                                    <div className="pl-24">
                                        <TextCursor>
                                            Ponleou@Portfolio: ~ $ bash&nbsp;
                                            <span className="text-accent">
                                                <RevealText
                                                    initialText=""
                                                    text={lastNavClicked !== "" ? `./${lastNavClicked}.sh` : ""}
                                                    revealCallback={typewriter}
                                                    delayPerCallback={15}
                                                />
                                            </span>
                                        </TextCursor>
                                    </div>
                                }
                            ></GoldenHorizontal>
                        </div>
                        {/* footer */}
                        <div className="bottom-0 left-0 right-0 text-primary text-base-ad p-12 flex justify-end fixed z-0">
                            <RevealOn
                                on={revealNavigatorsFooter}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                {/* scroll out of nav terminal to darken text */}
                                <RevealOnScroll
                                    scrollTo={window.innerHeight * innerHeightRatios.outletAtBottom}
                                    preRevealClass="opacity-100"
                                    postRevealClass="opacity-60"
                                    className="transition-opacity ease-out duration-500"
                                >
                                    <Footer revealNavigatorsFooter={revealNavigatorsFooter}></Footer>
                                </RevealOnScroll>
                            </RevealOn>
                        </div>
                    </RevealOnScroll>

                    {/* side contacts and bottom navigator */}
                    <RevealOn
                        on={revealNavigators}
                        className="transition-all ease-out duration-500"
                        preRevealClass="opacity-0 -translate-y-8"
                        postRevealClass="opacity-100 translate-y-0"
                        finishedCallback={(bool) => {
                            setTimeout(() => setRevealSubtext1(bool), 100);
                        }}
                    >
                        <div className="h-dvh flex flex-col">
                            <SideContacts></SideContacts>
                            <BottomNavigator revealNavigators={revealNavigators}></BottomNavigator>
                        </div>
                    </RevealOn>
                </div>
                <div ref={outletDiv} className="relative z-1">
                    {/* <div className="bg-[url(assets/noise.svg)] opacity-40 absolute inset-0 mix-blend-color-dodge"></div> */}
                    <Outlet />
                </div>
            </div>
        </>
    );
}
