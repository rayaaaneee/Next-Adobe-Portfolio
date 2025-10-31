import GridContent from "@/asset/data/home/adaptive-grid-base";
import { WithLanguage } from "@/utils/manager/manage-language";
import { IntervalDateClass } from "@/utils/types/date";

export type Education = {
    name: WithLanguage<string>,
    location: WithLanguage<string>,
    title: WithLanguage<string>,
    description: WithLanguage<string>,
    date: IntervalDateClass,
}

export interface TechItem extends GridContent {
    name: string
}
export type Work = Education & {
    name: string,
    type: WithLanguage<string>,
    technologies: TechItem[],
}