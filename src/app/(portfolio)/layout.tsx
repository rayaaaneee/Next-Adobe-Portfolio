import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import { APP_DEFAULT_TITLE } from "../layout";

import App from "./_app";

import Header from "@/components/header/header";
import Background from "@/components/background";

import { ChildrenInterface } from "@/utils/interface/children";
import ManageLanguages from "@/utils/manager/manage-language";

const APP_TITLE_TEMPLATE = `%s - ${APP_DEFAULT_TITLE}`;

export const metadata: Metadata = {
    title: { 
        default: APP_DEFAULT_TITLE, 
        template: APP_TITLE_TEMPLATE
    },
};

const RootLayout = ({
    children,
}: Readonly<ChildrenInterface>) => (
    <html lang={ManageLanguages.defaultLanguage} suppressHydrationWarning>
        <body className={cn(
            "antialiased", 
            "[&.menu-active]:overflow-hidden md:[&.menu-active]:overflow-auto",
            "scrollbar-thumb-rose-200 scrollbar-thin",
            "dark:scrollbar-thumb-rose-700 dark:scrollbar-track-slate-700",
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
