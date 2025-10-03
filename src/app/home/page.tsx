import { HeadingOne } from "@/components/page-flow"
import { cn } from "@/lib/utils"

const Page = () => {
    return (
        <div className={cn(
            "justify-self-center my-10 rounded-xl h-screen w-[70vw] bg-[rgb(255,255,255,0.2)] backdrop-blur-md",
            "box-border p-20"
        )}>
            <HeadingOne>Rayane Merlin</HeadingOne>
            <HeadingOne>About me</HeadingOne>
            <HeadingOne>Experience</HeadingOne>
            <HeadingOne>Projects</HeadingOne>
            <HeadingOne>Contact</HeadingOne>
            <HeadingOne>Skills & Languages</HeadingOne>
            <HeadingOne>Education</HeadingOne>
            <HeadingOne>Hobbies</HeadingOne>
            {/* Made by Rayane Merlin with Next.js */}
        </div>
    )
}

export default Page
