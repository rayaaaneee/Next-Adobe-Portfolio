import { type Metadata } from "next";
import Image from "next/image";

import cn from "@/utils/function/cn";

import { FaHeart, FaLocationDot, FaBriefcase } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

import photo from "~/img/home/photo.jpg";

import { 
    HeadingOne, 
    HeadingThree,
    IconPosition, 
    Paragraph, 
    ParagraphAlignment 
} from "@/components/page-flow";
import ContactLinks from "@/components/contact-links";
import EducationContainer from "@/components/home/education-container";
import WorkContainer from "@/components/home/work-container";
import SkillsContainer from "@/components/home/skills-container";
import AdaptableGrid from "@/components/others/adaptable-grid";
import Separator from "@/components/others/separator";

import projects from "@/asset/data/home/projects";
import hobbies from "@/asset/data/home/hobbies";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";

import { ChildrenType } from "@/utils/interface/children";
import MainPart from "@/components/others/main-part";

export const metadata: Metadata = {
    title: "Portfolio",
};

interface VerticalBorderSectionProps {
    text: string;
    icon: ChildrenType;
}

const VerticalBorderSection = ({ text, icon }: VerticalBorderSectionProps) => (
    <HeadingThree 
        icon={icon} 
        iconPosition={IconPosition.right}
        className={cn(
            "text-center h- dark:text-white",
        )} 
        containerClassName={cn(
            "flex justify-center items-center w-full !m-0",
            "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20"
        )}>
            {text}
    </HeadingThree>
);

const Home = () => {

    return (
        <MainPart>
            <VerticalBorderSection 
                text="Portfolio" 
                icon={<FaBriefcase className="text-amber-400"/>} 
            />
            <Separator className="!mt-0" />
            <article className="relative flex flex-col justify-center">
                <Image className={cn(
                    "hidden absolute right-0 opacity-90 backdrop-blur-md rounded-full pointer-events-none",
                    [
                        "sm:block sm:w-40 sm:h-40",
                        "lg:w-44 lg:h-44",
                        "xl:w-48 xl:h-48",
                    ]
                )} src={photo} alt="photo" width={150} height={150} />
                <section className="grid grid-cols-[1fr_auto]">
                    <div>
                        <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
                        <Paragraph>Full-Stack Developer & Cybersecurity Enthusiast</Paragraph>
                        <HeadingThree containerClassName="!ml-0" icon={<FaLocationDot/>}>Lyon, France</HeadingThree>
                    </div>
                    <Image className={cn(
                        "block m-auto opacity-90 backdrop-blur-md rounded-full pointer-events-none",
                        [
                            "w-24 h-24",
                            "xs:w-32 xs:h-32",
                            "sm:hidden",
                        ]
                    )} src={photo} alt="photo" width={150} height={150} />
                </section>
                <section>
                    <HeadingThree icon={<FaLink/>} containerClassName="!ml-0">Links</HeadingThree>
                    <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                        "w-fit mt-4 justify-between",
                        [
                            "gap-4 mx-auto",
                            "xs:mx-0",
                            "sm:gap-4",
                            "md:gap-5",
                            "lg:gap-6",
                            "xl:gap-7"
                        ]
                    )} />
                </section>
            </article>
            <Separator className="!mt-4" highMargin/>
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
            <Separator highMargin />
            <article>
                <HeadingOne id="projects" isAnchorLink>Projects</HeadingOne>
                <Paragraph>These are my last main projects. Click on a project to learn more about it. You can find descriptions, links and more..</Paragraph>
            </article>
            <AdaptableGrid id="main-projects" clickable elements={projects} elementsPerRow={5} />
            <Separator highMargin />
            <WorkContainer />
            <EducationContainer />
            <Separator highMargin />
            <article>
                <HeadingOne id="contact" isAnchorLink>Contact</HeadingOne>
                <Paragraph>If you want to reach me, you can use the links above or send me an email at <a className="underline" href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a>.</Paragraph>
            </article>
            <Separator highMargin />
            <article>
                <HeadingOne id="skills" isAnchorLink>Skills & Technologies</HeadingOne>
                <Paragraph>Here&apos;s my skills ...</Paragraph>
            </article>
            <SkillsContainer />
            <Separator highMargin />
            <article>
                <HeadingOne id="hobbies" isAnchorLink>Hobbies</HeadingOne>
            </article>
            <AdaptableGrid id="hobbies-grid" elementsPerRow={5} elements={hobbies} />
            <Separator className="!mb-0" />
            <VerticalBorderSection 
                text="Thank you for visiting !" 
                icon={<FaHeart className="text-red-400" />} 
            />      
        </MainPart>
    )
}

export default Home
