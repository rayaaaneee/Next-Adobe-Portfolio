import GridContent from "@/asset/data/home/adaptive-grid-base";
import { WithLanguage, WithLanguageable } from "@/utils/type/language";
import { IntervalDateClass } from "@/utils/type/date";

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