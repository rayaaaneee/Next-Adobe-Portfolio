import cn from "@/util/function/cn";

import NotFound from "../../[...not-found]/page";

import { assertFoundBlog } from "@/asset/data/blog/blogs";

import MainPart from "@/components/other/main-part";
import ComingSoon from "@/components/coming-soon";


import BlogHeader from "./_components/header/blog-header";
import BlogFooter from "./_components/footer/blog-footer";
import BlogTitleClient from "./_components/blog-title-client";
import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';
import BlogTableOfContents from "./_components/blog-table-of-contents";

import BlogPost from "@/util/type/blog";
import { DeepReadonlyable } from "@/util/type/deep-readonly";


export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

import { cookies } from 'next/headers';
import I18nManager from "@/util/manager/i18n-manager";

export async function generateMetadata({ params }: PageProps) {

    const { id } = await params;

    try {
        
        const blog = assertFoundBlog(id);
        const title: string = I18nManager.resolveCookie(blog.title, await cookies());

        return {
            title: {
                default: title,
                template: APP_DEFAULT_TEMPLATE_TITLE,
            }
        };

    } catch {
        return { title: { default: 'Blog', template: APP_DEFAULT_TEMPLATE_TITLE } };
    }
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
            {/* Client updater so title follows language changes in-session */}
            <BlogTitleClient title={blog.title} defaultLang={String(blog.lang)} />
            <MainPart 
            id="blog-content"
            fullWidth
            rightSidebar={blog.isComplete ? <BlogTableOfContents /> : null}
            containerClassName={cn(
                "pb-10 flex flex-col gap-3",
                "[&>.tooltip-container]:mx-auto [&>.tooltip-container]:w-fit",
                "[&>.tooltip-container>img]:w-auto",
                "[&>.tooltip-container>img]:rounded-xl [&>.tooltip-container>img]:border-white/20 [&>.tooltip-container>img]:border-4 [&>.tooltip-container>img]:shadow-lg",
            )}>
                <BlogHeader blog={blog} />
                { blog.isComplete ? (
                    <>
                        {blog.content} 
                        <BlogFooter blog={blog} />
                    </>
                )
                : (
                    <ComingSoon 
                        className="h-fit mt-10" 
                        link="/blog" 
                        title="blog.title"
                        text="blog.coming_soon.text" 
                        buttonText="blog.coming_soon.goback"
                    />
                )
                }
            </MainPart>
        </>
    );
}

export default Page;