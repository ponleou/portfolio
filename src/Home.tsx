import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import { typewriter } from "./functions/revealFunctions";
import TextCursor from "./components/TextCursor";
import CursorFollower from "./components/CursorFollower";
import NavBar from "./components/NavBar";
import { useRef, useState } from "react";
import AlignTarget from "./components/AlignTarget";
import RenderAfter from "./components/RenderAfter";
import forceRerender from "./functions/forceRerender";
import RevealText from "./components/RevealText";
import RevealOn from "./components/RevealOn";
import TranslateToCursor from "./components/TranslateToCursor";
import TranslateOnScroll from "./components/TranslateOnScroll";
import WidthOnScroll from "./components/WidthOnScroll";
import FontsizeOnScroll from "./components/FontsizeOnScroll";

export default function Home() {
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

    const rerenderPage = forceRerender();

    const [enqueueReveal1, setEnqueueReveal1] = useState<boolean>(false);
    const [enqueueReveal2, setEnqueueReveal2] = useState<boolean>(false);
    const [enqueueReveal3, setEnqueueReveal3] = useState<boolean>(false);
    const [enqueueReveal4, setEnqueueReveal4] = useState<boolean>(false);
    const [enqueueReveal5, setEnqueueReveal5] = useState<boolean>(false);
    const [enqueueReveal6, setEnqueueReveal6] = useState<boolean>(false);
    const [enqueueReveal7, setEnqueueReveal7] = useState<boolean>(false);

    return (
        <div className={`${enqueueReveal7 ? "h-[150dvh]" : "h-dvh"} bg-bg relative`}>
            <TranslateOnScroll direction="vertical" rate={0.15} maxScroll={window.innerHeight}>
                <RevealOn
                    on={enqueueReveal6}
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
                                <div className="m-[17rem] w-[1px] opacity-40 aspect-square rounded-full bg-accent shadow-accent shadow-[0_0_200px_17rem]"></div>
                            </div>
                        </TranslateOnScroll>
                        <TranslateOnScroll
                            direction="horizontal"
                            rate={-window.innerWidth / window.innerHeight}
                            maxScroll={window.innerHeight}
                        >
                            <div className="top-0 right-[6dvw] absolute animate-scale-pulse-5 rounded-full">
                                <div className="m-[25rem] w-[1px] opacity-40 aspect-square rounded-full bg-primary shadow-primary shadow-[0_0_200px_25rem]"></div>
                            </div>
                        </TranslateOnScroll>
                    </div>
                </RevealOn>
            </TranslateOnScroll>

            <CursorFollower
                ratePerFrame={0.05}
                warpDegree={60}
                distanceFadeRatio={5}
                // filter={<div className="bg-[url(assets/noise.svg)] absolute inset-0 mix-blend-color-dodge"></div>}
            >
                <RevealOn
                    on={enqueueReveal6}
                    className="transition-all ease-out duration-500"
                    preRevealClass="opacity-0"
                    postRevealClass="opacity-100"
                >
                    <div className="flex justify-center items-center animate-scale-pulse-3">
                        {/* <div className="aspect-square w-20 rounded-full blur-2xl bg-primary"></div> */}
                        <div className="w-[1px] m-10 aspect-square rounded-full bg-primary-20 shadow-primary shadow-[0_0_80px_3rem]"></div>
                    </div>
                </RevealOn>
            </CursorFollower>

            {/* noise filter */}
            <div className="bg-[url(assets/noise.svg)] opacity-40 absolute inset-0 mix-blend-color-dodge"></div>

            {/* background stuff elements */}
            <div className="opacity-60 text-base-ad">
                <div ref={codeLineContainer} className="absolute pl-12 text-primary ">
                    <RenderAfter after={bashText.current} rerenderCallback={rerenderPage}>
                        <AlignTarget
                            parent={codeLineContainer.current!}
                            alignTo={bashText.current!}
                            alignPosition="top"
                        >
                            1
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={mainTitle.current} rerenderCallback={rerenderPage}>
                        <RenderAfter after={descText1.current} rerenderCallback={rerenderPage}>
                            <AlignTarget
                                parent={codeLineContainer.current!}
                                alignTo={descText1.current!}
                                alignPosition="top"
                            >
                                <RevealOn
                                    on={enqueueReveal1}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0"
                                    postRevealClass="opacity-100"
                                >
                                    2
                                </RevealOn>
                            </AlignTarget>
                        </RenderAfter>
                        <RenderAfter after={descText2.current} rerenderCallback={rerenderPage}>
                            <AlignTarget
                                parent={codeLineContainer.current!}
                                alignTo={descText2.current!}
                                alignPosition="top"
                            >
                                <RevealOn
                                    on={enqueueReveal2}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0"
                                    postRevealClass="opacity-100"
                                >
                                    3
                                </RevealOn>
                            </AlignTarget>
                        </RenderAfter>
                        <RenderAfter after={descText3.current} rerenderCallback={rerenderPage}>
                            <AlignTarget
                                parent={codeLineContainer.current!}
                                alignTo={descText3.current!}
                                alignPosition="top"
                            >
                                <RevealOn
                                    on={enqueueReveal3}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0"
                                    postRevealClass="opacity-100"
                                >
                                    4
                                </RevealOn>
                            </AlignTarget>
                        </RenderAfter>
                    </RenderAfter>

                    <RenderAfter after={mainTitleContainer.current} rerenderCallback={rerenderPage}>
                        <AlignTarget
                            parent={codeLineContainer.current!}
                            alignTo={mainTitleContainer.current!}
                            alignPosition="top"
                        >
                            <RevealOn
                                on={enqueueReveal4}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                5
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={roleTitle.current} rerenderCallback={rerenderPage}>
                        <AlignTarget
                            parent={codeLineContainer.current!}
                            alignTo={roleTitle.current!}
                            alignPosition="top"
                        >
                            <RevealOn
                                on={enqueueReveal5}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                6
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={skillText.current} rerenderCallback={rerenderPage}>
                        <AlignTarget
                            parent={codeLineContainer.current!}
                            alignTo={skillText.current!}
                            alignPosition="top"
                        >
                            <RevealOn
                                on={enqueueReveal6}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                7
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>
                </div>

                <TranslateOnScroll direction="vertical" rate={-0.01} maxScroll={window.innerHeight}>
                    <div className="absolute pl-32 pt-12 text-nowrap text-primary">
                        <div ref={bashText}>
                            <RevealText
                                text="#!/bin/bash"
                                revealCallback={typewriter}
                                delayPerCallback={30}
                                finishedCallback={(bool) => setTimeout(() => setEnqueueReveal1(bool), 100)}
                            ></RevealText>
                        </div>
                    </div>
                </TranslateOnScroll>
                <TranslateOnScroll direction="vertical" rate={-0.15} maxScroll={window.innerHeight}>
                    <div ref={descTextContainer} className="absolute top-[19dvh]">
                        <RenderAfter after={mainTitle.current} rerenderCallback={rerenderPage}>
                            <AlignTarget
                                parent={descTextContainer.current!}
                                alignTo={mainTitle.current!}
                                alignPosition="left"
                            >
                                <div className="text-primary -translate-y-1/2 text-nowrap ">
                                    <div ref={descText1}>
                                        <RevealText
                                            text="# A computer science student's portfolio"
                                            revealCallback={typewriter}
                                            delayPerCallback={30}
                                            startOn={enqueueReveal1}
                                            finishedCallback={(bool) => setTimeout(() => setEnqueueReveal2(bool), 400)}
                                        ></RevealText>
                                    </div>
                                    <div ref={descText2}>
                                        <RevealText
                                            text="# A developer for the open-source community"
                                            revealCallback={typewriter}
                                            delayPerCallback={30}
                                            startOn={enqueueReveal2}
                                            finishedCallback={(bool) => setTimeout(() => setEnqueueReveal3(bool), 400)}
                                        ></RevealText>
                                    </div>
                                    <div ref={descText3}>
                                        <RevealText
                                            text="# An individual based in Melbourne, Australia"
                                            revealCallback={typewriter}
                                            delayPerCallback={30}
                                            startOn={enqueueReveal3}
                                            finishedCallback={(bool) => {
                                                setTimeout(() => setEnqueueReveal4(bool), 500);
                                                setTimeout(() => setEnqueueReveal5(bool), 600);
                                                setTimeout(() => setEnqueueReveal6(bool), 700);
                                                setTimeout(() => setEnqueueReveal7(bool), 800);
                                            }}
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
                    <TranslateOnScroll direction="vertical" rate={-0.4} maxScroll={window.innerHeight}>
                        <div ref={mainTitleContainer} className="flex justify-center">
                            <RevealOn
                                on={enqueueReveal4}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0 -translate-y-8"
                                postRevealClass="opacity-100 translate-y-0"
                            >
                                <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                                    <h1
                                        ref={mainTitle}
                                        className="text-primary text-h1-ad font-extrabold leading-[1em]"
                                    >
                                        Keo Ponleou
                                    </h1>
                                </TranslateToCursor>
                            </RevealOn>
                        </div>
                    </TranslateOnScroll>
                }
                bottom={
                    <TranslateOnScroll direction="vertical" rate={-0.65} maxScroll={window.innerHeight}>
                        <div className="text-primary flex items-center flex-col gap-4">
                            <div ref={roleTitle}>
                                <RevealOn
                                    on={enqueueReveal5}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0 -translate-y-8"
                                    postRevealClass="opacity-100 translate-y-0"
                                >
                                    <TranslateToCursor maxTranslate={0.5} translateMultiplier={0.1}>
                                        <p className="text-h3-ad font-semibold leading-[1em]">SOFTWARE DEVELOPER</p>
                                    </TranslateToCursor>
                                </RevealOn>
                            </div>
                            <div ref={skillText} className="text-base-ad leading-none">
                                <RevealOn
                                    on={enqueueReveal6}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0 -translate-y-8"
                                    postRevealClass="opacity-100 translate-y-0"
                                >
                                    <TranslateToCursor maxTranslate={0.5} translateMultiplier={0.1}>
                                        <TextCursor>
                                            <TextCycle
                                                textArray={[
                                                    "React.js",
                                                    "Vue.js",
                                                    "HTML/CSS",
                                                    "JavaScript",
                                                    "TypeScript",
                                                    "Node.js",
                                                    "Python",
                                                    "Git",
                                                    "C/C++",
                                                    "PHP",
                                                    "C#",
                                                    "MySQL",
                                                    "Jenkins CI/CD",
                                                    "Docker",
                                                    "Wordpress",
                                                ]}
                                                changeTime={100}
                                                pauseTime={1500}
                                                revealCallback={typewriter}
                                                startOn={enqueueReveal6}
                                            />
                                        </TextCursor>
                                    </TranslateToCursor>
                                </RevealOn>
                            </div>
                        </div>
                    </TranslateOnScroll>
                }
            />

            <div className="top-[100dvh] w-full relative">
                <RevealOn
                    on={enqueueReveal7}
                    className="transition-all ease-out duration-500"
                    preRevealClass="opacity-0 -translate-y-8"
                    postRevealClass="opacity-100 translate-y-0"
                >
                    <TranslateToCursor maxTranslate={0.5} translateMultiplier={0.1}>
                        <RenderAfter after={enqueueReveal7} rerenderCallback={rerenderPage}>
                            <FontsizeOnScroll
                                className="absolute duration-[0] bottom-0 left-0 right-0 z-1 p-12 text-accent font-bold"
                                initialRem={1.2}
                                finalRem={1.6}
                            >
                                <WidthOnScroll initialPercent={100} finalPercent={90} className="flex justify-center">
                                    <NavBar
                                        className="flex justify-between"
                                        navClassName="gap-4 hover:gap-0 transition-[gap] ease-out duration-500  relative
                                    before:transition-all before:ease-out before:duration-500  before:bg-primary before:absolute before:inset-0 before:left-full hover:before:left-1/2 before:-z-1"
                                    ></NavBar>
                                </WidthOnScroll>
                            </FontsizeOnScroll>
                        </RenderAfter>
                    </TranslateToCursor>
                </RevealOn>
            </div>
        </div>
    );
}
