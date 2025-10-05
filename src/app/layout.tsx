import type { Metadata } from "next";

import App from "./_app";
import Header from "@/components/header/header";
import Background from "@/components/background";

import "@/asset/scss/styles.scss";
import { cn } from "@/lib/utils";
import { ChildrenInterface } from "@/utils/interface/children";
import ManageLanguages from "@/utils/manager/manage-language";

export const metadata: Metadata = {
  title: "Adobe Portfolio",
  description: "By Rayane Merlin",
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
