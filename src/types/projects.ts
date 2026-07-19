export type Project = {
    name: string;
    owner: string;
    description: string;
    language: string;
    stars: number;
    license: {
        name: string;
        url: string;
    };
    url: string;
    alt_url: string;
};

export type ProjectData = {
    name: string;
    owner: {
        login: string;
    };
    description: string | null;
    language: string;
    stars_count: number;
    stargazers_count: number;
    license: {
        name: string;
        url: string;
    } | null;
    clone_url: string;
};