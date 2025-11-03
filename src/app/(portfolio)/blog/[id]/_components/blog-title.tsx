"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import useLanguage from '@/utils/hook/use-language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonlyable } from '@/utils/types/deep-readonly';

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
