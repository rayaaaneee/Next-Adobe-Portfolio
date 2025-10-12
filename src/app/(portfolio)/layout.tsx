import type { Metadata } from "next";

import { APP_DEFAULT_TITLE } from "../layout";

import App from "./_app";

import Header from "@/components/header/header";
import Background from "@/components/background";

import { ChildrenInterface } from "@/utils/interface/children";

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
    <App>
        <Header hasFooter={true} />
        <Background />
        { children }
    </App>
);

export default RootLayout;
