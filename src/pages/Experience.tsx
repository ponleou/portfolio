import { useOutletContext } from "react-router";
import type { HomeContextType } from "../types/home";
import RevealOn from "../components/movement/RevealOn";
import WindowCard from "../components/WindowCard";
import Timeline from "../components/Timeline";

export default function Experience() {
    const { reveal } = useOutletContext<HomeContextType>();

    return (
        <div className="px-24 py-48 min-h-dvh" id="main">
            <RevealOn
                className="transition-opacity ease-out duration-500"
                preRevealClass="opacity-0"
                postRevealClass="opacity-100"
                on={reveal}
            >
                <div className="flex flex-col pl-4 max-w-7xl mx-auto">
                    <div className="flex flex-col">
                        <h3 className="text-h3-ad font-bold text-accent">Work Experience</h3>
                        <Timeline start={true}>
                            <WindowCard sidebar={true}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-h4-ad font-bold">Application Developer Intern</h4>
                                    <div className="flex flex-col gap-1 text-base-ad font-bold">
                                        <p>Dec 2025 &ndash; Jan 2026</p>
                                        <p>
                                            Pronto Software{" "}
                                            <span className="text-accent font-normal">@ Forest Hill, VIC</span>
                                        </p>
                                    </div>
                                    <p className="text-base-ad">
                                        I completed requested features and tickets from customers and users, which
                                        involves developing search filters and privacy features on a Ruby on Rails and
                                        Vue.js stack. I was also involved in bugfixes, and site changes according to
                                        user requests and needs.
                                    </p>
                                </div>
                            </WindowCard>
                        </Timeline>
                        <Timeline>
                            <WindowCard sidebar={true}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-h4-ad font-bold">Developer Intern</h4>
                                    <div className="flex flex-col gap-1 text-base-ad font-bold">
                                        <p>Dec 2024 &ndash; Jun 2025</p>
                                        <p>
                                            Trackday <span className="font-normal text-accent">@ South Yarra, VIC</span>
                                        </p>
                                    </div>
                                    {/* <ul className="list-disc ml-8 space-y-1 text-base-ad">
                                        <li className="pl-4">
                                            Developed a Wordpress/PHP-based admin dashboard for the Membership
                                            Management System.
                                        </li>
                                        <li className="pl-4">
                                            Delivered 3 admin features via customer feedback loops, reducing requirement
                                            gaps by 70%.
                                        </li>
                                        <li className="pl-4">
                                            Built a custom, event-management plugin, eliminating a $129 annual
                                            subscription cost.
                                        </li>
                                        <li className="pl-4">
                                            Resolved 40% of legacy system bugs with stakeholder-aligned solutions.
                                        </li>
                                    </ul> */}
                                    <p className="text-base-ad">
                                        I worked on a WordPress site where I built an admin dashboard for a membership
                                        management system. I developed customer-requested features, fixed bugs in the
                                        legacy codebase, and created a custom event-management plugin using PHP and
                                        MySQL.
                                    </p>
                                </div>
                            </WindowCard>
                        </Timeline>
                        <Timeline>
                            <WindowCard sidebar={true}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-h4-ad font-bold">SEBE HelpHub Tutor (SIT102)</h4>
                                    <div className="flex flex-col gap-1 text-base-ad font-bold">
                                        <p>Aug 2024 &ndash; Oct 2024</p>
                                        <p>
                                            Deakin University{" "}
                                            <span className="text-accent font-normal">@ Burwood, VIC</span>
                                        </p>
                                    </div>
                                    {/* <ul className="list-disc ml-8 space-y-1 text-base-ad">
                                        <li className="pl-4">
                                            Decreased wait times by 50% to improve session's workflow and overall
                                            learning support.
                                        </li>
                                        <li className="pl-4">
                                            Provided additional one-on-one tutoring with students to ensure academic
                                            success.
                                        </li>
                                        <li className="pl-4">
                                            Resolved 90% of student issues regarding unit concerns and technical
                                            troubleshooting.
                                        </li>
                                        <li className="pl-4">
                                            Reduced 50% of student concerns on the unit's courses and task assignments.
                                        </li>
                                    </ul> */}
                                    <p className="text-base-ad">
                                        I assisted students in a HelpHub session for SIT102&mdash;Introduction to
                                        Programming unit, where I provided one-on-one help, answered questions regarding
                                        unit concerns, technical troubleshooting, and assignments.
                                    </p>
                                </div>
                            </WindowCard>
                        </Timeline>
                        <Timeline end={true}>
                            <WindowCard sidebar={true}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-h4-ad font-bold">Web Developer Intern</h4>
                                    <div className="flex flex-col gap-1 text-base-ad font-bold">
                                        <p>Aug 2023 - Nov 2023</p>
                                        <p>
                                            ACMCert Indochina (Cambodia) Co., Ltd.{" "}
                                            <span className="text-accent font-normal">@ Phnom Penh, Cambodia</span>
                                        </p>
                                    </div>
                                    {/* <ul className="list-disc ml-8 space-y-1 text-base-ad">
                                        <li className="pl-4">
                                            Managed the ACMCert website development project for 2 months with organised
                                            workflow.
                                        </li>
                                        <li className="pl-4">
                                            Improved 4 website UI designs and development by 90% using Figma, Vue.js,
                                            and Tailwind CSS.
                                        </li>
                                        <li className="pl-4">
                                            Guided the front-end development team to oversee and improve work outputs by
                                            50%.
                                        </li>
                                        <li className="pl-4">
                                            Increased workflow by 10% through defining design system, and component
                                            structures.
                                        </li>
                                    </ul> */}
                                    <div className="text-base-ad">
                                        I worked as a front-end Vue.js web developer and designer, completing designs
                                        and implementations as requested by stakeholders. I managed a website project,
                                        which included origanising tasks, workflow, and deadlines, and also assisted in
                                        other web projects.
                                    </div>
                                </div>
                            </WindowCard>
                        </Timeline>
                    </div>
                </div>
            </RevealOn>
        </div>
    );
}
