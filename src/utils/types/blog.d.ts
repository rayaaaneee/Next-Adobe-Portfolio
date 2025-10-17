import { StaticImageData } from "next/image";

export interface BlogPost {
    index: number;
    id: string;
    title: string;
    date: string;
    summary: string;
    icon: StaticImageData;
    darkIcon: StaticImageData;
}