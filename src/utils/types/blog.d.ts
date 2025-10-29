import { Language } from "../manager/manage-language";

import { WithLanguage } from "./language";

export interface BlogPost {
    index: number;
    id: string;
    title: WithLanguage<string>;
    color: string;
    date: string;
    summary: string;
    icon: ChildrenType;
    language: Language;
    content: ChildrenType;
}