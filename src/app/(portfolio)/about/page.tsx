import { Metadata } from "next";
import { CSSProperties } from "react";

import MainPart from "@/components/other/main-part";

import SquaredLogo from "./_components/squared-logo";
import ContentPart from "./_components/content-part";

export const metadata: Metadata = {
    title: "About",
}

const About = ({}) => (
    <MainPart 
    style={{ 
        "--base-color": "rgba(220,160,177,.6)",
        "--dark-base-color": "rgba(48,44,46,.6)",
        "--background": "linear-gradient(90deg, var(--base-color) 30%, var(--color) 45%, var(--color) 100%)", 
        "--dark-background": "linear-gradient(90deg, var(--dark-base-color) 30%, var(--dark-color) 45%, var(--dark-color) 100%)",
    } as CSSProperties} 
    className="grid grid-cols-[auto_1fr] !w-5/6 !h-[90vh] [background:var(--background)] dark:[background:var(--dark-background)] bg-clip-border">
        <section
            id="logo-section" 
            className="w-full h-full flex items-center justify-start">
            <SquaredLogo className="scale-50" />
        </section>
        <ContentPart />
    </MainPart>
);

export default About;