// Generate SiteMap

import { NextResponse } from 'next/server';

import { Template } from 'twig';

import readTemplate from '../read-template';

import assertDefined from '@/utils/function/assert-defined';

export const dynamic = 'force-static';

export const GET = async () => {

    const template: Template = await readTemplate('robots.txt');

    const txt = template.render({
        domain: assertDefined<string>(process.env.DOMAIN, 'DOMAIN'),
    });

    return new NextResponse<string>(txt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });

}