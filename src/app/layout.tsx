import { Metadata, Viewport } from "next";
import { APP_DEFAULT_TEMPLATE_TITLE, APP_DEFAULT_TITLE } from "@/asset/data/title";

import cn from "@/utils/function/cn";

import "~/scss/styles.scss";

import { ChildrenInterface } from "@/utils/interface/children";
import ManageLanguages from "@/utils/manager/manage-language";

import lightFavicon from '~/img/favicon/favicon-light-theme.png';
import darkFavicon from '~/img/favicon/favicon-dark-theme.png';


const APP_DESCRIPTION = "Rayane Merlin's Portfolio built with Next.js";

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
        lang={ManageLanguages.defaultLanguage} 
        className={cn(
            "scrollbar-thin",
            [
                "[&.menu-active]:overflow-hidden md:[&.menu-active]:overflow-auto",
                "[&.menu-active>body]:overflow-hidden md:[&.menu-active]>body:overflow-auto",
            ]
        )} 
        suppressHydrationWarning
    >
        <body className={"antialiased"}>
            {children}
        </body>
    </html>
);

export default Layout;
