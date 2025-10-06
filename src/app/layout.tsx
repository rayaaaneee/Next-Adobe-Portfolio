import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import App from "./_app";

import Header from "@/components/header/header";
import Background from "@/components/background";

import { ChildrenInterface } from "@/utils/interface/children";
import ManageLanguages from "@/utils/manager/manage-language";

import lightFavicon from '@/asset/img/favicon/favicon-light-theme.png';
import darkFavicon from '@/asset/img/favicon/favicon-dark-theme.png';

import "@/asset/scss/styles.scss";

export const metadata: Metadata = {
    title: "Adobe Portfolio",
    description: "By Rayane Merlin",
    icons: {
        icon: [
            { rel: 'icon', url: lightFavicon.src, media: '(prefers-color-scheme: light)' },
            { rel: 'icon', url: darkFavicon.src, media: '(prefers-color-scheme: dark)' },
        ]
        // shortcut: "/favicon-16x16.png",
       // apple: "/apple-touch-icon.png",
    }
};

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
