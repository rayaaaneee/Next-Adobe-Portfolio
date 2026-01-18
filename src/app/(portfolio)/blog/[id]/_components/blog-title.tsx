"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import useLanguage from '@/util/hook/use-language';

import { BlogPost } from '@/util/type/blog';
import { DeepReadonlyable } from '@/util/type/deep-readonly';
import Language, { WithLanguage } from '@/util/type/language';

import { metadata } from '../../metadata';

export { metadata };

const BlogTitle = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { language } = useLanguage();

    const NotFound: WithLanguage = {
        [Language.EN]: "Blog Not Found",
        [Language.FR]: "Blog non trouvé",
        [Language.ES]: "Blog no encontrado",
    };

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", 
        !blog ? NotFound[language.current] : blog.title[language.current]
    );

    useEffect(() => {

        const originalTitle = document.title;
        console.log(originalTitle);
        document.title = pageTitle;

        return () => {
            console.log("Restoring title to:", originalTitle);
            document.title = originalTitle;
        };
        
    }, [pageTitle]);

    return null;
}

export default BlogTitle;
