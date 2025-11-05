// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import getBlogs from '@/asset/data/blog/blogs';

import assertDefined from '@/utils/function/assert-defined';

export const dynamic = 'force-static';

export interface SitemapBlogEntry {
    id: string;
}

export const GET = async () => {

    const template: Template = await readTemplate('sitemap.xml');

    const xml = template.render({
        domain: assertDefined<string>(process.env.NEXT_PUBLIC_DOMAIN, 'DOMAIN'),
        blogs: getBlogs().map<SitemapBlogEntry>(blog => ({ 
            id: blog.id
        })),
    });

    return new NextResponse<string>(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });

}