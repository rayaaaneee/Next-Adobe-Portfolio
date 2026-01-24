"use client";

import useLanguage from '@/util/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";

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
