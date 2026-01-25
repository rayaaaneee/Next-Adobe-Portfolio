"use client";

import { useEffect } from 'react';

import { APP_DEFAULT_TEMPLATE_TITLE } from '@/asset/data/title';

import useLanguage from '@/util/hook/use-language';

import { DeepReadonlyable } from '@/util/type/deep-readonly';
import Language, { WithLanguage } from '@/util/type/language';
import BlogPost from '@/util/type/blog';

const BlogTitle = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { t } = useLanguage();

    const notFound: WithLanguage = {
        [Language.EN]: "Blog Not Found",
        [Language.FR]: "Blog non trouvé",
        [Language.ES]: "Blog no encontrado",
    };

    const pageTitle = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", 
        !blog ? t(notFound) : t(blog.title)
    );

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    return null;
}

export default BlogTitle;
