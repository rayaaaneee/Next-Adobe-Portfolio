"use client";

import useLanguage from '@/util/hook/use-language';

import { HeadingOne, Paragraph } from "@/components/page-flow/page-flow";

import { ParagraphAlignment } from '@/components/page-flow/types/paragraph-alignment';

const Projects = () => {

    const { t } = useLanguage();

    return (
        <>
            <HeadingOne id="projects" isAnchorLink>{ t('home.projects.title') }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ t('home.projects.description') }</Paragraph>
        </>
    );
}

export default Projects;
