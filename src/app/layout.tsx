import type { Metadata } from "next";

import App from "./_app";

import Header from "@/components/header/header";

import "@/asset/scss/styles.scss";
import Background from "@/components/background";

export const metadata: Metadata = {
  title: "Adobe Portfolio",
  description: "By Rayane Merlin",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <App>
            <html lang="en">
                <body className={`antialiased`}>
                    <header>
                        <Header hasFooter={true} />
                    </header>
                    <Background />
                    {children}
                </body>
            </html>
        </App>
    );
}

export default RootLayout;
