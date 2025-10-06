import { cn } from "@/lib/utils";

import { FaLocationDot } from "react-icons/fa6";

import { HeadingOne, HeadingTwo, Paragraph } from "@/components/page-flow";

import ContactLinks from "@/components/contact-links";

import { IconSize } from "@/components/contact-icon";
import { TooltipSize } from "@/components/tooltip";

const Home = () => {
    return (
        <main className={cn(
            "justify-self-center to-animate fade anim-delay-200 anim-duration-300 rounded-xl h-fit",
            "bg-[rgb(255,255,255,0.2)] dark:bg-[rgb(0,0,0,0.2)] backdrop-blur-md",
            "box-border ",
            "w-[93vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-[3.5vw] md:my-[5vw] lg:my-10",
            "p-5 sm:p-7 md:p-10 xl:p-20"
        )}>
            <article>
                <HeadingOne>Rayane Merlin</HeadingOne>
                <Paragraph>Full-Stack Developer & Cybersecurity Enthusiast</Paragraph>
                <FaLocationDot/>
                <HeadingTwo>Links</HeadingTwo>
                <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                    "w-fit mt-4 gap-7 justify-between",
                )} />
            </article>
            <article>
                <HeadingOne>About me</HeadingOne>
                <Paragraph>Hello ! I&apos;m Rayane ...</Paragraph>
            </article>
            <article>
                <HeadingOne>Experience</HeadingOne>
            </article>
            <article>
                <HeadingOne>Projects</HeadingOne>
            </article>
            <article>
                <HeadingOne>Contact</HeadingOne>
            </article>
            <article>
                <HeadingOne>Skills & Languages</HeadingOne>
            </article>
            <article>
                <HeadingOne>Education</HeadingOne>
            </article>
            <article>
                <HeadingOne>Hobbies</HeadingOne>
            </article>
            {/* Made by Rayane Merlin with Next.js */}
        </main>
    )
}

export default Home
