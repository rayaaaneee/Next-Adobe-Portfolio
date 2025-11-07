import useLanguage from "@/util/hook/use-language";

import { IoIosArrowForward } from "react-icons/io";

import { AnchorLinkText, HeadingFour } from "@/components/page-flow";


export interface BlogBreadcrumbProps {
    title: string;
}

const BlogBreadcrumb = ({ title }: BlogBreadcrumbProps) => {

    const { language } = useLanguage();
    
    return (
        <>
            <HeadingFour containerClassName="absolute top-4 !mt-0">
                <AnchorLinkText className="hover:text-gray-600" href="/blog">{language.blog.title}</AnchorLinkText>
                <IoIosArrowForward className="inline mx-2 mb-1 text-[1.1em]" />
                {title}
            </HeadingFour>
        </>
    );
}

export default BlogBreadcrumb;
