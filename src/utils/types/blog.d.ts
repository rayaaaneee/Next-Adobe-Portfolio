import { Language } from "../manager/manage-language";

import { ChildrenType } from "../interface/children";

import { WithLanguage } from "./language";

export type StringDate = `${number}-${number}-${number}`; // YYYY-MM-DD (enforced)

export interface BlogPost {
    index: number;
    id: string;
    title: WithLanguage<string>;
    color: string;
    date: StringDate;
    summary: string;
    icon: ChildrenType;
    language: Language;
    content: ChildrenType;
}