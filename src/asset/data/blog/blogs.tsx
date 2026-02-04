import Image from "next/image";

import { MdOutlineNotes as DefaultIcon } from "react-icons/md";

import DeepReadonly, { type DeepReadonlyable } from "@/util/type/deep-readonly";
import type BlogPost from "@/util/type/blog";

import Language, { type WithLanguageable } from "@/util/type/language";

// import networkIcon from "@/asset/img/blog/blog-1/icon.png";
// import NetworkPageContent from "$/(portfolio)/blog/[id]/_md/deep-learning-snake-ai/blog.mdx";

import svgIcon from "@/asset/img/blog/blog-2/icon.png";
import SvgPageContent from "$/(portfolio)/blog/[id]/_md/svg-customization/blog.mdx";

// import keyCloakIcon from "@/asset/img/blog/blog-3/icon.png";
// import OAuth2PageContent from "$/(portfolio)/blog/[id]/_md/keycloak-oauth2-integration/blog.mdx";

import TwoFaIcon from "@/asset/img/blog/blog-4/icon.png";
import TwoFaSpringPageContent from "$/(portfolio)/blog/[id]/_md/2fa-spring/blog.mdx";

export enum BlogTag {
    NEXTJS = "nextjs",
    REACT = "react",
    SVG = "svg",
    WEB_FRONT = "web-front",
    KEYCLOAK = "keycloak",
    OAUTH2 = "oauth2",
    SECURITY = "security",
    ACCESS_TOKENS = "access-tokens",
    IAM = "identity-and-access-management",
    AUTH = "authentication",
    SPRING = "spring",
    JAVA = "java",
    JAVASCRIPT = "javascript",
    TYPESCRIPT = "typescript",
    DEVOPS = "devops",
    CLOUD = "cloud",
    DOCKER = "docker",
    KUBERNETES = "kubernetes",
    TOTP = "totp",
}

interface BlogTagData {
    displayName: WithLanguageable<string>;
    color: string;
}

type BlogTagsDisplayType = {
    [K in BlogTag]: BlogTagData;
}

const BlogTagsDisplay: DeepReadonly<BlogTagsDisplayType> = Object.freeze({
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
    [BlogTag.KEYCLOAK]: {
        displayName: "Keycloak",
        color: "#AA0000",
    },
    [BlogTag.OAUTH2]: {
        displayName: {
            [Language.EN]: "OAuth2",
            [Language.FR]: "OAuth2",
            [Language.ES]: "OAuth2",
        },
        color: "#4285F4",
    },
    [BlogTag.SECURITY]: {
        displayName: {
            [Language.EN]: "Security",
            [Language.FR]: "Sécurité",
            [Language.ES]: "Seguridad",
        },
        color: "#FF0000",
    },
    [BlogTag.ACCESS_TOKENS]: {
        displayName: {
            [Language.EN]: "Access Tokens",
            [Language.FR]: "Jetons d'accès",
            [Language.ES]: "Tokens de acceso",
        },
        color: "#008000",
    },
    [BlogTag.IAM]: {
        displayName: "IAM",
        color: "#800080",
    },
    [BlogTag.AUTH]: {
        displayName: {
            [Language.EN]: "Authentication",
            [Language.FR]: "Authentification",
            [Language.ES]: "Autenticación",
        },
        color: "#FFA500",
    },
    [BlogTag.SPRING]: {
        displayName: "Spring",
        color: "#6DB33F",
    },
    [BlogTag.JAVA]: {
        displayName: "Java",
        color: "#007396",
    },
    [BlogTag.JAVASCRIPT]: {
        displayName: "JavaScript",
        color: "#F7DF1E",
    },
    [BlogTag.TYPESCRIPT]: {
        displayName: "TypeScript",
        color: "#3178C6",
    },
    [BlogTag.DEVOPS]: {
        displayName: "DevOps",
        color: "#F05032",
    },
    [BlogTag.CLOUD]: {
        displayName: {
            [Language.EN]: "Cloud",
            [Language.FR]: "Cloud",
            [Language.ES]: "Nube",
        },
        color: "#00ADEF",
    },
    [BlogTag.DOCKER]: {
        displayName: "Docker",
        color: "#2496ED",
    },
    [BlogTag.KUBERNETES]: {
        displayName: "Kubernetes",
        color: "#326CE5",
    },
    [BlogTag.TOTP]: {
        displayName: "TOTP",
        color: "#FF5722",
    },
    
});

const blogs: DeepReadonly<BlogPost[]> = [
    {
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
        lang: Language.EN,
        content: <SvgPageContent />,
        tags: [
            BlogTag.NEXTJS,
            BlogTag.REACT,
            BlogTag.SVG,
            BlogTag.WEB_FRONT,
        ],
    },
    {
        id: "2fa-spring",
        lang: Language.EN,
        content: <TwoFaSpringPageContent />,
        tags: [
            BlogTag.SPRING,
            BlogTag.JAVASCRIPT,
            BlogTag.REACT,
            BlogTag.SECURITY,
            BlogTag.AUTH,
            BlogTag.TOTP,
        ],
        title: {
            [Language.EN]: "2FA in a Spring-React Application",
            [Language.FR]: "2FA dans une application Spring-React",
            [Language.ES]: "2FA en una aplicación Spring-React",
        },
        date: "2026-01-15",
        color: "#6DB33F",
        summary: {
            [Language.EN]: "This blog post explores the implementation of Two-Factor Authentication (2FA) in a Spring application. It covers the benefits of 2FA, the setup process, and provides a step-by-step guide to integrating this security feature into your Spring-based projects.",
            [Language.FR]: "Cet article de blog explore la mise en œuvre de l'authentification à deux facteurs (2FA) dans une application Spring. Il couvre les avantages de la 2FA, le processus de configuration et fournit un guide étape par étape pour intégrer cette fonctionnalité de sécurité dans vos projets basés sur Spring.",
            [Language.ES]: "Esta publicación de blog explora la implementación de la autenticación de dos factores (2FA) en una aplicación Spring. Cubre los beneficios de la 2FA, el proceso de configuración y proporciona una guía paso a paso para integrar esta función de seguridad en sus proyectos basados en Spring.",
        },
        icon: <Image src={TwoFaIcon} alt="2FA Icon" />,
    }
];

const formatBlogs = (blogs: DeepReadonlyable<BlogPost[]>): DeepReadonlyable<BlogPost[]> => {

    if (blogs.length === 0) {
        return [];
    }

    // Sort blogs by date in descending order
    const sortedBlogs: BlogPost[] = blogs.slice().sort((a, b) => {

        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB.getTime() - dateA.getTime();

    }) as BlogPost[];

    // Auto assignment of properties
    sortedBlogs.map((blog, index) => {

        blog.index = index + 1;
        if (blog.isComplete === undefined) blog.isComplete = true;
        if (blog.icon === undefined) blog.icon = <DefaultIcon/>;

        return blog;
    });

    const ids = sortedBlogs.map(blog => blog.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
        throw new Error("Blog IDs are not unique!");
    }

    return sortedBlogs;
}

const getBlogs = (): DeepReadonlyable<BlogPost[]> => formatBlogs(blogs) as DeepReadonlyable<BlogPost[]>;

const findBlog = (id: string): DeepReadonlyable<BlogPost> | undefined => {
    return getBlogs().find((blog) => blog.id === id)
}

export const getTagDisplayName = (tag: BlogTag, language: Language): string => {
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
    if (!blog) throw new Error(`Blog with id "${id}" not found.`);
    else return blog;
}

export type BlogPosts = DeepReadonlyable<BlogPost[]>;

export default getBlogs;