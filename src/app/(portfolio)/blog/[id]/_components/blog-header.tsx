"use client";

import { useEffect, useState } from 'react';
import useLanguage from '@/util/hook/use-language';

import cn from '@/util/function/cn';
import countWords from '@/util/function/count-words';
import assertDefined from '@/util/function/assert-defined';

import { MdDateRange } from "react-icons/md";

import Language, { WithLanguage } from '@/util/type/language';
import { BlogPost } from '@/util/type/blog';
import { DeepReadonlyable } from '@/util/type/deep-readonly';


import { HeadingOne, HeadingTwo, Paragraph } from '@/components/page-flow';
import Separator from '@/components/other/separator';
import Tooltip, { TooltipSize } from '@/components/tooltip';

import { getTagDisplayName } from '@/asset/data/blog/blogs';

import BlogBreadcrumb from './blog-breadcrumb';
import BlogTableOfContents from './blog-table-of-contents';

import getBlogElement from '../function/get-blog-element';

const AverageWordsPerMinute: WithLanguage<number> = {
  [Language.EN]: 230,
  [Language.FR]: 180,
  [Language.ES]: 220,
};

const estimatedReadingTime = (wordCount: number, language: Language): number => {
    const wordsPerMinute = AverageWordsPerMinute[language];
    return Math.ceil(wordCount / wordsPerMinute);
}

const BlogHeader = ({ blog }: { blog: DeepReadonlyable<BlogPost> }) => {

    const { language } = useLanguage();

    const [wordCount, setWordCount] = useState<number | null>(null);

    const blogLang: Language = blog.language as keyof WithLanguage<Language>;

    useEffect(() => {

        const blogElement = document.getElementById('blog-content');
        const clearedBlogElement = getBlogElement(blogElement!);

        const words: number = countWords(clearedBlogElement);

        setWordCount(words);

    }, []);

    return (
        <article id='blog-header' className='flex flex-col gap-3 items-center justify-center'>
            <BlogBreadcrumb title={blog.title[language.current]} />
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
                        { getTagDisplayName(tag, language.current) }
                    </Paragraph>
                ))}
            </div>
            <HeadingTwo containerClassName="!mx-0">
                { language.blog.lang } : { language.languages[blogLang] }
            </HeadingTwo>
            <Separator lite className='!mb-0'/>
                <Paragraph className='first-letter:uppercase' stylized>{ language.blog.by } <b>{ assertDefined(process.env.NEXT_PUBLIC_NAME, "NAME") }</b></Paragraph>
            <Separator className='!my-0'/>
            <div className='w-full flex flex-row justify-evenly'>
                <Paragraph stylized>
                    <MdDateRange className='inline mb-1 mr-1' />
                    { new Date(blog.date).toLocaleDateString("fr-FR") }
                </Paragraph>
                { wordCount !== null && (
                    <Tooltip size={TooltipSize.md} text={`${wordCount} ${language.blog.words}`}>
                        <Paragraph stylized>
                            <span dangerouslySetInnerHTML={{ __html: language.blog.readingTime.replace("{min}", estimatedReadingTime(wordCount, blogLang).toString()) }} />
                        </Paragraph>
                    </Tooltip>
                ) }
            </div>
            <Separator lite className='!mt-0' />
        </article>
    );
}

export default BlogHeader;
