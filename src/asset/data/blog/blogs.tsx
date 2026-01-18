import Image from "next/image";

import DeepReadonly, { DeepReadonlyable } from "@/util/type/deep-readonly";
import { BlogPost } from "@/util/type/blog";

import Language, { WithLanguageable } from "@/util/type/language";

import networkIcon from "@/asset/img/blog/blog-1/icon.png";
import NetworkPageContent from "$/(portfolio)/blog/[id]/_md/deep-learning-snake-ai/blog.mdx";

import svgIcon from "@/asset/img/blog/blog-2/icon.png";
import SvgPageContent from "$/(portfolio)/blog/[id]/_md/svg-customization/blog.mdx";

import keyCloakIcon from "@/asset/img/blog/blog-3/icon.png";
import OAuth2PageContent from "$/(portfolio)/blog/[id]/_md/keycloak-oauth2-integration/blog.mdx";

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

export interface BlogTagData {
    displayName: WithLanguageable<string>;
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
    // {
    //     index: 2,
    //     id: "keycloak-oauth2-integration",
    //     language: Language.EN,
    //     tags: [
    //         BlogTag.KEYCLOAK,
    //         BlogTag.OAUTH2,
    //         BlogTag.SECURITY,
    //         BlogTag.ACCESS_TOKENS,
    //         BlogTag.IAM,
    //         BlogTag.AUTH,
    //     ],
    //     content: <OAuth2PageContent />,
    //     title: {
    //         [Language.EN]: " Keycloak with OAuth2 for Secure Authentication",
    //         [Language.FR]: "Keycloak avec OAuth2 pour une authentification sécurisée",
    //         [Language.ES]: "Keycloak con OAuth2 para una autenticación segura",
    //     },
    //     date: "2025-12-15",
    //     color: "#008aaa",
    //     summary: {
    //         [Language.EN]: "This blog post delves into the integration of Keycloak with OAuth2 to enhance authentication security in web applications. It covers the setup process, configuration steps, and best practices for implementing robust authentication mechanisms using these technologies.",
    //         [Language.FR]: "Cet article de blog explore l'intégration de Keycloak avec OAuth2 pour améliorer la sécurité de l'authentification dans les applications web. Il couvre le processus de configuration, les étapes de mise en place et les meilleures pratiques pour implémenter des mécanismes d'authentification robustes en utilisant ces technologies.",
    //         [Language.ES]: "Esta publicación de blog profundiza en la integración de Keycloak con OAuth2 para mejorar la seguridad de la autenticación en aplicaciones web. Cubre el proceso de configuración, los pasos de implementación y las mejores prácticas para implementar mecanismos de autenticación robustos utilizando estas tecnologías.",
    //     },
    //     icon: <Image src={keyCloakIcon} alt="OAuth2 Icon" />,
    // },
    {
        index: 3,
        id: "2fa-spring",
        language: Language.EN,
        content: <TwoFaSpringPageContent />,
        tags: [
            BlogTag.SPRING,
            BlogTag.JAVASCRIPT,
            BlogTag.REACT,
            BlogTag.SECURITY,
            BlogTag.AUTH,
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
    if (!blog) throw new Error(`Blog with id "${id}" not found.`);
    else return blog;
}

export type BlogPosts = DeepReadonlyable<BlogPost[]>;

export default getBlogs;