import type { Extra, Work } from "../../../types/experience";
import Timeline from "../../Timeline";
import WindowCard from "../../WindowCard";

export default function ContentTemplate({ contents }: { contents: Work[] | Extra[] }) {
    return (
        <>
            {contents.map((content: Work | Extra, index: number) => (
                <Timeline key={index} start={index === 0} end={index === contents.length - 1}>
                    <WindowCard sidebar={true} small={true} className="max-w-5xl">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-h4-ad font-bold">
                                {("position" in content && content.position) || ("name" in content && content.name)}
                            </h4>
                            <div className="flex flex-col gap-1 text-base-ad font-bold">
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
                            <p className="text-base-ad">{content.description}</p>
                        </div>
                    </WindowCard>
                </Timeline>
            ))}
        </>
    );
}
