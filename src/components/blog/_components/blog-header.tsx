"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import { HeadingOne, HeadingTwo } from '@/components/page-flow';

import languageContext from '@/utils/context/language-context';
import useTryingContext from '@/utils/hook/use-trying-context';
import { Language } from '@/utils/manager/manage-language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonliable } from '@/utils/types/deep-readonly';

const BlogHeader = ({ blog }: { blog: DeepReadonliable<BlogPost> }) => {

    const { language } = useTryingContext(languageContext);

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", blog.title);

    useEffect(() => {

        const originalTitle = document.title;
        document.title = pageTitle;

        return () => {
            document.title = originalTitle;
        };
        
    }, [pageTitle]);


    const nbLanguages = blog.languages.length;

    if (nbLanguages === 0) {
        throw new Error(`Blog ${blog.title} has no languages defined.`);
    }

    return (
        <article id='blog-header' className='w-full !mx-0 flex flex-col items-center justify-center'>
            <HeadingOne containerClassName="w-full !m-0">{blog.title}</HeadingOne>
            <HeadingTwo containerClassName="!mx-0">
                Language{nbLanguages > 1 && "s"} : &nbsp;
                 {blog.languages.map((lang: Language) => language.languages[lang]).join(", ")}
            </HeadingTwo>
        </article>
    )
}

export default BlogHeader;
