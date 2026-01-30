type Work = {
    position: string;
    startDate: Date;
    endDate: Date;
    company: string;
    location: string;
    description: string;
};

export const works: Array<Work> = [
    {
        position: "Application Developer Intern",
        startDate: new Date(2025, 10),
        endDate: new Date(2026, 0),
        company: "Pronto Software",
        location: "Forest Hill, VIC",
        description:
            "Completed requested features and tickets from customers and users, which involves developing search filters, privacy features, and required bugfixes on a Ruby on Rails and Vue.js stack.",
    },
    {
        position: "Developer Intern",
        startDate: new Date(2024, 11),
        endDate: new Date(2025, 5),
        company: "Trackday",
        location: "South Yarra, VIC",
        description:
            "Built an admin dashboard for a membership management platform, including a custom event-management plugin and bugfixes on legacy code in a Wordpress site with PHP and MySQL.",
    },
    {
        position: "SEBE HelpHub Tutor (SIT102)",
        startDate: new Date(2024, 7),
        endDate: new Date(2024, 9),
        company: "Deakin University",
        location: "Burwood, VIC",
        description:
            "Assisted students in a HelpHub session for SIT102—Introduction to Programming unit, providing one-on-one help, technical troubleshooting, and assignments or unit concerns.",
    },
    {
        position: "Web Developer Intern",
        startDate: new Date(2023, 7),
        endDate: new Date(2023, 10),
        company: "ACMCert Indochina (Cambodia) Co., Ltd.",
        location: "Phnom Penh, Cambodia",
        description:
            "Managed a project, and also assisted design and development in other projects with Figma and Vue.js.",
    },
];

type Extra = {
    name: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    location: string;
    description: string;
};

export const extras: Array<Extra> = [
    {
        name: "Heidi Hackathon 2025",
        startDate: new Date(2023, 6),
        company: "Heidi Health",
        location: "Collingwood, VIC",
        description:
            "Built a Chatbot wrapper optimised for doctor's appointment notes enquiries within a 7-hour time limit, with Next.js, GROQ, and Heidi's API and dataset. A vibecoded, proof-of-concept project with Cursor.",
    },
    {
        name: "Climate Hack 2024",
        startDate: new Date(2023, 8),
        endDate: new Date(2023, 9),
        company: "ActSEA",
        location: "Singapore",
        description:
            "Developed a mobile application for a project proposal that advocates for cleaner transportation means and usages. Built with React.js/Ionic Capacitor and Flask/Python.",
    },
    {
        name: "DigiLABS Programme",
        startDate: new Date(2024, 2),
        endDate: new Date(2024, 5),
        company: "Singapore International Foundation",
        location: "Singapore",
        description:
            "Participated in team-based projects, focused on solving global issues using technology and AI. Worked with TensorFlow for a mental health tracking app, and Scapy to develop an intrusion detection system.",
    },
    {
        name: "Virtual Global Hackathon 2023",
        startDate: new Date(2023, 8),
        endDate: new Date(2023, 9),
        company: "Uber",
        location: "International",
        description:
            "Placed top 30 as the team leader, and developed a transportation app using Vue.js, and Google Maps API.",
    },
];
