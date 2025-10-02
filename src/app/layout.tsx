import type { Metadata } from "next";

import App from "./_app";
import Header from "@/components/header/header";
import Background from "@/components/background";

import "@/asset/scss/styles.scss";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Adobe Portfolio",
  description: "By Rayane Merlin",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (<html lang="en">
        <App>
            <body className={`antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <>
                        <header>
                            <Header hasFooter={true} />
                        </header>
                        <Background />
                        {children}
                    </>
                </ThemeProvider>
            </body>
        </App>
    </html>
);

export default RootLayout;
