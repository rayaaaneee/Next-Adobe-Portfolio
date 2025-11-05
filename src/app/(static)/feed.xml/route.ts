// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import baseBlogs from '@/asset/data/blog/blogs';

import assertDefined from '@/utils/function/assert-defined';

import { BlogPost } from '@/utils/types/blog';
import Language from '@/utils/types/language';

export const dynamic = 'force-static';

export interface SitemapBlogEntry {
    id: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    language: string;
}

const LANGUAGE_MAP: Record<Language, string> = {
    [Language.EN]: 'en-us',
    [Language.FR]: 'fr-fr',
    [Language.ES]: 'es-es',
};

export const GET = async () => {

    const template: Template = await readTemplate('feed.xml');

    const xml = template.render({
        domain: assertDefined<string>(process.env.DOMAIN, 'DOMAIN'),
        email: assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL'),
        lang: "en-us",
        blogs: baseBlogs.map<SitemapBlogEntry>((blog: BlogPost) => ({ 
            id: blog.id, 
            title: blog.title[Language.EN],
            summary: blog.summary, 
            date: blog.date, 
            tags: [],
            language: LANGUAGE_MAP[blog.language as keyof typeof LANGUAGE_MAP],
        })),
    });

    return new NextResponse<string>(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });

}