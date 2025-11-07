import { Metadata, Viewport } from "next";
import { APP_DEFAULT_TEMPLATE_TITLE, APP_DEFAULT_TITLE } from "@/asset/data/title";

import cn from "@/util/function/cn";

import "~/scss/styles.scss";

import ChildrenInterface from "@/util/interface/children";

import lightFavicon from '~/img/favicon/favicon-light-theme.png';
import darkFavicon from '~/img/favicon/favicon-dark-theme.png';

import '@/util/function/string';
import assertDefined from "@/util/function/assert-defined";
import PWAUpdateNotification from "./_pwa-update-notification";

const APP_DESCRIPTION = `${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}'s Portfolio built with Next.js`;

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_DEFAULT_TEMPLATE_TITLE,
    },
    description: APP_DESCRIPTION,
    icons: {
        icon: [
            { rel: 'icon', url: lightFavicon.src, media: '(prefers-color-scheme: light)' },
            { rel: 'icon', url: darkFavicon.src, media: '(prefers-color-scheme: dark)' },
        ],
        shortcut: lightFavicon.src,
        apple: [
            { url: lightFavicon.src, media: '(prefers-color-scheme: light)' },
            { url: darkFavicon.src, media: '(prefers-color-scheme: dark)' }
        ],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    openGraph: {
        // Todo
    },
    twitter: {
        // Todo
    },
    formatDetection: {
      telephone: false,
    },
    alternates: {
        canonical: assertDefined(process.env.NEXT_PUBLIC_DOMAIN, 'DOMAIN'),
        types: {
            'application/rss+xml': [
                { url: '/rss.xml', title: `${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')} RSS Feed` },
            ],
            'application/atom+xml': [
                { url: '/atom.xml', title: `${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')} Atom Feed` },
            ],
        },  
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
    viewportFit: 'cover',
}

const Layout = ({ 
    children 
} : Readonly<ChildrenInterface>) => (
    <html
        className={cn(
            "scrollbar-thin",
            "selection:bg-[blanchedalmond]/70 selection:text-black",
            "dark:selection:bg-[#6495ed]/70 dark:selection:text-white",
            ["[&.no-overflow]:overflow-hidden"],
            [
                "[&.menu-active]:overflow-hidden md:[&.menu-active]:overflow-auto",
                "[&.menu-active>body]:overflow-hidden md:[&.menu-active]>body:overflow-auto",
            ]
        )} 
        suppressHydrationWarning
    >
        <body className={"antialiased"}>
            <PWAUpdateNotification />
            {children}
        </body>
    </html>
);

export default Layout;
