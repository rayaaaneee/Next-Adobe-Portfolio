import { NextResponse } from 'next/server';

export function GET() {

    const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <feed>
            <title>My Feed</title>
        </feed>
    `;

    return new NextResponse<string>(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-cache',
        },
    });

}