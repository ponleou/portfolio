type Education = {
    name: string;
    subname?: string;
    institution: string;
    startDate: Date;
    endDate: Date;
    locationSpecific: string;
    locationArea: string;
    points: Array<string>;
    grade?: number;
    gradeLabel?: string;
};

export const educations: Array<Education> = [
    {
        name: "Bachelor of Computer Science",
        institution: "Deakin University",
        subname: "Major in Internet of Things",
        startDate: new Date(2024, 6), // july 2024
        endDate: new Date(2027, 5), // june 2027
        locationSpecific: "Burwood",
        locationArea: "VIC",
        points: ["IT Student Academy Member"],
        grade: 89,
        gradeLabel: "WAM",
    },
    {
        name: "Web Development 101 Course",
        institution: "Kirirom Institute of Technology",
        startDate: new Date(2023, 5), // june 2023
        endDate: new Date(2023, 7), // aug 2023
        locationSpecific: "Phnom Penh",
        locationArea: "Cambodia",
        points: ["HTML/CSS and JavaScript", "UX/UI and Responsive Design"],
    },
    {
        name: "High School Diploma",
        institution: "East-West International School",
        startDate: new Date(2009, 0), // jan 2009
        endDate: new Date(2023, 5), // june 2023
        locationSpecific: "Phnom Penh",
        locationArea: "Cambodia",
        points: ["CIE A-Level: A*AA", "AICE Diploma: Distinction", "Khmer Baccalaureate: Grade B"],
        grade: 3.88,
        gradeLabel: "GPA",
    },
];
