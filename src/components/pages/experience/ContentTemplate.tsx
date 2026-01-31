import { useState } from "react";
import type { Extra, Work } from "../../../types/experience";
import Timeline from "../../Timeline";
import WindowCard from "../../WindowCard";

type ActiveState = {
    height: boolean;
    clamp: boolean;
};

export default function ContentTemplate({ contents }: { contents: Work[] | Extra[] }) {
    const descTextDuration = 300;

    const [activeDescTexts, setActiveDescTexts] = useState(
        Array<ActiveState>(contents.length).fill({ height: false, clamp: false }),
    );

    const setActive = (index: number) => {
        setActiveDescTexts((prev) =>
            prev.map((val, i) => {
                if (i === index) {
                    if (!val.height) return { ...val, height: true, clamp: true };
                }
                return val;
            }),
        );
    };

    const setInactive = (index: number) => {
        setActiveDescTexts((prev) =>
            prev.map((val, i) => {
                if (i === index) {
                    if (val.height) {
                        setTimeout(() => {
                            setActiveDescTexts((prev) =>
                                prev.map((val, i) => (i === index ? { ...val, clamp: false } : val)),
                            );
                        }, descTextDuration);
                        return { ...val, height: false };
                    }
                }
                return val;
            }),
        );
    };

    const toggleActive = (index: number) => {
        setActiveDescTexts((prev) =>
            prev.map((val, i) => {
                if (i === index) {
                    if (!val.height) return { ...val, height: true, clamp: true };
                    if (val.height) {
                        setTimeout(() => {
                            setActiveDescTexts((prev) =>
                                prev.map((val, i) => (i === index ? { ...val, clamp: false } : val)),
                            );
                        }, descTextDuration);
                        return { ...val, height: false };
                    }
                }
                return val;
            }),
        );
    };

    return (
        <>
            {contents.map((content: Work | Extra, index: number) => (
                <Timeline key={index} start={index === 0} end={index === contents.length - 1}>
                    <WindowCard
                        sidebar={true}
                        small={true}
                        className="max-w-5xl group"
                        onClick={() => toggleActive(index)}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setInactive(index)}
                    >
                        <div className="flex flex-col gap-4">
                            <h4 className="text-h4-ad font-bold text-primary">
                                {("position" in content && content.position) || ("name" in content && content.name)}
                            </h4>
                            <div className="flex flex-col gap-1 text-base-ad text-primary">
                                <p>
                                    {content.startDate.toLocaleDateString("en-AU", {
                                        month: "short",
                                        year: "numeric",
                                    })}{" "}
                                    {content.endDate
                                        ? `– 
                                                ${content.endDate.toLocaleDateString("en-AU", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}`
                                        : ""}
                                </p>
                                <p>
                                    {content.company}{" "}
                                    <span className="text-accent font-normal">@ {content.location}</span>
                                </p>
                            </div>
                            <p
                                className={`text-base-ad text-primary/80 overflow-hidden ${activeDescTexts[index].height ? "max-h-[4lh]" : "max-h-lh"} ${activeDescTexts[index].clamp ? "line-clamp-none" : "line-clamp-1"} transition-[max-height] duration-${descTextDuration} ease-out`}
                            >
                                {content.description}
                            </p>
                        </div>
                    </WindowCard>
                </Timeline>
            ))}
        </>
    );
}
