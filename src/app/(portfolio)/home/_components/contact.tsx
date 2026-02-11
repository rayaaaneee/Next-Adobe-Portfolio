"use client";

import { HeadingOne, Paragraph } from "@/components/page-flow/page-flow";
import { ParagraphAlignment } from "@/components/page-flow/types/paragraph-alignment";
import assertDefined from "@/util/function/assert-defined";
import useLanguage from "@/util/hook/use-language";

const Contact = () => {

    const { t } = useLanguage();

    const email = assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL');

    return (
        <>
            <HeadingOne id="contact" isAnchorLink>{ t('home.contact.title') }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ t('home.contact.description') }<a className="underline" href={`mailto:${email}`}>{email}</a>.</Paragraph>
        </>
    );
}

export default Contact;
