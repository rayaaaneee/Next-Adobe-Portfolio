"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import useLanguage from '@/util/hook/use-language';

import { BlogPost } from '@/util/type/blog';
import { DeepReadonlyable } from '@/util/type/deep-readonly';

const BlogTitle = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { language } = useLanguage();

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", blog.title[language.current]);

    useEffect(() => {

        const originalTitle = document.title;
        document.title = pageTitle;

        return () => {
            document.title = originalTitle;
        };
        
    }, [pageTitle]);

    return null;
}

export default BlogTitle;
