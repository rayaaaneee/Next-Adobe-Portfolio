"use client";

import useLanguage from '@/utils/hook/use-language';

import { HeadingOne, HeadingTwo, Paragraph } from '@/components/page-flow';
import Separator from '@/components/others/separator';

import Language, { WithLanguage } from '@/utils/types/language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonlyable } from '@/utils/types/deep-readonly';
import { getTagDisplayName } from '@/asset/data/blog/blogs';
import cn from '@/utils/function/cn';

const BlogHeader = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { language } = useLanguage();

    const blogLang: Language = blog.language as keyof WithLanguage<Language>;

    return (
        <article id='blog-header' className='flex flex-col gap-3 items-center justify-center'>
            <HeadingOne containerClassName="w-full text-center !m-0">{blog.title[language.current]}</HeadingOne>
            <div className='flex flex-row center flex-wrap gap-2 w-2/3'>
                {blog.tags.map((tag) => (
                    <Paragraph 
                        key={tag}
                        className={cn(
                            "bg-gray-200 text-gray-800",
                            "dark:bg-gray-700 dark:text-gray-200",
                            "text-sm px-2.5 py-1 rounded-md"
                        )}
                    >
                        {getTagDisplayName(tag, language.current)}
                    </Paragraph>
                ))}
            </div>
            <HeadingTwo containerClassName="!mx-0">
                { language.blog.lang } : { language.languages[blogLang] }
            </HeadingTwo>
            <Separator />
        </article>
    )
}

export default BlogHeader;
