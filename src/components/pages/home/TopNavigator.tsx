import { Icon } from "@iconify-icon/react";
import { typewriter } from "../../../functions/revealFunctions";
import Lined from "../../Lined";
import RevealOn from "../../movement/RevealOn";
import RevealText from "../../movement/RevealText";
import Navigators from "../../Navigators";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ScrollEvent, ScrollEventThrottled } from "../../../functions/subscribeEvents";
import type { InnerHeightRatios } from "../../../types/home";
import { routes } from "../../../content/routes";

export default function TopNavigator({
    innerHeightRatios,
    revealNavigatorsTitle,
}: {
    innerHeightRatios: InnerHeightRatios;
    revealNavigatorsTitle: boolean;
}) {
    /* Top nav bar on pages */
    const [showTopNav, setShowTopNav] = useState(false);
    const [toggleMobNav, setToggleMobNav] = useState(false);

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

    /* Current scroll hash match */

    const [hashPosition, setHashPosition] = useState("");

    const location = useLocation();

    useEffect(() => {
        const elements = routes.map((route) => {
            return { hash: route.hash, el: document.getElementById(route.hash) };
        });

        const updateHashPosition = () => {
            let hash = "";
            let maxTop: number | null = null;

            for (const element of elements) {
                if (!element.el) continue;

                const top = element.el.getBoundingClientRect().top - window.innerHeight * 0.25;
                if (top <= 0) {
                    if (maxTop === null) {
                        maxTop = top;
                        hash = element.hash;
                    } else if (top >= maxTop) {
                        maxTop = top;
                        hash = element.hash;
                    }
                }
            }

            if (hash === "") {
                for (const element of elements) {
                    if (!element.el) continue;

                    const top = element.el.getBoundingClientRect().top - window.innerHeight;
                    if (top <= 0) {
                        if (maxTop === null) {
                            maxTop = top;
                            hash = element.hash;
                        } else if (top >= maxTop) {
                            maxTop = top;
                            hash = element.hash;
                        }
                    }
                }
            }

            setHashPosition(hash);
        };

        ScrollEventThrottled.subscribe(updateHashPosition);

        return () => {
            ScrollEventThrottled.unsubscribe(updateHashPosition);
        };
    }, [location]);
    return (
        <div
            className={`top-0 left-0 right-0 text-primary text-base-ad m-6 fixed transition-[max-height] duration-300 ease-out overflow-hidden ${showTopNav && "z-2"}`}
        >
            <div className={`${showTopNav && "backdrop-blur-md bg-bg/10"}`}>
                <div
                    className={`p-6 overflow-hidden grid grid-cols-[1fr_auto_1fr] gap-12 items-center transition-colors duration-300 ease-out rounded-xl ${showTopNav && "border-primary/20 border"}`}
                >
                    <div className="flex gap-24 overflow-hidden">
                        <RevealOn
                            on={showTopNav}
                            preRevealClass="opacity-0 pointer-events-none"
                            postRevealClass="opacity-100"
                            className="transition-opacity ease-out duration-300"
                        >
                            <Navigators
                                className="hidden lg:flex gap-24 overflow-hidden"
                                routes={routes
                                    .filter((route) => route.hash !== hashPosition)
                                    .filter((_, index, arr) => index <= -1 + Math.ceil(arr.length / 2))}
                                navClassName="inline-flex gap-4 hover:gap-0 hover:text-accent transition-all ease-out duration-500 font-bold"
                            />
                        </RevealOn>
                    </div>
                    <div className="justify-self-center flex flex-col items-center">
                        <Lined cssColor="var(--color-primary)" lengthRem={10} gapRem={2.5} orientation="horizontal">
                            <RevealText
                                initialText=""
                                text={`WELCOME TO ${hashPosition === "" ? "THE TERMINAL" : hashPosition.toUpperCase()} `}
                                revealCallback={typewriter}
                                delayPerCallback={30}
                                startOn={revealNavigatorsTitle}
                                allowReset={true}
                            ></RevealText>
                        </Lined>

                        <RevealOn
                            on={showTopNav}
                            preRevealClass="opacity-0 pointer-events-none"
                            postRevealClass="opacity-100"
                            className="transition-opacity ease-out duration-300"
                        >
                            <Navigators
                                onClick={() => {
                                    setToggleMobNav(false);
                                }}
                                active={{
                                    matchHash: hashPosition,
                                    navClass: "text-accent gap-0!",
                                }}
                                routes={routes}
                                navClassName="flex gap-4 grow group-hover:gap-0 group-hover:text-accent transition-all ease-out duration-500 font-bold"
                                navLinkClassName="flex flex-col items-center first:pt-8 group"
                                className={`transition-[max-height] duration-300 ease-out ${toggleMobNav ? "max-h-96" : "max-h-0"} lg:max-h-0 h-fit overflow-hidden flex-col flex gap-6`}
                            ></Navigators>
                        </RevealOn>
                    </div>
                    <div className="flex gap-24 justify-end overflow-hidden self-start lg:self-auto">
                        <RevealOn
                            on={showTopNav}
                            preRevealClass="opacity-0 pointer-events-none"
                            postRevealClass="opacity-100"
                            className="transition-opacity ease-out duration-300"
                        >
                            <Navigators
                                className="hidden lg:flex gap-24 justify-end overflow-hidden"
                                routes={routes
                                    .filter((route) => route.hash !== hashPosition)
                                    .filter((_, index, arr) => index > -1 + Math.ceil(arr.length / 2))}
                                navClassName="inline-flex gap-4 hover:gap-0 hover:text-accent transition-all ease-out duration-500 font-bold"
                            />
                            <button
                                className="lg:hidden hover:text-accent transition-color duration-300 ease-out relative"
                                onClick={() => setToggleMobNav(!toggleMobNav)}
                            >
                                <Icon
                                    icon="mdi:close"
                                    width="2.5em"
                                    height="2.5em"
                                    className={`absolute transition-opacity duration-300 ease-out ${toggleMobNav ? "opacity-100" : "opacity-0"}`}
                                />
                                <Icon
                                    icon="mdi:menu"
                                    width="2.5em"
                                    height="2.5em"
                                    className={`transition-opacity duration-300 ease-out ${!toggleMobNav ? "opacity-100" : "opacity-0"}`}
                                />
                            </button>
                        </RevealOn>
                    </div>
                </div>
                {showTopNav && (
                    <div className="bg-[url(assets/noise.svg)] opacity-30 absolute inset-0 pointer-events-none mix-blend-color"></div>
                )}
            </div>
        </div>
    );
}
