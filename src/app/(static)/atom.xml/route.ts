// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import assertDefined from '@/util/function/assert-defined';

import Language from '@/util/type/language';

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

    const template: Template = await readTemplate('atom.xml');

    const xml = template.render({
        domain: assertDefined<string>(process.env.NEXT_PUBLIC_DOMAIN, 'DOMAIN'),
        email: assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL'),
        lastUpdate: new Date().toUTCString(),
        name: assertDefined<string>(process.env.NEXT_PUBLIC_NAME, 'NEXT_PUBLIC_NAME'),
        lang: "en-us",
        blogs: getBlogs().map((blog) => ({ 
            id: blog.id, 
            title: blog.title[Language.EN],
            summary: blog.summary[Language.EN], 
            date: new Date(blog.date as string).toUTCString(),
            tags: blog.tags,
            language: LANGUAGE_MAP[blog.lang as keyof typeof LANGUAGE_MAP],
        })) as SitemapBlogEntry[],
    });
    return new NextResponse<string>(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });

}