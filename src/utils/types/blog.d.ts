import { ChildrenType } from "../interface/children";

export interface BlogPost {
    index: number;
    id: string;
    title: string;
    color: string;
    date: string;
    summary: string;
    icon: ChildrenType;
}