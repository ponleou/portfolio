import { Icon } from "@iconify-icon/react";
import contact from "../../../content/contact";
import Lined from "../../Lined";
import TranslateOnScroll from "../../movement/TranslateOnScroll";
import TranslateToCursor from "../../movement/TranslateToCursor";

export default function SideContacts() {
    return (
        <div className="grow relative">
            <div className="text-h4-ad text-primary-60 p-12 bottom-0 right-0 absolute">
                <TranslateOnScroll direction="vertical" rate={-1} maxScroll={window.innerHeight}>
                    <TranslateToCursor maxTranslate={1} translateMultiplier={0.1}>
                        <Lined lengthRem={8} orientation="vertical" gapRem={2} cssColor="var(--color-primary-60)">
                            <a
                                className="transition-colors duration-500 ease-out hover:text-primary"
                                href={contact.codeberg}
                                target="_blank"
                                title="codeberg!"
                            >
                                <Icon icon="simple-icons:codeberg" width="1em" height="1em" />
                            </a>
                            <Lined
                                lengthRem={1.2}
                                orientation="vertical"
                                lineOrientation="horizontal"
                                gapRem={2}
                                cssColor="var(--color-primary-60)"
                            >
                                <a
                                    className="transition-colors duration-500 ease-out hover:text-primary"
                                    href={contact.github}
                                    target="_blank"
                                    title="eww github, check out codeberg instead"
                                >
                                    <Icon icon="mdi:github" width="1em" height="1em" />
                                </a>
                            </Lined>
                            <Lined
                                lengthRem={1.2}
                                orientation="vertical"
                                lineOrientation="horizontal"
                                gapRem={2}
                                cssColor="var(--color-primary-60)"
                                enable={{ end: true }}
                            >
                                <a
                                    className="transition-colors duration-500 ease-out hover:text-primary"
                                    href={contact.linkedin}
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    <Icon icon="mdi:linkedin" width="1em" height="1em" />
                                </a>
                            </Lined>
                            <a
                                className="transition-colors duration-500 ease-out hover:text-primary"
                                href={`mailto:${contact.email}`}
                                target="_blank"
                                title={contact.email}
                            >
                                <Icon icon="mdi:email" width="1em" height="1em" />
                            </a>
                        </Lined>
                    </TranslateToCursor>
                </TranslateOnScroll>
            </div>
        </div>
    );
}
