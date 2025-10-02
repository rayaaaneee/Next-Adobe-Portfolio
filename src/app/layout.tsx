import type { Metadata } from "next";

import App from "./_app";
import Header from "@/components/header/header";
import Background from "@/components/background";

import "@/asset/scss/styles.scss";

export const metadata: Metadata = {
  title: "Adobe Portfolio",
  description: "By Rayane Merlin",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (<html lang="en" suppressHydrationWarning>
        <body className={`antialiased`}>
            <App>
                <>
                    <header>
                        <Header hasFooter={true} />
                    </header>
                    <Background />
                    {children}
                </>
            </App>
        </body>
    </html>
);

export default RootLayout;
