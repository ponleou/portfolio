import CursorFollower from "../../movement/CursorFollower";
import RevealOn from "../../movement/RevealOn";
import TranslateOnScroll from "../../movement/TranslateOnScroll";
import Particular from "../../Particular";

export default function Background({ revealCircles }: { revealCircles: boolean }) {
    return (
        <>
            {/* backgrounds with noise */}

            {/* cursor */}
            <CursorFollower ratePerFrame={0.05} warpDegree={60} distanceFadeRatio={5}>
                <RevealOn
                    on={revealCircles}
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
                    on={revealCircles}
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
        </>
    );
}
