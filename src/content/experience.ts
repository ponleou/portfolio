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
            "I completed requested features and tickets from customers and users, which involves developing search filters and privacy features on a Ruby on Rails and Vue.js stack. I was also involved in bugfixes, and site changes according to user requests and needs.",
    },
    {
        position: "Developer Intern",
        startDate: new Date(2024, 11),
        endDate: new Date(2025, 5),
        company: "Trackday",
        location: "South Yarra, VIC",
        description:
            "I worked on a WordPress site where I built an admin dashboard for a membership management system. The work consisted of developing customer-requested features, fixed bugs in the legacy codebase, and created a custom event-management plugin using PHP and MySQL.",
    },
    {
        position: "SEBE HelpHub Tutor (SIT102)",
        startDate: new Date(2024, 7),
        endDate: new Date(2024, 9),
        company: "Deakin University",
        location: "Burwood, VIC",
        description:
            "I assisted students in a HelpHub session for SIT102—Introduction to Programming unit, where I provided one-on-one help, answered questions regarding unit concerns, technical troubleshooting, and assignments.",
    },
    {
        position: "Web Developer Intern",
        startDate: new Date(2023, 7),
        endDate: new Date(2023, 10),
        company: "ACMCert Indochina (Cambodia) Co., Ltd.",
        location: "Phnom Penh, Cambodia",
        description:
            "I worked as a front-end Vue.js web developer and designer, completing designs and implementations as requested by stakeholders. I managed a website project, which included origanising tasks, workflow, and deadlines, and also assisted in other web projects.",
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
            "The team built a Chatbot wrapper optimised for doctor's appointment notes enquiries within a 7-hour time limit, focused on AI integration in healthcare. The web app was built with Next.js, GROQ, and used Heidi's API and dataset. A vibecoded, proof-of-concept project with Cursor.",
    },
    {
        name: "Climate Hack 2024",
        startDate: new Date(2023, 8),
        endDate: new Date(2023, 9),
        company: "ActSEA",
        location: "Singapore",
        description:
            "The team worked towards proposing a mobile application that advocates for cleaner transportation means and usages. We worked on iterative solution planning with our mentor, conducted scientific research and surveys, and prepared a pitch to judges. I was the developer for the team, building the EcoRound app with React.js/Ionic Capacitor and the backend with Flask/Python.",
    },
    {
        name: "DigiLABS Programme",
        startDate: new Date(2024, 2),
        endDate: new Date(2024, 5),
        company: "Singapore International Foundation",
        location: "Singapore",
        description:
            "I participated in an international program focused on solving global issues aligned with UN SDGs using technology and AI. Projects are team-based, where I led a team to develop an AI mental health tracking app using Python, TensorFlow, computer vision technology. Other projects include collaboration with Sustainable Living Labs, and developing an intrusion detection system with Python and Scapy.",
    },
    {
        name: "Virtual Global Hackathon 2023",
        startDate: new Date(2023, 8),
        endDate: new Date(2023, 9),
        company: "Uber",
        location: "International",
        description:
            "I was the team leader for the hackathon. We achieved top 30 in the hackathon coding category the development of One-Tap using Vue.js, Google Maps API, and Python, and presented the project to judges for 74% score.",
    },
];
