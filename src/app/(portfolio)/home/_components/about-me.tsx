"use client";

import { useLanguage } from '@/utils/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from '@/components/page-flow';

const AboutMe = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingOne id="about" isAnchorLink>{ language.home.about.title }</HeadingOne>
            <Paragraph indent alignment={ParagraphAlignment.justify}>
                { language.home.about.texts.map((text, index) => (
                    <span key={index} dangerouslySetInnerHTML={{ __html: text }}></span>
                )) }
            </Paragraph>
        </>
    )
}

export default AboutMe;
