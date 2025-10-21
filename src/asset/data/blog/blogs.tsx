import Image from "next/image";
import path from "path";
import { readFileSync } from "fs";

import DeepReadonly, { DeepReadonliable } from "@/utils/types/deep-readonly";
import { BlogPost } from "@/utils/types/blog";

import networkIcon from "@/asset/img/blog/blog-1/icon.png";

import svgIcon from "@/asset/img/blog/blog-2/icon.png";
import { Language } from "@/utils/manager/manage-language";

const blogs: DeepReadonly<BlogPost[]> = [
    {
        index: 1,
        id: "deep-learning-snake-ai",
        title: "Deep Learning : Snake AI Overview",
        date: "2024-02-01",
        summary: "This is a summary of my second blog post.",
        color: "#33A1FF",
        icon: <Image src={networkIcon} alt="Network Icon" />,
        languages: [Language.EN]
    },
    {
        index: 2,
        id: "svg-customization",
        title: "SVG customization using SVGR",
        date: "2024-01-01",
        color: "#FF5733",
        summary: "This is a summary of my first blog post.",
        icon: <Image src={svgIcon} alt="SVG Icon" />,
        languages: [Language.EN]
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

export const getBlogMDX = (blog: DeepReadonliable<BlogPost>): string => {
  const filePath = path.join(process.cwd(), 'src', 'components', 'blog', 'md', `${blog.id}.mdx`);
  const source = readFileSync(filePath, 'utf8');
  return source;
}

export default blogs;