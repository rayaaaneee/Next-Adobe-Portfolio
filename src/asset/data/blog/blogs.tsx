import Image from "next/image";

import DeepReadonly, { DeepReadonlyable } from "@/util/type/deep-readonly";
import { BlogPost } from "@/util/type/blog";

import Language, { WithLanguageable } from "@/util/type/language";

import networkIcon from "@/asset/img/blog/blog-1/icon.png";
import NetworkPageContent from "$/(portfolio)/blog/[id]/_md/deep-learning-snake-ai/blog.mdx";

import svgIcon from "@/asset/img/blog/blog-2/icon.png";
import SvgPageContent from "$/(portfolio)/blog/[id]/_md/svg-customization/blog.mdx";

export type BlogTagType = WithLanguageable<string>;

export enum BlogTag {
    NEXTJS = "nextjs",
    REACT = "react",
    SVG = "svg",
    WEB_FRONT = "web-front",
}

export interface BlogTagData {
    displayName: BlogTagType;
    color: string;
}

type BlogTagsDisplayType = {
    [K in BlogTag]: BlogTagData;
}

export const BlogTagsDisplay: DeepReadonly<BlogTagsDisplayType> = Object.freeze({
    [BlogTag.NEXTJS]: {
        displayName: "Next.js",
        color: "#000000",
    },
    [BlogTag.REACT]: {
        displayName: "React",
        color: "#61DAFB",
    },
    [BlogTag.SVG]: {
        displayName: "SVG",
        color: "#FFB13B",
    },
    [BlogTag.WEB_FRONT]: {
        displayName: "Front-end",
        color: "#FF6D00",
    },
});

const blogs: DeepReadonly<BlogPost[]> = [
    // {
    //     index: 3,
    //     id: "zip-like-format"
    //     title: "ZIP-like document format : MDK",
    // },
    // {
    //     index: 2,
    //     id: "deep-learning-snake-ai",
    //     title: "Deep Learning : Snake AI Overview",
    //     date: "2024-02-01",
    //     summary: "This is a summary of my second blog post.",
    //     color: "#33A1FF",
    //     icon: <Image src={networkIcon} alt="Network Icon" />,
    //     languages: [Language.EN],
    //     content: <NetworkPageContent />,
    // },
    {
        index: 1,
        id: "svg-customization",
        title: {
            [Language.EN]: "SVG customization (SVGR)",
            [Language.FR]: "Stylisation des SVG (SVGR)",
            [Language.ES]: "Stilización de SVG (SVGR)",
        },
        date: "2025-10-30",
        color: "#ff9100",
        summary: {
            [Language.EN]: "In this blog, we will explore how to customize and make SVG files interactive in a Next.js project. I present the steps to transform SVGs into React components, modify their appearance, and add interactions, with concrete and visual examples based on my WorldMaster project.",
            [Language.FR]: "Nous explorerons ici comment personnaliser et rendre interactifs des fichiers SVG dans un projet Next.js. Je présente les étapes pour transformer des SVG en composants React, modifier leur apparence et ajouter des interactions, avec des exemples concrets et visuels basés sur mon projet WorldMaster.",
            [Language.ES]: "Aquí exploraremos cómo personalizar y hacer interactivos archivos SVG en un proyecto Next.js. Presento los pasos para transformar SVG en componentes React, modificar su apariencia y agregar interacciones, con ejemplos concretos y visuales basados en mi proyecto WorldMaster.",
        },
        icon: <Image src={svgIcon} alt="SVG Icon" />,
        language: Language.EN,
        content: <SvgPageContent />,
        tags: [
            BlogTag.NEXTJS,
            BlogTag.REACT,
            BlogTag.SVG,
            BlogTag.WEB_FRONT,
        ],
    },
];

const getBlogs = (): DeepReadonlyable<BlogPost[]> => blogs;

const findBlog = (id: string): DeepReadonlyable<BlogPost> | undefined => {
    return blogs.find((blog) => blog.id === id);
}

export const getTagDisplayName = (tag: BlogTag, language: Language) => {
    const tagData = BlogTagsDisplay[tag];
    if (!tagData) {
        throw new Error(`Tag "${tag}" not found.`);
    }
    if (typeof tagData.displayName === 'string') {
        return tagData.displayName;
    } else {
        return tagData.displayName[language];
    }
}

export const assertFoundBlog = (id: string): DeepReadonlyable<BlogPost> => {
    const blog = findBlog(id);
    if (!blog) {
        throw new Error(`Blog with id "${id}" not found.`);
    }
    return blog;
}

export type BlogPosts = DeepReadonlyable<BlogPost[]>;

export default getBlogs;