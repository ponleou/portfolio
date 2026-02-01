import { routes } from "../../../content/routes";
import FontsizeOnScroll from "../../movement/FontsizeOnScroll";
import RenderAfter from "../../movement/RenderAfter";
import TranslateToCursor from "../../movement/TranslateToCursor";
import WidthOnScroll from "../../movement/WidthOnScroll";
import Navigators from "../../Navigators";

export default function BottomNavigator({ revealNavigators }: { revealNavigators: boolean }) {
    return (
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
    );
}
