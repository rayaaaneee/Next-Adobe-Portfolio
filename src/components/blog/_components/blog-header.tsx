"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/utils/hook/use-language';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import { HeadingOne, HeadingTwo } from '@/components/page-flow';

import Language, { WithLanguage } from '@/utils/types/language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonliable } from '@/utils/types/deep-readonly';

const BlogHeader = ({ blog }: { blog: DeepReadonliable<BlogPost> }) => {

    const { language } = useLanguage();

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", blog.title);

    useEffect(() => {

        const originalTitle = document.title;
        document.title = pageTitle;

        return () => {
            document.title = originalTitle;
        };
        
    }, [pageTitle]);

    const blogLang: Language = blog.language as keyof WithLanguage<string>;

    return (
        <>
            <HeadingOne containerClassName="w-full !m-0">{blog.title}</HeadingOne>
            <HeadingTwo containerClassName="!mx-0">
                { language.blog.lang } : { language.languages[blogLang] }
            </HeadingTwo>
        </>
    )
}

export default BlogHeader;
