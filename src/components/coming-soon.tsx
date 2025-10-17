import { cn } from "@/lib/utils";

import ClassNameInterface from "@/utils/interface/classname";

import { HeadingOne, Paragraph } from "./page-flow";

import GetStarted from "./index/get-started";

interface ComingSoonProps extends ClassNameInterface {
    title: string;
}

const ComingSoon = ({ title, className }: ComingSoonProps) => {
    return (
        <main className={cn("w-full h-full flex flex-col justify-center items-center gap-3", className)}>
            <HeadingOne containerClassName="!m-0">{title}</HeadingOne>
            <Paragraph className="dark:text-white">Coming soon...</Paragraph>
            <GetStarted className="mt-4" colored />
        </main>
    )
}

export default ComingSoon
