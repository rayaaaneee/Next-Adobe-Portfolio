// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import assertDefined from '@/utils/function/assert-defined';

export const dynamic = 'force-static';

export interface SitemapBlogEntry {
    id: string;
}

export const GET = async () => {

    const template: Template = await readTemplate('humans.txt');

    const txt = template.render({
        domain: assertDefined<string>(process.env.DOMAIN, 'DOMAIN'),
        email: assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL'),
        currentDate: new Date().toISOString().split('T')[0],
    });

    return new NextResponse<string>(txt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });

}