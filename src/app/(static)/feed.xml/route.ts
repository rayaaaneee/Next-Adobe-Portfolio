// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import blogs from '@/asset/data/blog/blogs';

import assertDefined from '@/utils/function/assert-defined';

import { BlogPost } from '@/utils/type/blog';
import Language from '@/utils/type/language';
import getBlogs from '@/asset/data/blog/blogs';

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
        domain: assertDefined<string>(process.env.NEXT_PUBLIC_DOMAIN, 'DOMAIN'),
        email: assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL'),
        name: assertDefined<string>(process.env.NEXT_PUBLIC_NAME, 'NEXT_PUBLIC_NAME'),
        lang: "en-us",
        currentYear: new Date().getFullYear(),
        lastUpdate: new Date().toUTCString(),
        blogs: getBlogs().map<SitemapBlogEntry>((blog) => ({ 
            id: blog.id, 
            title: blog.title[Language.EN],
            summary: blog.summary[Language.EN], 
            date: new Date(blog.date as string).toUTCString(), 
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