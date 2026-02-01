"use client";

import { HeadingThree } from "@/components/page-flow";

import useLanguage from "@/util/hook/use-language";

const BlogFooterText = () => {
    const { t } = useLanguage();
    return (
        <HeadingThree containerClassName='!m-0'>{ t("blog.footer") } 🚀</HeadingThree>
    );
}

export default BlogFooterText;