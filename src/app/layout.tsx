import type { Metadata } from "next";

import App from "./_app";

import "@/asset/scss/styles.scss";
import HeaderComponent from "@/components/header/header-component";

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
                <header>
                    <HeaderComponent hasFooter={true} />
                </header>
                <body className={`antialiased`}>
                    {children}
                </body>
            </html>
        </App>
    );
}

export default RootLayout;
