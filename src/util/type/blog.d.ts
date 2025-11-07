import { Language } from "../manager/manage-language";

import { ChildrenType } from "../interface/children";

import { WithLanguage } from "./language";

import { StringDate } from "./date";

import { BlogTag } from "@/asset/data/blog/blogs";

export interface BlogPost {
    index: number;
    id: string;
    title: WithLanguage<string>;
    color: string;
    date: StringDate;
    summary: WithLanguage<string>;
    icon: ChildrenType;
    language: Language;
    content: ChildrenType;
    tags: BlogTag[];
}