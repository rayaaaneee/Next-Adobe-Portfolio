import GridContent from "@/asset/data/home/adaptable-grid-base"

export interface DateInterface {
    month: Month,
    year: number,
    toString(): string,
}

export interface ExperienceDateInterface {
    start: DateInterface,
    end?: DateInterface,
    toString(): string,
}

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