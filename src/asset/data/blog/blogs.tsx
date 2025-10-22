import Image from "next/image";

import DeepReadonly, { DeepReadonliable } from "@/utils/types/deep-readonly";
import { BlogPost } from "@/utils/types/blog";

import { Language } from "@/utils/manager/manage-language";

import networkIcon from "@/asset/img/blog/blog-1/icon.png";
import NetworkPageContent from "@/components/blog/md/deep-learning-snake-ai/blog.mdx";

import svgIcon from "@/asset/img/blog/blog-2/icon.png";
import SvgPageContent from "@/components/blog/md/svg-customization/blog.mdx";

const blogs: DeepReadonly<BlogPost[]> = [
    // {
    //     index: 3,
    //     id: "zip-like-format"
    //     title: "Creating a ZIP-like format from scratch in JavaScript : MDK",
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
        title: "SVG customization using SVGR",
        date: "2024-01-01",
        color: "#ff9100",
        summary: "This is a summary of my first blog post.",
        icon: <Image src={svgIcon} alt="SVG Icon" />,
        languages: [Language.EN],
        content: <SvgPageContent />,
    },
]

const findBlog = (id: string): DeepReadonliable<BlogPost> | undefined => {
    return blogs.find((blog) => blog.id === id);
}

export const assertFoundBlog = (id: string): DeepReadonliable<BlogPost> => {
    const blog = findBlog(id);
    if (!blog) {
        throw new Error(`Blog with id "${id}" not found.`);
    }
    return blog;
}

export default blogs;