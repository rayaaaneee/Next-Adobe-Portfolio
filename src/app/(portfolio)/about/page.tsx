import SquaredLogo from "@/components/about/squared-logo";
import MainPart from "@/components/others/main-part";
import { AnchorLinkButton, AnchorLinkText, HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from "@/components/page-flow";
import assertDefined from "@/utils/function/assert-defined";
import getCurrentYear from "@/utils/function/get-current-year";

import { Metadata } from "next";
import { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "About",
}

const About = ({}) => {
    
    return (
        <MainPart 
        style={{ 
            "--base-color": "rgba(220,160,177,.6)",
            "background": "linear-gradient(90deg, var(--base-color) 30%, var(--color) 45%, var(--color) 100%)", 
        } as CSSProperties} 
        className="grid grid-cols-[auto_1fr] !w-5/6 !h-[90vh]">
            <section
                id="logo-section" 
                className="w-full h-full flex items-center justify-start">
                <SquaredLogo className="scale-50" />
            </section>
            <article id="content" className="!mx-0 pr-14 py-8 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-hover:bg-gray-500">
                <HeadingOne containerClassName="!mt-0">À propos</HeadingOne>
                <Paragraph alignment={ParagraphAlignment.justify} indent>
                    Ce site a été entièrement conçu et développé par mes soins afin de présenter mon parcours, mes projets et mes compétences.  
                    Les projets présentés ont tous été réalisés en tout ou en partie, par moi-même.
                    Chaque article de la page <AnchorLinkText href="/blog">Blog</AnchorLinkText> détaille les étapes de conception, les défis rencontrés et les solutions mises en œuvre pour un projet, une problématique ou une réalisation spécifique.
                </Paragraph>
                <HeadingTwo>Cookies</HeadingTwo>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                    En continuant à utiliser ce site, vous acceptez l&apos;utilisation des cookies conformément à la politique de confidentialité.
                </Paragraph>
                <HeadingTwo>Stack</HeadingTwo>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    Ce site a été développé en utilisant le framework <strong>Next.js</strong> avec <strong>TypeScript</strong> pour une meilleure gestion des types.
                    Le style est géré avec <strong>Tailwind CSS</strong> pour une conception réactive et moderne.
                    L&apos;hébergement est assuré par <strong>Vercel</strong>, offrant des performances optimales et une mise à l&apos;échelle automatique.
                </Paragraph>
                <HeadingTwo>Inspirations</HeadingTwo>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    Le logo a été inspiré du logo officiel d&apos;Adobe Photoshop (plus généralement de l&apos;ensemble des logos de la suite <AnchorLinkText href="https://www.adobe.com/creativecloud.html">Adobe</AnchorLinkText>).
                </Paragraph>
                <HeadingTwo>&copy; Licence et droits d’utilisation</HeadingTwo>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    Le design, la mise en page et les éléments visuels de ce site ont été conçus avec soin et sont protégés par le droit d’auteur.
                    Leur réutilisation, même partielle, n’est pas autorisée sans accord préalable.
                    Except where otherwise noted, all the content is licensed under the <AnchorLinkText href="">Creative Commons Attribution 4.0 International (CC BY 4.0) License</AnchorLinkText> by the author.
                    This means you are free to share (copy and redistribute the material in any medium or format) and adapt (remix, transform, and build upon the material) for any purpose, even commercially, under the following terms:
                </Paragraph>
                <HeadingThree>• Attribution</HeadingThree>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
                </Paragraph>
                <HeadingThree>• No additional restrictions</HeadingThree>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
                </Paragraph>
                <HeadingThree>• Notices</HeadingThree>
                <Paragraph alignment={ParagraphAlignment.justify}>
                    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
                    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
                </Paragraph>
                <HeadingThree containerClassName="!ml-0 w-full" className="w-full mt-5 text-end">&copy; {getCurrentYear()} {assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}, Some Rights Reserved</HeadingThree>
            </article>
        </MainPart>
    );
}

export default About;