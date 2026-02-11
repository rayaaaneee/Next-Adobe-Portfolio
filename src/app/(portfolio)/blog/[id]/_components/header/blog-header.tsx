"use client";

import { useEffect, useState } from 'react';
import useLanguage from '@/util/hook/use-language';

import { MdDateRange } from "react-icons/md";

import { HeadingOne, HeadingTwo, Paragraph } from '@/components/page-flow/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip/tooltip';
import Separator from '@/components/other/separator';

import cn from '@/util/function/cn';
import countWords from '@/util/function/count-words';
import assertDefined from '@/util/function/assert-defined';

import Language, { type WithLanguage } from '@/util/type/language';
import type BlogPost from '@/util/type/blog';
import { type DeepReadonlyable } from '@/util/type/deep-readonly';

import { getTagDisplayName } from '@/asset/data/blog/blogs';

import BlogBreadcrumb from './blog-breadcrumb';

import getBlogElement from '../../function/get-blog-element';

const AverageWordsPerMinute: WithLanguage<number> = {
  [Language.EN]: 230,
  [Language.FR]: 180,
  [Language.ES]: 220,
};

const estimatedReadingTime = (wordCount: number, language: Language): number => {
    const wordsPerMinute = AverageWordsPerMinute[language];
    return Math.ceil(wordCount / wordsPerMinute);
}

const BlogHeader = ({ blog }: { blog: DeepReadonlyable<Omit<BlogPost, "content">> }) => {

    const { t, tArray, lang } = useLanguage();

    const [wordCount, setWordCount] = useState<number | null>(null);

    const blogLang: Language = blog.lang as keyof WithLanguage<Language>;

    useEffect(() => {

        if (!blog.isComplete && process.env.NODE_ENV !== 'development') return;

        const blogElement = document.getElementById('blog-content');
        const clearedBlogElement = getBlogElement(blogElement!);

        const words: number = countWords(clearedBlogElement);

        setWordCount(words);

    }, [blog]);

    return (
        <article id='blog-header' className='flex flex-col gap-3 items-center justify-center'>
            <BlogBreadcrumb title={t(blog.title)} />
            <HeadingOne containerClassName="w-full text-center !m-0">{t(blog.title)}</HeadingOne>
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
                        { getTagDisplayName(tag, lang) }
                    </Paragraph>
                ))}
            </div>
            <HeadingTwo containerClassName="!mx-0">
                { t('blog.lang') } : { tArray("languages")[blogLang] }
            </HeadingTwo>
            <Separator lite className='!mb-0'/>
                <Paragraph className='first-letter:uppercase' stylized>{ t('blog.by') } <b>{ assertDefined(process.env.NEXT_PUBLIC_NAME, "NAME") }</b></Paragraph>
            <Separator lite={!blog.isComplete && process.env.NODE_ENV !== 'development'} className='!my-0'/>
            
            { (blog.isComplete || process.env.NODE_ENV === 'development') && (
                <>
                    <div className='w-full flex flex-row justify-evenly'>
                        <Paragraph stylized>
                            <MdDateRange className='inline mb-1 mr-1' />
                            { new Date(blog.date).toLocaleDateString("fr-FR") }
                        </Paragraph>
                        { wordCount !== null && (
                            <Tooltip size={TooltipSize.md} literalText={`${wordCount} ${t('blog.words')}`}>
                                <Paragraph stylized>
                                    <span dangerouslySetInnerHTML={{ __html: t('blog.readingTime').replace("{min}", estimatedReadingTime(wordCount, blogLang).toString()) }} />
                                </Paragraph>
                            </Tooltip>
                        ) }
                    </div>
                    <Separator lite className='!mt-0' />
                </>
            ) }
        </article>
    );
}

export default BlogHeader;
