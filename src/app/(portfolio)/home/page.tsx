import Image from "next/image";
import { type Metadata } from "next";

import cn from "@/utils/function/cn";

import { FaBriefcase } from "react-icons/fa6";

import photo from "~/img/home/photo.jpg";

import EducationContainer from "@/app/(portfolio)/home/_components/education-container";
import WorkContainer from "@/app/(portfolio)/home/_components/work-container";
import SkillsContainer from "@/app/(portfolio)/home/_components/skills-container";
import AdaptiveGrid from "@/components/others/adaptive-grid";
import Separator from "@/components/others/separator";

import projects from "@/asset/data/home/projects";
import hobbies from "@/asset/data/home/hobbies";

import MainPart from "@/components/others/main-part";

import VerticalBorderSection from "./_components/vertical-border-section";
import HeaderText from "./_components/header-text";
import HeaderLinks from "./_components/header-links";
import AboutMe from "./_components/about-me";
import Projects from "./_components/projects";
import Contact from "./_components/contact";
import SkillsHeaderPart from "./_components/skills-header-part";
import Hobbies from "./_components/hobbies";
import BottomBorderSection from "./_components/bottom-border-section";

export const metadata: Metadata = {
    title: "Portfolio",
};

const Home = () => {

    return (
        <MainPart>
            <VerticalBorderSection 
                text="Portfolio" 
                icon={<FaBriefcase className="text-amber-400 dark:text-red-200"/>} 
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
                <Contact/>
            </article>
            <Separator highMargin />
            <article>
                <SkillsHeaderPart />
            </article>
            <SkillsContainer />
            <Separator highMargin />
            <article>
                <Hobbies/>
            </article>
            <AdaptiveGrid id="hobbies-grid" elementsPerRow={5} elements={hobbies} />
            <Separator className="!mb-0" />
            <BottomBorderSection />
        </MainPart>
    )
}

export default Home;
