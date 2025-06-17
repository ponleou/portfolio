import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import { typewriter } from "./functions/revealStyles";
import TextCursor from "./components/TextCursor";
import CursorFollower from "./components/CursorFollower";
import NavBar from "./components/NavBar";
import { useRef, useState } from "react";
import AlignTarget from "./components/AlignTarget";
import RenderAfter from "./components/RenderAfter";
import forceRerender from "./functions/forceRerender";
import RevealText from "./components/RevealText";
import RevealOn from "./components/RevealOn";

export default function Home() {
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
        <div className="h-[150dvh] bg-bg relative">
            <CursorFollower
                // ratePerFrame is affected by hosting server speed
                ratePerFrame={0.05}
                warpDegree={60}
                distanceFadeRatio={5}
                filter={
                    <div
                        className="
                bg-[url(data:image/svg+xml;base64,ICAgICAgICAgICAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgICAgICAgICAgICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9InR1cmJ1bGVuY2UiCiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VGcmVxdWVuY3k9IjAuNiIKICAgICAgICAgICAgICAgICAgICAgICAgbnVtT2N0YXZlcz0iMiIKICAgICAgICAgICAgICAgICAgICAgICAgc3RpdGNoVGlsZXM9InN0aXRjaCIKICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PSJub2lzZSIKICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgICAgICAgICAgICAgIGluPSJub2lzZSIKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ibWF0cml4IgogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IgogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAgICAgMCAgICAwICAgIDEgMCIKICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPgogICAgICAgICAgICA8L3N2Zz4=)]
                absolute inset-0 mix-blend-color-dodge"
                    ></div>
                }
            >
                <RevealOn
                    on={enqueueReveal6}
                    className="transition-all ease-out duration-500"
                    preRevealClass="opacity-0"
                    postRevealClass="opacity-100"
                >
                    <div className="opacity-80 flex justify-center items-center animate-scale-pulse-3">
                        <div className="h-20 w-20 blur-2xl bg-primary "></div>
                    </div>
                </RevealOn>
            </CursorFollower>

            {/* background stuff elements */}
            <div className="opacity-60 text-base">
                <div className="absolute pl-12 text-primary ">
                    <RenderAfter after={bashText.current} rerenderCallback={rerenderPage}>
                        <AlignTarget element={bashText.current!} toggleAlign={{ top: true }}>
                            <RevealOn
                                on={enqueueReveal1}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                1
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={mainTitle.current} rerenderCallback={rerenderPage}>
                        <RenderAfter after={descText1.current} rerenderCallback={rerenderPage}>
                            <AlignTarget element={descText1.current!} toggleAlign={{ top: true }}>
                                <RevealOn
                                    on={enqueueReveal2}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0"
                                    postRevealClass="opacity-100"
                                >
                                    2
                                </RevealOn>
                            </AlignTarget>
                        </RenderAfter>
                        <RenderAfter after={descText2.current} rerenderCallback={rerenderPage}>
                            <AlignTarget element={descText2.current!} toggleAlign={{ top: true }}>
                                <RevealOn
                                    on={enqueueReveal3}
                                    className="transition-all ease-out duration-500"
                                    preRevealClass="opacity-0"
                                    postRevealClass="opacity-100"
                                >
                                    3
                                </RevealOn>
                            </AlignTarget>
                        </RenderAfter>
                        <RenderAfter after={descText3.current} rerenderCallback={rerenderPage}>
                            <AlignTarget element={descText3.current!} toggleAlign={{ top: true }}>
                                <RevealOn
                                    on={enqueueReveal4}
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
                        <AlignTarget element={mainTitleContainer.current!} toggleAlign={{ top: true }}>
                            <RevealOn
                                on={enqueueReveal5}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                5
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={roleTitle.current} rerenderCallback={rerenderPage}>
                        <AlignTarget element={roleTitle.current!} toggleAlign={{ top: true }}>
                            <RevealOn
                                on={enqueueReveal6}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                6
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>

                    <RenderAfter after={skillText.current} rerenderCallback={rerenderPage}>
                        <AlignTarget element={skillText.current!} toggleAlign={{ top: true }}>
                            <RevealOn
                                on={enqueueReveal7}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0"
                                postRevealClass="opacity-100"
                            >
                                7
                            </RevealOn>
                        </AlignTarget>
                    </RenderAfter>
                </div>
                <div className="absolute pl-32 pt-12 text-nowrap text-primary">
                    <div ref={bashText}>
                        <RevealText
                            text="#!/bin/bash"
                            revealCallback={typewriter}
                            delayPerCallback={50}
                            finishedCallback={(bool) => setTimeout(() => setEnqueueReveal1(bool), 100)}
                        ></RevealText>
                    </div>
                </div>
                <div className="absolute top-[19dvh]">
                    <RenderAfter after={mainTitle.current} rerenderCallback={rerenderPage}>
                        <AlignTarget element={mainTitle.current!} toggleAlign={{ left: true }}>
                            <div className="text-primary -translate-y-1/2 text-nowrap ">
                                <div ref={descText1}>
                                    <RevealText
                                        text="# A computer science student's portfolio"
                                        revealCallback={typewriter}
                                        delayPerCallback={30}
                                        startOn={enqueueReveal1}
                                        finishedCallback={(bool) => setTimeout(() => setEnqueueReveal2(bool), 100)}
                                    ></RevealText>
                                </div>
                                <div ref={descText2}>
                                    <RevealText
                                        text="# A developer for the open-source community"
                                        revealCallback={typewriter}
                                        delayPerCallback={30}
                                        startOn={enqueueReveal2}
                                        finishedCallback={(bool) => setTimeout(() => setEnqueueReveal3(bool), 100)}
                                    ></RevealText>
                                </div>
                                <div ref={descText3}>
                                    <RevealText
                                        text="# An individual based in Melbourne, Australia"
                                        revealCallback={typewriter}
                                        delayPerCallback={30}
                                        startOn={enqueueReveal3}
                                        finishedCallback={(bool) => setTimeout(() => setEnqueueReveal4(bool), 100)}
                                    ></RevealText>
                                </div>
                            </div>
                        </AlignTarget>
                    </RenderAfter>
                </div>
            </div>

            <GoldenHorizontal
                className="top-0 h-dvh left-0 right-0 absolute"
                top={
                    <div ref={mainTitleContainer} className="flex justify-center">
                        <RevealOn
                            on={enqueueReveal4}
                            className="transition-all ease-out duration-500"
                            preRevealClass="opacity-0 -translate-y-8"
                            postRevealClass="opacity-100 translate-y-0"
                            finishedCallback={() => {
                                setEnqueueReveal5(true);
                            }}
                        >
                            <h1
                                ref={mainTitle}
                                className="text-primary text-h1-sm lg:text-h1 font-extrabold leading-[1em]"
                            >
                                Keo Ponleou
                            </h1>
                        </RevealOn>
                    </div>
                }
                bottom={
                    <div className="text-primary flex items-center flex-col gap-4">
                        <p ref={roleTitle} className="text-h3 font-semibold leading-[1em] ">
                            <RevealOn
                                on={enqueueReveal5}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0 -translate-y-8"
                                postRevealClass="opacity-100 translate-y-0"
                                finishedCallback={() => {
                                    setEnqueueReveal6(true);
                                }}
                            >
                                SOFTWARE DEVELOPER
                            </RevealOn>
                        </p>
                        <div ref={skillText} className="text-base leading-none">
                            <RevealOn
                                on={enqueueReveal6}
                                className="transition-all ease-out duration-500"
                                preRevealClass="opacity-0 -translate-y-8"
                                postRevealClass="opacity-100 translate-y-0"
                                finishedCallback={() => {
                                    setEnqueueReveal7(true);
                                }}
                            >
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
                            </RevealOn>
                        </div>
                    </div>
                }
            />
            <div className="top-[100dvh] w-full relative">
                <RevealOn
                    on={enqueueReveal7}
                    className="transition-all ease-out duration-500"
                    preRevealClass="opacity-0 -translate-y-8"
                    postRevealClass="opacity-100 translate-y-0"
                >
                    <NavBar
                        className="flex justify-between absolute bottom-0 left-0 right-0 z-1 p-12"
                        navClassName="gap-4 hover:gap-0 transition-all ease-out duration-500  relative 
                    before:transition-all before:ease-out before:duration-500  before:bg-primary before:absolute before:inset-0 before:left-full hover:before:left-1/2 before:-z-1"
                    ></NavBar>
                </RevealOn>
            </div>
        </div>
    );
}
