"use client";

import useLanguage from '@/util/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from '@/components/page-flow';

const AboutMe = () => {

    const { t, tArray } = useLanguage();

    return (
        <>
            <HeadingOne id="about" isAnchorLink>{ t('home.about.title') }</HeadingOne>
            <Paragraph indent alignment={ParagraphAlignment.justify}>
                { tArray('home.about.texts').map((text: string, index: number) => (
                    <span key={index} dangerouslySetInnerHTML={{ __html: text }}></span>
                )) }
            </Paragraph>
        </>
    )
}

export default AboutMe;
