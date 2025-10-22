/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import withPWAInit from "@ducanh2912/next-pwa";

import path from "path";

type originType = {
    url: string;
    islocalhost?: boolean;
}

const withPWA = withPWAInit({
    dest: "public",
    disable: ["development", "test"].includes(process.env.NODE_ENV),
});

const allowedOrigins: originType[] = [
    { url:'http://127.0.0.1:3000', islocalhost: true },
    { url:'http://localhost:3000', islocalhost: true },
    { url:'http://rayanemerlin.com', islocalhost: false },
    { url:'http://next-adobe-portfolio.vercel.app', islocalhost: false }
]

const nextConfig: NextConfig = withPWA({
    sassOptions: {
        includePaths: [path.join(__dirname, "src", "asset", "scss")],
    },
    experimental: {
        serverActions: {
            allowedOrigins: [
                ...allowedOrigins.map(({ url }) => url), 
                ...allowedOrigins.map(({ url }) => url.replace('http://', 'https://')),
                ...allowedOrigins.filter(({ islocalhost }) => !islocalhost)
                    .map(({ url }) => url.replace('://', '://www.')),
                ...allowedOrigins.filter(({ islocalhost }) => !islocalhost)
                    .map(({ url }) => url.replace("http://", "https://").replace('://', '://www.'))
            ],
        },
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: false,
});

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
