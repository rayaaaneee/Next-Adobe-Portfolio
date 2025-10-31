import GridContent from "@/asset/data/home/adaptive-grid-base";
import { WithLanguage, WithLanguageable } from "@/utils/types/language";
import { IntervalDateClass } from "@/utils/types/date";

export type Education = {
    name: WithLanguageable<string>,
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