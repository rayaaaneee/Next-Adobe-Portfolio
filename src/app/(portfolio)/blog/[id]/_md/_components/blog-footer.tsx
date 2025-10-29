"use client";

import { HeadingThree } from '@/components/page-flow';
import ManageLanguages from '@/utils/manager/manage-language';

import Language from '@/utils/types/language';

const BlogFooter = ({ lang }: { lang: Language }) => {
    return (
        <HeadingThree containerClassName="!m-0">{ ManageLanguages.getSentences(lang).blog.footer } 🚀</HeadingThree>
    );
}

export default BlogFooter;
