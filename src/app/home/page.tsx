import { type Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { FaLocationDot } from "react-icons/fa6";

import { 
    HeadingOne, 
    HeadingThree, 
    HeadingTwo, 
    Paragraph, 
    ParagraphAlignment 
} from "@/components/page-flow";

import photo from "~/img/home/photo.jpg";

import ContactLinks from "@/components/contact-links";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";
import SkillsContainer from "@/components/home/skills-container";
import AdaptableGrid from "@/components/home/adaptable-grid/adaptable-grid";

export const metadata: Metadata = {
    title: "Portfolio",
};

const Home = () => {
    return (
        <main className={cn(
            "relative justify-self-center to-animate fade anim-delay-200 anim-duration-300 rounded-xl h-fit",
            "bg-[rgb(255,255,255,0.2)] dark:bg-[rgb(0,0,0,0.2)] backdrop-blur-md",
            "box-border ",
            "w-[93vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-[3.5vw] md:my-[5vw] lg:my-10",
            "py-5 sm:py-7 md:py-10 xl:py-20",
            "[&>article]:px-5 sm:[&>article]:px-7 md:[&>article]:px-10 xl:[&>article]:px-20"
        )}>
            <Image className={cn("absolute w-48 h-48 top-24 right-24 opacity-90 backdrop-blur-md rounded-full pointer-events-none")} src={photo} alt="photo" width={150} height={150} />
            <article>
                <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
                <Paragraph>Full-Stack Developer & Cybersecurity Enthusiast</Paragraph>
                <HeadingThree containerClassName="ml-0" icon={<FaLocationDot className="w-6 h-6"/>}>Lyon, France</HeadingThree>
            </article>
            <article>
                <HeadingTwo containerClassName="ml-0" id="links" isAnchorLink>Links</HeadingTwo>
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
                    specializing in Cybersecurity Computer Engineering.<br/> I&apos;m currently working at Energy Pool 
                    as a Blue Team member (vulnerabilities protection) throughout my engineering studies. This role is 
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
            {/* <AdaptableGrid id="main-projects" elements={[]} elementsPerRow={5} /> */}
            <article>
                <HeadingOne id="contact" isAnchorLink>Contact</HeadingOne>
                <Paragraph>If you want to reach me, you can use the links above or send me an email at <a className="underline" href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a>.</Paragraph>
            </article>
            <article>
                <HeadingOne id="skills" isAnchorLink>Skills & Technologies</HeadingOne>
                <Paragraph>Here&apos;s my skills ...</Paragraph>
            </article>
            <SkillsContainer />
            <article>
                <HeadingOne id="hobbies" isAnchorLink>Hobbies</HeadingOne>
            </article>
            {/* Made by Rayane Merlin with Next.js */}
        </main>
    )
}

export default Home
