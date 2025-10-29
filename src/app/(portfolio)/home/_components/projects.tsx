"use client";

import useLanguage from '@/utils/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";

const Projects = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingOne id="projects" isAnchorLink>{ language.home.projects.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.projects.description }</Paragraph>
        </>
    );
}

export default Projects;
