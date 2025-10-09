import { type Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { FaLocationDot } from "react-icons/fa6";
import { LuCodeXml } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { BsStack } from "react-icons/bs";

import { 
    HeadingOne, 
    HeadingThree, 
    HeadingTwo, 
    Paragraph, 
    ParagraphAlignment 
} from "@/components/page-flow";

import photo from "~/img/home/photo.jpg";

import ContactLinks from "@/components/contact-links";
import AdaptableGrid from "@/components/home/adaptable-grid";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";

import programmingLanguages from "@/asset/data/home/programming-language";

export const metadata: Metadata = {
    title: "Portfolio",
};

const Home = () => {
    return (
        <main className={cn(
            "justify-self-center to-animate fade anim-delay-200 anim-duration-300 rounded-xl h-fit",
            "bg-[rgb(255,255,255,0.2)] dark:bg-[rgb(0,0,0,0.2)] backdrop-blur-md",
            "box-border ",
            "w-[93vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-[3.5vw] md:my-[5vw] lg:my-10",
            "py-5 sm:py-7 md:py-10 xl:py-20",
            "[&>article]:px-5 sm:[&>article]:px-7 md:[&>article]:px-10 xl:[&>article]:px-20"
        )}>
            <article className="relative">
                <Image className={cn("absolute w-48 h-48 top-4 right-4 opacity-90 backdrop-blur-md rounded-full pointer-events-none")} src={photo} alt="photo" width={150} height={150} />
                <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
                <Paragraph>Full-Stack Developer & Cybersecurity Enthusiast</Paragraph>
                <HeadingThree className="ml-0" icon={<FaLocationDot className="w-6 h-6"/>}>Lyon, France</HeadingThree>
            </article>
            <article>
                <HeadingTwo className="ml-0" id="links" isAnchorLink>Links</HeadingTwo>
                <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                    "w-fit mt-4 gap-7 justify-between",
                )} />
            </article>
            <article>
                <HeadingOne id="about" isAnchorLink>About me</HeadingOne>
                <Paragraph indent alignment={ParagraphAlignment.justify}>
                    Hello ! I&apos;m Rayane, a passionate developer with a deep interest in 
                    technology and all things related to computing. Over the years, I&apos;ve 
                    dedicated myself creating a variety of personal projects, driven by my passion 
                    for learning and exploring new technologies.<br/> I&apos;m proficient in 
                    full-stack development and Cybersecurity, with a particular focus on React and 
                    Next.js for web development. On the DevOps side, I have experience with tools 
                    like GitHub Actions, Python, Automation, Linux, Terraform, and AWS—skills 
                    I&apos;ve been improving through both personal projects and professional experience.
                    <br/> I hold a BUT in Computer Science from the University of Lyon 1 (Development & 
                    Implementation Program) and am currently pursuing a three-year engineering degree at CPE Lyon, 
                    specializing in Cybersecurity Computer Engineering.<br/> I completed an apprenticeship at 
                    Sanofi as a DevOps Developer during my final year of the BUT. Energy Pool has continued to support 
                    me by hiring me as a Blue Team member (vulnerabilities protection) throughout my engineering studies. This role is 
                    enhancing my skills in ... 
                    <br/>... certs
                </Paragraph>
            </article>
            <article>
                <HeadingOne id="xp" isAnchorLink>Experience</HeadingOne>
                <Paragraph>Describe here...</Paragraph>
            </article>
            <article>
                <HeadingOne id="projects" isAnchorLink>Projects</HeadingOne>
                <Paragraph>Some projects links...</Paragraph>
            </article>
            <article>
                <HeadingOne id="contact" isAnchorLink>Contact</HeadingOne>
                <Paragraph>If you want to reach me, you can use the links above or send me an email at <a className="underline" href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a>.</Paragraph>
            </article>
            <article>
                <section>
                    <HeadingOne id="skills" isAnchorLink>Skills</HeadingOne>
                    <Paragraph>Here&apos;s my skills ...</Paragraph>
                    <HeadingTwo icon={<LuCodeXml />} id="languages" isAnchorLink>Programming Languages</HeadingTwo>
                </section>
            </article>
            <section>
                <AdaptableGrid className="my-8" elementsPerRow={5} elements={programmingLanguages} />
            </section>
            <article>
                <HeadingTwo icon={<GrTechnology />} id="techs" isAnchorLink>Technologies</HeadingTwo>
                <HeadingTwo icon={<BsStack />} id="frameworks" isAnchorLink>Frameworks</HeadingTwo>
                <HeadingTwo icon={<FaCloud />} id="cloud" isAnchorLink>Cloud Tools</HeadingTwo>
                <HeadingTwo icon={<AiFillTool/>} id="tools" isAnchorLink>Tools & Platforms</HeadingTwo>
            </article>
            <article>
                <HeadingOne id="education" isAnchorLink>Education</HeadingOne>
            </article>
            <article>
                <HeadingOne id="hobbies" isAnchorLink>Hobbies</HeadingOne>
            </article>
            {/* Made by Rayane Merlin with Next.js */}
        </main>
    )
}

export default Home
