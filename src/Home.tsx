import GoldenHorizontal from "./components/GoldenHorizontal";
import TextCycle from "./components/TextCycle";
import typewriter from "./functions/typewriter";
import TextCursor from "./components/TextCursor";
import CursorFollower from "./components/CursorFollower";

export default function Home() {
    return (
        <div className="h-[5000px] bg-bg relative">
            <CursorFollower
                ratePerFrame={0.02}
                warpDegree={60}
                distanceFadeRatio={4}
                filter={
                    <div
                        className="
                bg-[url(data:image/svg+xml;base64,ICAgICAgICAgICAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgICAgICAgICAgICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9InR1cmJ1bGVuY2UiCiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VGcmVxdWVuY3k9IjAuNiIKICAgICAgICAgICAgICAgICAgICAgICAgbnVtT2N0YXZlcz0iMiIKICAgICAgICAgICAgICAgICAgICAgICAgc3RpdGNoVGlsZXM9InN0aXRjaCIKICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PSJub2lzZSIKICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgICAgICAgICAgICAgIGluPSJub2lzZSIKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ibWF0cml4IgogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IgogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMgMC4zMyAwLjMzIDAgMAogICAgICAgICAgICAgICAgICAgICAgICAgIDAgICAgMCAgICAwICAgIDEgMCIKICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPgogICAgICAgICAgICA8L3N2Zz4=)]
                absolute inset-0 mix-blend-color-dodge"
                    ></div>
                }
            >
                <div className="opacity-60 flex justify-center items-center animate-scale-pulse-3">
                    <div className="h-20 w-20 blur-2xl bg-primary "></div>
                </div>
            </CursorFollower>
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
