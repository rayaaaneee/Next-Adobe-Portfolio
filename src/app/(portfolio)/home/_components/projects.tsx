"use client";

import { useLanguage } from '@/utils/hook/use-language';

import { HeadingOne, Paragraph } from "@/components/page-flow";

const Projects = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingOne id="projects" isAnchorLink>{ language.home.projects.title }</HeadingOne>
            <Paragraph>{ language.home.projects.description }</Paragraph>
        </>
    );
}

export default Projects;
