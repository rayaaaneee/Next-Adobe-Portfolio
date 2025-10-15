import { type Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { FaHeart, FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

import { 
    HeadingOne, 
    HeadingThree, 
    HeadingTwo, 
    IconPosition, 
    Paragraph, 
    ParagraphAlignment 
} from "@/components/page-flow";

import photo from "~/img/home/photo.jpg";

import ContactLinks from "@/components/contact-links";
import EducationContainer from "@/components/home/education-container";
import WorkContainer from "@/components/home/work-container";
import SkillsContainer from "@/components/home/skills-container";
import AdaptableGrid from "@/components/home/adaptable-grid/adaptable-grid";
import Separator from "@/components/home/separator";

import projects from "@/asset/data/home/projects";
import hobbies from "@/asset/data/home/hobbies";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";

export const metadata: Metadata = {
    title: "Portfolio",
};

const Home = () => {

    return (
        <main className={cn(
            "justify-self-center rounded-none md:rounded-md h-fit",
            "to-animate fade anim-delay-200 anim-duration-300",
            "bg-[rgb(255,255,255,0.5)] dark:bg-[rgb(0,0,0,0.5)] backdrop-blur-md",
            "box-border overflow-hidden",
            "w-[100vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-0 md:my-[5vw] lg:my-10",
            "pt-5 sm:pt-7 md:pt-10 xl:pt-20",
            "[&>article]:mx-5 sm:[&>article]:mx-7 md:[&>article]:mx-10 xl:[&>article]:mx-20"
        )}>
            <Separator className="mt-0 mb-8" />
            <article className="relative flex flex-col justify-center">
                <Image className={cn("absolute w-48 h-48 right-0 opacity-90 backdrop-blur-md rounded-full pointer-events-none")} src={photo} alt="photo" width={150} height={150} />
                <section>
                    <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
                    <Paragraph>Full-Stack Developer & Cybersecurity Enthusiast</Paragraph>
                    <HeadingThree containerClassName="ml-0" icon={<FaLocationDot className="w-6 h-6"/>}>Lyon, France</HeadingThree>
                </section>
                <section>
                    <HeadingThree icon={<FaLink className="w-6 h-6"/>} containerClassName="ml-0">Links</HeadingThree>
                    <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                        "w-fit mt-4 gap-7 justify-between",
                    )} />
                </section>
            </article>
            <Separator className="my-8" />
            <article>
                <HeadingOne id="about" isAnchorLink>About me</HeadingOne>
                <Paragraph indent alignment={ParagraphAlignment.justify}>

                    Hello! I&apos;m <b>Rayane</b>, a passionate <b>developer</b> with a deep interest in <b>technology</b> and all things related to computing. Over the years, I&apos;ve dedicated myself to creating a variety of <b>personal projects</b>, driven by my passion for <b>learning</b> and <b>exploring new technologies</b>.<br/>

                    Although my <b>portfolio places a strong emphasis on design</b>, it mainly reflects my appreciation for <b>visual aesthetics</b> and <b>user experience</b>, aspects I value as a <i>hobby</i> and <i>creative outlet</i>. While I truly enjoy crafting <b>clean and visually engaging interfaces</b>, my <b>professional focus</b> is oriented toward <b>Cybersecurity</b> and <b>software development</b>, where I aim to deepen my expertise and build a <b>solid technical career</b>.<br/>

                    I&apos;m proficient in <b>full-stack development</b> and <b>cybersecurity</b>, with a particular focus on <b>React</b> and <b>Next.js</b> for web development. In cybersecurity, I&apos;ve trained through Capture The Flag <b>(CTF)</b> challenges and applied those skills in <b>real-world contexts</b>, strengthening my understanding of <b>vulnerabilities</b>, <b>system hardening</b>, and <b>secure development practices</b>.<br/>

                    I hold a <b>BUT in Computer Science</b> from the <b>University of Lyon 1</b> (<i>Development &amp; Implementation Program</i>) and am currently pursuing a <b>three-year engineering degree at CPE Lyon</b>, specializing in <b>Cybersecurity Computer Engineering</b>.<br/>

                    I&apos;m currently working at <b>Energy Pool</b> as a <b>Blue Team member</b> (<i>vulnerability protection</i>) throughout my engineering studies. This role is enhancing my skills in <b>threat detection</b>, <b>incident analysis</b>, <b>vulnerability management</b>, and <b>continuous improvement of defensive measures</b> within a <b>production environment</b>.<br/>

                    ... certs
                    
                </Paragraph>
            </article>
            <Separator className="my-8" />
            <article>
                <HeadingOne id="projects" isAnchorLink>Projects</HeadingOne>
                <Paragraph>These are my last main projects. Click on a project to learn more about it. You can find descriptions, links and more..</Paragraph>
            </article>
            <AdaptableGrid id="main-projects" clickable elements={projects} elementsPerRow={5} />
            <Separator className="my-10" />
            <WorkContainer />
            <EducationContainer />
            <Separator className="my-8" />
            <article>
                <HeadingOne id="contact" isAnchorLink>Contact</HeadingOne>
                <Paragraph>If you want to reach me, you can use the links above or send me an email at <a className="underline" href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a>.</Paragraph>
            </article>
            <Separator className="my-8" />
            <article>
                <HeadingOne id="skills" isAnchorLink>Skills & Technologies</HeadingOne>
                <Paragraph>Here&apos;s my skills ...</Paragraph>
            </article>
            <SkillsContainer />
            <Separator className="my-10" />
            <article>
                <HeadingOne id="hobbies" isAnchorLink>Hobbies</HeadingOne>
            </article>
            <AdaptableGrid id="hobbies-grid" elementsPerRow={5} elements={hobbies} />
            <Separator className="mb-0" />
            <HeadingThree 
                icon={<FaHeart className="w-8 h-8 text-red-400" />} 
                iconPosition={IconPosition.right}
                className={cn(
                    "text-center dark:text-white",
                )} 
                containerClassName={cn(
                    "flex justify-center items-center w-full m-0",
                    "h-5 sm:h-7 md:h-10 xl:h-20" // Same height as <main> margin-top
                )}>
                    Thank you for visiting my portfolio !
            </HeadingThree>
        </main>
    )
}

export default Home
