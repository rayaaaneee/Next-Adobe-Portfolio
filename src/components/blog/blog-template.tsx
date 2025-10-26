import cn from "@/utils/function/cn";

import MainPart from "../others/main-part";
import Separator from "../others/separator";
import BlogHeader from "./_components/blog-header";

import ClassNameInterface from '@/utils/interface/classname';

import { DeepReadonliable } from "@/utils/types/deep-readonly";
import { BlogPost } from "@/utils/types/blog";

export interface BlogTemplateProps extends ClassNameInterface {
    blog: DeepReadonliable<BlogPost>;
}

const BlogTemplate = ({ blog, className }: BlogTemplateProps) => {
    return (
        <MainPart 
        fullWidth
        className={cn(
            "!mx-auto",
            "flex flex-col gap-5",
            "py-10",
            "[&>.tooltip-container]:mx-auto [&>.tooltip-container]:w-fit",
            "[&>.tooltip-container>img]:h-80 [&>.tooltip-container>img]:w-auto",
            "[&>.tooltip-container>img]:rounded-xl [&>.tooltip-container>img]:border-white/20 [&>.tooltip-container>img]:border-4 [&>.tooltip-container>img]:shadow-lg",
            className,
        )}>
            <article>
                <BlogHeader blog={blog} />
                <Separator />
                { blog.content }
            </article>
        </MainPart>
    )
}

export default BlogTemplate;
