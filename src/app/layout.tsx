import type { Metadata } from "next";

import App from "./_app";

import HeaderComponent from "@/components/header/header-component";

import "@/asset/scss/styles.scss";

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
                        <HeaderComponent hasFooter={true} />
                    </header>
                    {children}
                </body>
            </html>
        </App>
    );
}

export default RootLayout;
