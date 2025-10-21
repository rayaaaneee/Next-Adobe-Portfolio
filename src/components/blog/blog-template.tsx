import cn from "@/utils/function/cn";

import MainPart from "../others/main-part";

import ClassNameInterface from '@/utils/interface/classname';
import { DeepReadonliable } from "@/utils/types/deep-readonly";
import { BlogPost } from "@/utils/types/blog";
import BlogHeader from "./_components/blog-header";
import { getBlogMDX } from "@/asset/data/blog/blogs";
import BlogContent from "./_components/blog-content";

export interface BlogTemplateProps extends ClassNameInterface {
    blog: DeepReadonliable<BlogPost>;
}

const BlogTemplate = ({ blog, className }: BlogTemplateProps) => {

    const contentSource = getBlogMDX(blog);

    return (
        <MainPart className={cn(
            "absolute inset-0 w-2/3 !mx-auto",
            "flex flex-col gap-5",
            "py-5 my-14",
            className,
        )}>
            <BlogHeader blog={blog} />
            <BlogContent source={contentSource} />
        </MainPart>
    )
}

export default BlogTemplate;
