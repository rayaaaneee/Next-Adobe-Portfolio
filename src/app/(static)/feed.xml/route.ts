// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import assertDefined from '@/util/function/assert-defined';

import Language, { WithLanguage } from '@/util/type/language';
import getBlogs from '@/asset/data/blog/blogs';

import logo from '@/asset/img/favicon/favicon-light-theme.png';

export const dynamic = 'force-static';

export interface SitemapBlogEntry {
    id: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    language: string;
}

const LANGUAGE_MAP: WithLanguage<string> = {
    [Language.EN]: 'en-gb',
    [Language.FR]: 'fr-fr',
    [Language.ES]: 'es-es',
};

export const GET = async () => {

    const template: Template = await readTemplate('feed.xml');

    const xml = template.render({
        domain: assertDefined<string>(process.env.NEXT_PUBLIC_DOMAIN, 'DOMAIN'),
        email: assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL'),
        name: assertDefined<string>(process.env.NEXT_PUBLIC_NAME, 'NEXT_PUBLIC_NAME'),
        lang: LANGUAGE_MAP[Language.EN],
        currentYear: new Date().getFullYear(),
        lastUpdate: new Date().toUTCString(),
        logo: `/_next/image?url=${encodeURIComponent(`${logo.src.split('/').pop()!}&w=128&q=75`)}`,
        blogs: getBlogs().map<SitemapBlogEntry>((blog) => ({ 
            id: blog.id, 
            title: blog.title[Language.EN],
            summary: blog.summary[Language.EN], 
            date: new Date(blog.date as string).toUTCString(), 
            tags: [],
            language: LANGUAGE_MAP[blog.lang as keyof typeof LANGUAGE_MAP],
        })),
    });

    return new NextResponse<string>(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });

}