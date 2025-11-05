import { Metadata } from "next";

import cn from "@/utils/function/cn";

import NotFound from "../../[...not-found]/page";

import { assertFoundBlog } from "@/asset/data/blog/blogs";

import MainPart from "@/components/others/main-part";
import BlogHeader from "@/app/(portfolio)/blog/[id]/_components/blog-header";
import Separator from "@/components/others/separator";

import BlogFooter from "./_components/blog-footer";
import BlogTitle from "./_components/blog-title";

import Language from "@/utils/types/language";

import { BlogPost } from "@/utils/types/blog";

import { DeepReadonlyable } from "@/utils/types/deep-readonly";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {

    const { id } = await params;

    let blog: DeepReadonlyable<BlogPost>;
    try {
        blog = assertFoundBlog(id);
    } catch {
        return {
            title: 'Blog Not Found',
        }
    }

    return {
        title: blog.title[Language.EN],
    };

}

const Page = async ({ params }: PageProps) => {
    
    const { id } = await params;

    let blog: DeepReadonlyable<BlogPost>;
    
    try {
        blog = assertFoundBlog(id);
    } catch {
        return (
            <MainPart fullWidth className="!p-0">
                <NotFound />
            </MainPart>
        );
    }

    return (
        <>
            <BlogTitle blog={blog} />
            <MainPart 
            fullWidth
            className={cn(
                "!mx-auto",
                "flex flex-col gap-3",
                "py-10",
                "[&>.tooltip-container]:mx-auto [&>.tooltip-container]:w-fit",
                "[&>.tooltip-container>img]:w-auto",
                "[&>.tooltip-container>img]:rounded-xl [&>.tooltip-container>img]:border-white/20 [&>.tooltip-container>img]:border-4 [&>.tooltip-container>img]:shadow-lg",
            )}>
                <BlogHeader blog={blog} />
                { blog.content }
                <BlogFooter blog={blog} />
            </MainPart>
        </>
    );
}

export default Page;