import { Language } from "../manager/i18n-manager";

import { ChildrenType } from "../interface/children";

import { WithLanguage } from "./language";

import { StringDate } from "./date";

import { BlogTag } from "@/asset/data/blog/blogs";

export default interface BlogPost {
    index?: number;
    isComplete?: boolean;
    icon?: ChildrenType;
    content: ChildrenType;
    id: string;
    title: WithLanguage<string>;
    color: string;
    date: StringDate;
    summary: WithLanguage<string>;
    lang: Language;
    tags: BlogTag[];
}