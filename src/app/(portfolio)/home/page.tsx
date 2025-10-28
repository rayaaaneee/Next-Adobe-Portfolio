import Image from "next/image";
import { type Metadata } from "next";

import cn from "@/utils/function/cn";

import { FaHeart, FaBriefcase } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

import photo from "~/img/home/photo.jpg";

import { 
    HeadingOne, 
    HeadingThree,
    IconPosition, 
    Paragraph,
} from "@/components/page-flow";
import EducationContainer from "@/app/(portfolio)/home/_components/education-container";
import WorkContainer from "@/app/(portfolio)/home/_components/work-container";
import SkillsContainer from "@/app/(portfolio)/home/_components/skills-container";
import AdaptiveGrid from "@/components/others/adaptive-grid";
import Separator from "@/components/others/separator";

import projects from "@/asset/data/home/projects";
import hobbies from "@/asset/data/home/hobbies";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";

import { ChildrenType } from "@/utils/interface/children";
import MainPart from "@/components/others/main-part";
import HeaderText from "./_components/header-text";
import HeaderLinks from "./_components/header-links";
import AboutMe from "./_components/about-me";
import Projects from "./_components/projects";

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
                        <HeaderText/>
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
                    <HeaderLinks/>
                </section>
            </article>
            <Separator className="!mt-4" highMargin/>
            <article>
                <AboutMe/>
            </article>
            <Separator highMargin />
            <article>
                <Projects/>
            </article>
            <AdaptiveGrid id="main-projects" clickable elements={projects} elementsPerRow={5} />
            <Separator highMargin />
            <article>
                <WorkContainer />
            </article>
            <Separator highMargin />
            <article>
                <EducationContainer />
            </article>
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
            <AdaptiveGrid id="hobbies-grid" elementsPerRow={5} elements={hobbies} />
            <Separator className="!mb-0" />
            <VerticalBorderSection 
                text="Thank you for visiting !" 
                icon={<FaHeart className="text-red-400" />} 
            />      
        </MainPart>
    )
}

export default Home
