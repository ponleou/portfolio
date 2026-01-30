import GoldenHorizontal from "../components/placement/GoldenHorizontal";
import TextCycle from "../components/TextCycle";
import { typewriter } from "../functions/revealFunctions";
import TextCursor from "../components/TextCursor";
import CursorFollower from "../components/movement/CursorFollower";
import Navigators from "../components/Navigators";
import { useEffect, useRef, useState } from "react";
import AlignTarget from "../components/placement/AlignTarget";
import RenderAfter from "../components/movement/RenderAfter";
import RevealText from "../components/movement/RevealText";
import RevealOn from "../components/movement/RevealOn";
import TranslateToCursor from "../components/movement/TranslateToCursor";
import TranslateOnScroll from "../components/movement/TranslateOnScroll";
import WidthOnScroll from "../components/movement/WidthOnScroll";
import FontsizeOnScroll from "../components/movement/FontsizeOnScroll";
import { Icon } from "@iconify-icon/react";
import Lined from "../components/Lined";
import RevealOnScroll from "../components/movement/RevealOnScroll";
import { Outlet, useLocation, useMatch, useNavigate } from "react-router";
import type { HomeContextType } from "../types/home";
import { ScrollEvent } from "../functions/subscribeEvents";
import delay from "../functions/delay";
import profile from "../content/profile";
import contact from "../content/contact";
import ScrollProgress from "../components/movement/ScrollProgress";
import Particular from "../components/Particular";

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

    const innerHeightRatios = {
        bashCommandAtBottom: 0.2,
        skillsTextAtTop: 0.45,
        outletAtBottom: 0.6,
        lsCommandAtTop: 0.8,
        bashCommandAtTop: 1.2,
    };

    /**
     * Route location management (includes redirect to home and hiding elements)
     */
    const routes = ["about", "experience", "projects", "education", "contacts"];

    const [showTopNav, setShowTopNav] = useState(false);

    useEffect(() => {
        const toggleTopNav = () => {
            if (window.scrollY >= window.innerHeight * innerHeightRatios.bashCommandAtTop) setShowTopNav(true);
            else setShowTopNav(false);
        };

        ScrollEvent.subscribe(toggleTopNav);

        return () => {
            ScrollEvent.unsubscribe(toggleTopNav);
        };
    }, []);

    const match = useMatch("/*") || null;
    const relativePath = (match !== null ? match.params["*"] || "" : "").replace(/\/$/, "");

    const location = useLocation();
    const navigate = useNavigate();

    const [showOutletProgress, setShowOutletProgress] = useState(false);
    const [renderOutletProgress, setRenderOutletProgress] = useState(false);

    useEffect(() => {
        if (showOutletProgress) setRenderOutletProgress(true);
    }, [showOutletProgress]);

    useEffect(() => {
        const returnNavHome = () => {
            if (location.pathname === "/") return;

            if (window.scrollY <= window.innerHeight * (innerHeightRatios.outletAtBottom - 0.1)) {
                // -0.1 because i want the renavigate to happen a bit later when scrolling up
                navigate("//");
                setShowOutletProgress(false);

                ScrollEvent.unsubscribe(returnNavHome);
            }
        };

        let cancelEffect = false;

        const effect = async () => {
            const hash = location.state?.hash || "";
            if (hash) {
                setRenderOutletProgress(false);
                // this delay should NOT be solving ref or sth, this delay is there for styling purposes only
                // there is an animation that users should see before it scrolls into view
                await delay(150);
                if (cancelEffect) return;
                setShowOutletProgress(true);
                setRenderOutletProgress(true);

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
                {/* backgrounds with noise */}

                {/* cursor */}
                <CursorFollower ratePerFrame={0.05} warpDegree={60} distanceFadeRatio={5}>
                    <RevealOn
                        on={revealSkillsText}
                        className="transition-all ease-out duration-500"
                        preRevealClass="opacity-0"
                        postRevealClass="opacity-100"
                    >
                        <div className="flex justify-center items-center animate-scale-pulse-3">
                            <div className="w-px m-10 aspect-square rounded-full bg-primary-20 shadow-primary-80 shadow-[0_0_80px_3rem]"></div>
                        </div>
                    </RevealOn>
                </CursorFollower>

                {/* circles */}
                <TranslateOnScroll direction="vertical" rate={0.15} maxScroll={window.innerHeight}>
                    <RevealOn
                        on={revealSkillsText}
                        className="transition-opacity ease-out duration-1000"
                        preRevealClass="opacity-0"
                        postRevealClass="opacity-100"
                    >
                        <div className="blur-3xl">
                            <TranslateOnScroll
                                direction="horizontal"
                                rate={-window.innerWidth / window.innerHeight}
                                maxScroll={window.innerHeight}
                            >
                                <div className="-top-[15dvh] right-[3dvw] absolute animate-scale-pulse-4 rounded-full">
                                    <div className="m-68 w-px opacity-40 aspect-square rounded-full bg-accent shadow-accent-80 shadow-[0_0_200px_17dvh]"></div>
                                </div>
                            </TranslateOnScroll>
                            <TranslateOnScroll
                                direction="horizontal"
                                rate={-window.innerWidth / window.innerHeight}
                                maxScroll={window.innerHeight}
                            >
                                <div className="top-0 right-[3dvw] absolute animate-scale-pulse-5 rounded-full">
                                    <div className="m-100 w-px opacity-40 aspect-square rounded-full bg-primary shadow-primary-80 shadow-[0_0_200px_25dvh]"></div>
                                </div>
                            </TranslateOnScroll>
                        </div>
                    </RevealOn>
                </TranslateOnScroll>

                <div className="inset-0 top-[125dvh] absolute top-fade-[25dvh]">
                    <Particular
                        componentSpeed={{ min: { x: -0.2, y: -0.2 }, max: { x: 0.2, y: 0.2 } }}
                        radius={{ min: 1, max: 3 }}
                        lifespan={{ min: 100, max: 1000 }}
                        primaryColorVar="--color-primary"
                        accentColorVar="--color-accent"
                        particleDensity={0.000015}
                    ></Particular>
                </div>

                {/* noise filter */}
                <div className="bg-[url(assets/noise.svg)] opacity-40 absolute inset-0 mix-blend-color-dodge"></div>

                {/* start page */}
                <div className={`${revealNavigators ? "h-[150dvh]" : "h-dvh"} relative`}>
                    <div className="opacity-60 text-base-ad">
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

                    {/* scroll out of main page to see nav terminal */}
                    <RevealOnScroll
                        scrollTo={window.innerHeight * innerHeightRatios.bashCommandAtBottom}
                        preRevealClass="opacity-0"
                        postRevealClass="opacity-100"
                        className="h-dvh absolute left-0 right-0 bottom-0 transition-opacity ease-out duration-500"
                        finishedCallback={(reveal) => setRevealNavigatorsFooter(reveal)}
                        resetCallback={(reveal) => setRevealNavigatorsFooter(reveal)}
                    >
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
                                    postRevealClass="opacity-40"
                                    className="transition-opacity ease-out duration-500"
                                >
                                    <div
                                        className={`top-0 left-0 right-0 text-primary text-base-ad m-6 z-2 fixed ${showTopNav && "backdrop-blur-md bg-bg/10"}`}
                                    >
                                        <div
                                            className={`p-6 overflow-hidden grid grid-cols-[1fr_auto_1fr] gap-12 items-center transition-colors duration-300 ease-out rounded-xl ${showTopNav && "border-primary-20 border"}`}
                                        >
                                            <div className="flex gap-24 overflow-hidden">
                                                <RevealOn
                                                    on={showTopNav}
                                                    preRevealClass="opacity-0 pointer-events-none"
                                                    postRevealClass="opacity-100"
                                                    className="transition-opacity ease-out duration-300"
                                                >
                                                    <Navigators
                                                        className="flex gap-24 overflow-hidden"
                                                        routes={routes
                                                            .filter((route) => route !== relativePath)
                                                            .filter(
                                                                (_, index, arr) =>
                                                                    index <= -1 + Math.ceil(arr.length / 2),
                                                            )}
                                                        navClassName="inline-flex gap-4 hover:gap-0 hover:text-accent transition-all ease-out duration-500 font-bold"
                                                    />
                                                </RevealOn>
                                            </div>
                                            <div className="justify-self-center">
                                                <Lined
                                                    cssColor="var(--color-primary)"
                                                    lengthRem={10}
                                                    gapRem={2.5}
                                                    orientation="horizontal"
                                                >
                                                    <RevealText
                                                        initialText=""
                                                        text={`WELCOME TO ${relativePath === "" ? "THE TERMINAL" : relativePath.toUpperCase()} `}
                                                        revealCallback={typewriter}
                                                        delayPerCallback={30}
                                                        startOn={revealNavigatorsTitle}
                                                        allowReset={true}
                                                    ></RevealText>
                                                </Lined>
                                            </div>
                                            <div className="flex gap-24 justify-end overflow-hidden">
                                                <RevealOn
                                                    on={showTopNav}
                                                    preRevealClass="opacity-0 pointer-events-none"
                                                    postRevealClass="opacity-100"
                                                    className="transition-opacity ease-out duration-300"
                                                >
                                                    <Navigators
                                                        className="flex gap-24 justify-end overflow-hidden"
                                                        routes={routes
                                                            .filter((route) => route !== relativePath)
                                                            .filter(
                                                                (_, index, arr) =>
                                                                    index > -1 + Math.ceil(arr.length / 2),
                                                            )}
                                                        navClassName="inline-flex gap-4 hover:gap-0 hover:text-accent transition-all ease-out duration-500 font-bold"
                                                    />
                                                </RevealOn>
                                            </div>
                                        </div>
                                        {showTopNav && (
                                            <div className="bg-[url(assets/noise.svg)] opacity-30 absolute inset-0 pointer-events-none mix-blend-color"></div>
                                        )}
                                    </div>
                                </RevealOnScroll>
                            </RevealOn>
                        </RevealOnScroll>
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
                                                    text={relativePath !== "" ? `./${relativePath}.sh` : ""}
                                                    revealCallback={typewriter}
                                                    delayPerCallback={15}
                                                />
                                            </span>
                                        </TextCursor>
                                    </div>
                                }
                            ></GoldenHorizontal>
                            <div className="absolute bottom-0 right-0 left-0">
                                <div className="text-primary text-h4-ad opacity-60 font-light no-ligatures">
                                    <RenderAfter after={renderOutletProgress} allowUnrender={true}>
                                        <RevealOn
                                            on={showOutletProgress}
                                            className="transition-opacity ease-out duration-500"
                                            preRevealClass="opacity-0"
                                            postRevealClass="opacity-100"
                                            resetCallback={(fin) => {
                                                setRenderOutletProgress(fin);
                                            }}
                                        >
                                            <TranslateOnScroll
                                                direction="vertical-reverse"
                                                rate={0.17}
                                                maxScroll={window.innerHeight}
                                                start={2.5 * window.innerHeight}
                                            >
                                                <ScrollProgress targetElementId="main" />
                                            </TranslateOnScroll>
                                        </RevealOn>
                                    </RenderAfter>
                                </div>
                            </div>
                        </div>
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
                                    postRevealClass="opacity-40"
                                    className="transition-opacity ease-out duration-500"
                                >
                                    <Lined
                                        cssColor="var(--color-primary)"
                                        enable={{ start: true }}
                                        lengthRem={10}
                                        gapRem={2.5}
                                        orientation="horizontal"
                                    >
                                        <RevealText
                                            initialText=""
                                            text="&copy; 2025-2026 KEO PONLEOU SOK. ALL RIGHTS RESERVED."
                                            revealCallback={typewriter}
                                            delayPerCallback={30}
                                            startOn={revealNavigatorsFooter}
                                            allowReset={true}
                                        ></RevealText>
                                    </Lined>
                                </RevealOnScroll>
                            </RevealOn>
                        </div>
                    </RevealOnScroll>
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
                            <div className="grow relative">
                                <div className="text-h4-ad text-primary-60 p-12 bottom-0 right-0 absolute">
                                    <TranslateOnScroll direction="vertical" rate={-1} maxScroll={window.innerHeight}>
                                        <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                            <Lined
                                                lengthRem={8}
                                                orientation="vertical"
                                                gapRem={2}
                                                cssColor="var(--color-primary-60)"
                                            >
                                                <a
                                                    className="transition-colors duration-500 ease-out hover:text-primary"
                                                    href={contact.codeberg}
                                                    target="_blank"
                                                    title="codeberg!"
                                                >
                                                    <Icon icon="simple-icons:codeberg" width="1em" height="1em" />
                                                </a>
                                                <Lined
                                                    lengthRem={1.2}
                                                    orientation="vertical"
                                                    lineOrientation="horizontal"
                                                    gapRem={2}
                                                    cssColor="var(--color-primary-60)"
                                                >
                                                    <a
                                                        className="transition-colors duration-500 ease-out hover:text-primary"
                                                        href={contact.github}
                                                        target="_blank"
                                                        title="eww github, check out codeberg instead"
                                                    >
                                                        <Icon icon="mdi:github" width="1em" height="1em" />
                                                    </a>
                                                </Lined>
                                                <Lined
                                                    lengthRem={1.2}
                                                    orientation="vertical"
                                                    lineOrientation="horizontal"
                                                    gapRem={2}
                                                    cssColor="var(--color-primary-60)"
                                                    enable={{ end: true }}
                                                >
                                                    <a
                                                        className="transition-colors duration-500 ease-out hover:text-primary"
                                                        href={contact.linkedin}
                                                        target="_blank"
                                                        title="LinkedIn"
                                                    >
                                                        <Icon icon="mdi:linkedin" width="1em" height="1em" />
                                                    </a>
                                                </Lined>
                                                <a
                                                    className="transition-colors duration-500 ease-out hover:text-primary"
                                                    href={`mailto:${contact.email}`}
                                                    target="_blank"
                                                    title={contact.email}
                                                >
                                                    <Icon icon="mdi:email" width="1em" height="1em" />
                                                </a>
                                            </Lined>
                                        </TranslateToCursor>
                                    </TranslateOnScroll>
                                </div>
                            </div>
                            <div className="w-full relative">
                                <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                    <RenderAfter after={revealNavigators}>
                                        <FontsizeOnScroll
                                            className="transition-all ease-out duration-150 bottom-0 left-0 right-0 z-1 p-12 text-accent font-bold"
                                            initialRem={1.2}
                                            finalRem={1.6}
                                        >
                                            <WidthOnScroll
                                                initialPercent={100}
                                                finalPercent={85}
                                                className="flex justify-center"
                                                childClassName="transition-all duration-150 ease-out"
                                            >
                                                <Navigators
                                                    className="transition-all ease-out duration-500 flex justify-between items-center flex-wrap gap-y-8 gap-x-[2.5em]"
                                                    routes={routes}
                                                    navLinkClassName=""
                                                    navClassName="inline-flex gap-4 hover:gap-0 transition-[gap] ease-out duration-500 relative
                                        before:transition-all before:ease-out before:duration-500  before:bg-primary before:absolute before:inset-0 before:left-full hover:before:left-1/2 before:-z-1"
                                                ></Navigators>
                                            </WidthOnScroll>
                                        </FontsizeOnScroll>
                                    </RenderAfter>
                                </TranslateToCursor>
                            </div>
                        </div>
                    </RevealOn>
                </div>
                <div ref={outletDiv} className="relative z-1">
                    {/* <div className="bg-[url(assets/noise.svg)] opacity-40 absolute inset-0 mix-blend-color-dodge"></div> */}
                    <Outlet context={{ relativePath } satisfies HomeContextType} />
                </div>
            </div>
        </>
    );
}
