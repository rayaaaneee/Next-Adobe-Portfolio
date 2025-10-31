import { Metadata } from "next";

import cn from "@/utils/function/cn";

import { assertFoundBlog } from "@/asset/data/blog/blogs";

import MainPart from "@/components/others/main-part";
import BlogHeader from "@/app/(portfolio)/blog/[id]/_components/blog-header";
import Separator from "@/components/others/separator";
import BlogFooter from "./_components/blog-footer";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    return {
        title: blog.title.en,
    }
}

const Page = async ({ params }: PageProps) => {
    
    const { id } = await params;

    const blog = assertFoundBlog(id);

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
            'backdrop-blur-md',
        )}>
            <article className="flex flex-col gap-3">
                <article id='blog-header' className='w-full !mx-0 flex flex-col items-center justify-center'>
                    <BlogHeader blog={blog} />
                </article>
                <Separator />
                { blog.content }
                <div className="center">
                    <BlogFooter lang={blog.language} />
                </div>
            </article>
        </MainPart>
    );
}

export default Page;