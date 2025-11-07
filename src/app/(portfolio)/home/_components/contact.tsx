"use client";

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";
import assertDefined from "@/util/function/assert-defined";
import useLanguage from "@/util/hook/use-language";

const Contact = () => {

    const { language } = useLanguage();

    const email = assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL');

    return (
        <>
            <HeadingOne id="contact" isAnchorLink>{ language.home.contact.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.contact.description }<a className="underline" href={`mailto:${email}`}>{email}</a>.</Paragraph>
        </>
    );
}

export default Contact;
