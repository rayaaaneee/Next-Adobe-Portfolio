"use client";

import { useEffect } from 'react';
import useLanguage from '@/utils/hook/use-language';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import { HeadingOne, HeadingTwo } from '@/components/page-flow';

import Language, { WithLanguage } from '@/utils/types/language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonlyable } from '@/utils/types/deep-readonly';

const BlogHeader = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { language } = useLanguage();

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", blog.title[language.current]);

    useEffect(() => {

        const originalTitle = document.title;
        document.title = pageTitle;

        return () => {
            document.title = originalTitle;
        };
        
    }, [pageTitle]);

    const blogLang: Language = blog.language as keyof WithLanguage<Language>;

    return (
        <>
            <HeadingOne containerClassName="w-full text-center !m-0">{blog.title[language.current]}</HeadingOne>
            <HeadingTwo containerClassName="!mx-0">
                { language.blog.lang } : { language.languages[blogLang] }
            </HeadingTwo>
        </>
    )
}

export default BlogHeader;
