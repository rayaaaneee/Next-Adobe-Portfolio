"use client";

import useLanguage from "@/util/hook/use-language";

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";

const SkillsHeaderPart = () => {

    const { language } = useLanguage();
    
    return (
        <>
            <HeadingOne id="skills" isAnchorLink>{ language.home.skills.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.skills.description }</Paragraph>
        </>
    );
}

export default SkillsHeaderPart;
