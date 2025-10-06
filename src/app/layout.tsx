import type { Metadata, Viewport } from "next";

import { cn } from "@/lib/utils";

import App from "./_app";

import Header from "@/components/header/header";
import Background from "@/components/background";

import { ChildrenInterface } from "@/utils/interface/children";
import ManageLanguages from "@/utils/manager/manage-language";

import lightFavicon from '~/img/favicon/favicon-light-theme.png';
import darkFavicon from '~/img/favicon/favicon-dark-theme.png';

import "~/scss/styles.scss";

const APP_DEFAULT_TITLE = "Adobe Portfolio";
const APP_TITLE_TEMPLATE = `%s - ${APP_DEFAULT_TITLE}`;
const APP_DESCRIPTION = "Rayane Merlin's Portfolio built with Next.js";

export const metadata: Metadata = {
    title: { 
        default: APP_DEFAULT_TITLE, 
        template: APP_TITLE_TEMPLATE
    },
    manifest: "/manifest.json",
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

const RootLayout = ({
    children,
}: Readonly<ChildrenInterface>) => (
    <html lang={ManageLanguages.defaultLanguage} suppressHydrationWarning>
        <body className={cn(
            "antialiased", 
            "[&.menu-active]:overflow-hidden md:[&.menu-active]:overflow-auto"
        )}>
            <App>
                <Header hasFooter={true} />
                <Background />
                { children }
            </App>
        </body>
    </html>
);

export default RootLayout;
