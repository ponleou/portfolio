import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import typewriter from "./functions/typewriter";
import TextCursor from "./components/TextCursor";
import CursorFollower from "./components/CursorFollower";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import AlignTarget from "./components/AlignTarget";

export default function Home() {
    const mainTitle = useRef<HTMLDivElement>(null);
    const [renderAfterMainTitle, setRenderAfterMainTitle] = useState<boolean>(false);

    useEffect(() => {
        if (mainTitle.current) {
            setRenderAfterMainTitle(true);
        }
    }, []);

    return (
        <div className="h-[150dvh] bg-bg relative">
            <CursorFollower
                ratePerFrame={0.02}
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
                <div className="opacity-80 flex justify-center items-center animate-scale-pulse-3">
                    <div className="h-20 w-20 blur-2xl bg-primary "></div>
                </div>
            </CursorFollower>

            {/* background stuff elements */}
            <div className="opacity-60">
                <div className="absolute pl-32 pt-12 text-nowrap text-primary">
                    <p>#!/bin/bash</p>
                </div>
                <div className="absolute top-[17dvh]">
                    {renderAfterMainTitle && (
                        <AlignTarget element={mainTitle.current!} toggleAlign={{ x: true, y: false }}>
                            <div className="text-primary -translate-y-1/2 text-nowrap">
                                <p># A computer science student's portfolio</p>
                                <p># A developer for the open-source community</p>
                                <p># An individual based in Melbourne, Australia</p>
                            </div>
                        </AlignTarget>
                    )}
                </div>
            </div>

            <GoldenHorizontal
                className="top-0 h-dvh left-0 right-0 absolute"
                top={
                    <div className="flex justify-center">
                        <h1 ref={mainTitle} className="text-primary text-h1 font-extrabold leading-[0.85]">
                            Keo Ponleou
                        </h1>
                    </div>
                }
                bottom={
                    <div className="text-primary flex items-center flex-col gap-1">
                        <p className="text-h3 font-semibold ">SOFTWARE DEVELOPER</p>
                        <div className="text-base">
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
                                    callback={typewriter}
                                />
                            </TextCursor>
                        </div>
                    </div>
                }
            />
            <div className="top-[100dvh] w-full relative">
                <NavBar
                    className="flex justify-between absolute bottom-0 left-0 right-0 z-1 p-12"
                    navClassName="gap-4 hover:gap-0 transition-all ease-out duration-500  relative 
                    before:transition-all before:ease-out before:duration-500  before:bg-primary before:absolute before:inset-0 before:left-full hover:before:left-1/2 before:-z-1"
                ></NavBar>
            </div>
        </div>
    );
}
