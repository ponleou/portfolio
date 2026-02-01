export type Work = {
    position: string;
    startDate: Date;
    endDate: Date;
    company: string;
    location: string;
    description: string;
};

export type Extra = {
    name: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    location: string;
    description: string;
};
