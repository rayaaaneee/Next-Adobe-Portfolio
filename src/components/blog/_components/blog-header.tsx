"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import { HeadingOne, HeadingTwo } from '@/components/page-flow';
import Separator from '@/components/others/separator';
import { Language } from '@/utils/manager/manage-language';
import languageContext from '@/utils/context/language-context';
import useTryingContext from '@/utils/hook/use-trying-context';
import { BlogTemplateProps } from '../blog-template';

const BlogHeader = ({ blog }: BlogTemplateProps) => {

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
        <>
            <HeadingOne containerClassName="w-full mx-auto !m-0">{blog.title}</HeadingOne>
            <Separator lite className="!my-0" />
            <HeadingTwo containerClassName="!my-0 mx-auto">
                Language{nbLanguages > 1 && "s"} : &nbsp;
                 {blog.languages.map((lang: Language) => language.languages[lang]).join(", ")}
            </HeadingTwo>
        </>
    )
}

export default BlogHeader;
