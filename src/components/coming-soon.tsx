import cn from "@/util/function/cn";

import ClassNameInterface from "@/util/interface/classname";

import { HeadingOne, Paragraph } from "./page-flow";

import GetStarted from "./index/get-started";

interface ComingSoonProps extends ClassNameInterface {
    title: string;
    text?: string;
    button?: boolean;
}

const ComingSoon = ({ title, text = "Coming soon...", className, button = true }: ComingSoonProps) => (
    <main className={cn("w-full h-full flex flex-col justify-center items-center gap-3", className)}>
        <HeadingOne containerClassName="!m-0">{title}</HeadingOne>
        {text && <Paragraph className="dark:text-white">{text}</Paragraph>}
        { button && (<GetStarted className="mt-4" colored />)}
    </main>
);

export default ComingSoon;
