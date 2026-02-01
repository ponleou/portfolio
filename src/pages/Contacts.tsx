import pfp from "../assets/pfp.jpg";
import { useState, useRef, useEffect } from "react";
import RevealOn from "../components/movement/RevealOn";
import WindowCard from "../components/WindowCard";
import { ScrollEvent } from "../functions/subscribeEvents";
import profile from "../content/profile";
import contact from "../content/contact";
import { Icon } from "@iconify-icon/react";

export default function Contacts() {
    const [reveal, setReveal] = useState(false);
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!parent.current) return;

        const watchReveal = () => {
            if (parent.current!.getBoundingClientRect().top - window.innerHeight <= 0) setReveal(true);
            else setReveal(false);
        };

        ScrollEvent.subscribe(watchReveal);

        return () => {
            ScrollEvent.unsubscribe(watchReveal);
        };
    }, []);
    return (
        <div className="px-24 py-48 min-h-dvh flex" id="contacts">
            <RevealOn
                className="transition-all ease-out duration-500 grow flex"
                preRevealClass="opacity-0 -translate-y-20"
                postRevealClass="opacity-100 -translate-y-0"
                on={reveal}
            >
                <div ref={parent} className="grow my-auto max-w-6xl 3xl:max-w-lg-static mx-auto">
                    <WindowCard className="flex flex-col text-primary text-base-ad items-center gap-8">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="aspect-square w-56 rounded-full overflow-hidden border-2 border-primary">
                                <img className="h-full w-full" src={pfp} alt="" />
                            </div>
                            <h3 className="text-h3-ad font-bold">
                                {profile.first_name} {profile.last_name}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2 items-center text-primary/80">
                            <p>
                                {profile.role} | {profile.hobby}
                            </p>
                            <a
                                href={`mailto:${contact.email}`}
                                target="_blank"
                                title={contact.email}
                                className="underline hover:no-underline"
                            >
                                {contact.email}
                            </a>
                        </div>
                        <div className="h-px bg-primary/40 w-full my-2"></div>
                        <div className="flex gap-16 justify-center items-center">
                            <a
                                className="transition-colors duration-500 ease-out hover:text-accent flex"
                                href={contact.codeberg}
                                target="_blank"
                                title="codeberg!"
                            >
                                <Icon icon="simple-icons:codeberg" height="2.5em" />
                            </a>
                            <a
                                className="transition-colors duration-500 ease-out hover:text-accent flex"
                                href={contact.github}
                                target="_blank"
                                title="eww github, check out codeberg instead"
                            >
                                <Icon icon="mdi:github" width="3em" height="3em" />
                            </a>
                            <a
                                className="transition-colors duration-500 ease-out hover:text-accent flex"
                                href={contact.linkedin}
                                target="_blank"
                                title="LinkedIn"
                            >
                                <Icon icon="mdi:linkedin" width="3em" height="3em" />
                            </a>
                        </div>
                    </WindowCard>
                </div>
            </RevealOn>
        </div>
    );
}
