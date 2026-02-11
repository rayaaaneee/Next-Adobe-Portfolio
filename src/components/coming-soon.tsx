"use client";

import cn from "@/util/function/cn";

import ClassNameInterface from "@/util/interface/classname";

import { HeadingOne, Paragraph } from "./page-flow/page-flow";

import GetStarted from "./index/get-started";

import { languageKey } from "@/util/type/language-key";

import useLanguage from "@/util/hook/use-language";

export interface ComingSoonProps extends ClassNameInterface {
    title?: languageKey;
    text?: languageKey;
    button?: boolean;
    link?: string;
    buttonText?: languageKey;
}

const ComingSoon = ({ title, text, className, button = true, link = "/home", buttonText }: ComingSoonProps) => {

    const { t } = useLanguage();

    if (!title) title = "coming_soon.title";
    if (!text) text = "coming_soon.text";
    if (!buttonText) buttonText = "coming_soon.goback";

    return (
        <main className={cn("w-full h-full flex flex-col justify-center items-center gap-3", className)}>
            <HeadingOne containerClassName="!m-0">{t(title)}</HeadingOne>
            {text && <Paragraph className="dark:text-white">{t(text)}</Paragraph>}
            { button && (<GetStarted className="mt-4" colored link={link} buttonText={buttonText} />)}
        </main>
    );
};

export default ComingSoon;
