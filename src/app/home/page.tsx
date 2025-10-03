import { cn } from "@/lib/utils";

import { HeadingOne } from "@/components/page-flow";
import ContactLinks, { IconSize } from "@/components/contact-links";

const Page = () => {
    return (
        <main className={cn(
            "justify-self-center to-animate fade anim-delay-200 anim-duration-300 my-10 rounded-xl h-fit w-[70vw]",
            "bg-[rgb(255,255,255,0.2)] dark:bg-[rgb(0,0,0,0.2)] backdrop-blur-md",
            "box-border p-20"
        )}>
            <article>
                <HeadingOne>Rayane Merlin</HeadingOne>
                <ContactLinks size={IconSize.sm} tooltip={false}  className="mt-4" />
            </article>
            <article>
                <HeadingOne>About me</HeadingOne>
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

export default Page
