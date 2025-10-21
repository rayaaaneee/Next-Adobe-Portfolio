import { ChildrenType } from "../interface/children";
import { Language } from "../manager/manage-language";

export interface BlogPost {
    index: number;
    id: string;
    title: string;
    color: string;
    date: string;
    summary: string;
    icon: ChildrenType;
    languages: Language[];
}