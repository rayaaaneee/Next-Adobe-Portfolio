import GridContent from "@/asset/data/home/adaptive-grid-base";

export type Education = {
    name: string,
    location: string,
    title: string,
    description: string,
    date: ExperienceDateClass,
}

export type Work = Education & {
    type: string,
    technologies: GridContent[],
}