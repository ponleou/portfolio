import { useEffect, useRef, useState } from "react";
import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import typewriter from "./functions/typewriter";
import TextCursor from "./components/TextCursor";

export default function Home() {
    useEffect(() => {}, []);

    return (
        <div className="h-[5000px] bg-bg relative">
            testas etaset
            <GoldenHorizontal
                className="top-0 h-dvh w-dvw absolute"
                top={<h1 className="text-primary text-h1 font-extrabold leading-[0.85] text-center">Keo Ponleou</h1>}
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
        </div>
    );
}
