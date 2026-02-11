"use client";

import useLanguage from "@/util/hook/use-language";

import { HeadingOne, Paragraph } from "@/components/page-flow/page-flow";

import { ParagraphAlignment } from "@/components/page-flow/types/paragraph-alignment";

const SkillsHeaderPart = () => {

    const { t } = useLanguage();
    
    return (
        <>
            <HeadingOne id="skills" isAnchorLink>{ t('home.skills.title') }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ t('home.skills.description') }</Paragraph>
        </>
    );
}

export default SkillsHeaderPart;
