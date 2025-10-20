import SquaredLogo from "@/components/about/squared-logo";
import MainPart from "@/components/others/main-part";

import { Metadata } from "next";
import { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "About",
}

const About = ({}) => {
    
    return (
        <MainPart 
        style={{ 
            "--base-color": "rgba(220,160,177,.325)",
            "--fade-color": "rgba(255,255,255,0.5)",
            "background": "linear-gradient(90deg, var(--base-color) 40%, var(--fade-color) 60%, var(--fade-color) 100%)", 
        } as CSSProperties} 
        className="grid grid-cols-2 !w-5/6 !h-[90vh]">
            <section
                id="logo-section" 
                className="w-full h-full flex items-center justify-start">
                <SquaredLogo className="scale-50" />
            </section>
            <section id="content"></section>
        </MainPart>
    );
}

export default About;