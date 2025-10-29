"use client";

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";
import useLanguage from "@/utils/hook/use-language";

const Contact = () => {

    const { language } = useLanguage();

    if (!process.env.NEXT_PUBLIC_EMAIL) {
        throw new Error("Environment variable NEXT_PUBLIC_EMAIL must be defined in .env file");
    }

    return (
        <>
            <HeadingOne id="contact" isAnchorLink>{ language.home.contact.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.contact.description }<a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a>.</Paragraph>
        </>
    );
}

export default Contact;
