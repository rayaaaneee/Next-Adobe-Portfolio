import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementProjectData } from '@/components/home/adaptable-grid/adaptable-grid';

import Logo, { LogoColors } from '@/components/logo';

import worldMasterImg from '~/img/home/projects/worldmaster.png';
import snakeAiImg from '~/img/home/projects/snake-ai.png';
import sunsysImg from '~/img/home/projects/sunsys.png';

import { baseImageProps } from './base';

const projects = [
    {
        name: 'Bundlr',
        color: "rgb(144 221 239)",
        link: undefined,
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        githubLink: undefined,
        technologies: ["Electron", "Nuxt.js", "Vue.js", "Tailwind CSS", "TypeScript", "Zod"],
        description: "New project coming soon!"
    },
    {
        name: 'Adobe Portfolio v3',
        color: "#efde90",
        link: "https://rayanemerlin.com",
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        githubLink: "https://github.com/rayaaaneee/Next-Adobe-Portfolio",
        technologies: ["Next.js", "React","Tailwind CSS", "TypeScript", "SCSS"],
        description: `My personal portfolio built with <b>Next.js</b>, <b>Tailwind CSS</b> and <b>TypeScript</b>, showcasing my projects and skills.<br/>
            Remade with a stronger focus on <b>seamless navigation</b> compared to the V2 (built with React CRA).<br/>
            \tFewer pages, better information grouping, and a unified theme.`
    },
    {
        name: "WorldMaster",
        color: "#ffae9e",
        link: "https://worldmaster.vercel.app",
        icon: <Image src={worldMasterImg} {...baseImageProps} alt='WorldMaster' />,
        githubLink: "https://github.com/rayaaaneee/WorldMaster",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
        description: `A web application that allows users to create, share, and explore custom maps for tabletop RPGs.<br/>`,
    },
    {
        name: "SunSys",
        color: "#ebac00",
        link: "https://sunsys.vercel.app",
        icon: <Image src={sunsysImg} {...baseImageProps} alt='SunSys' />,
        technologies: ["Vite", "CSS", "JavaScript", "Three.js"],
        githubLink: "https://github.com/rayaaaneee/SunSys",
        description: `A website for a solar panel installation company, showcasing their services and projects.<br/>`,
    },
    {
        name: "Snake AI",
        color: "#00cc99",
        link: undefined,
        icon: <Image src={snakeAiImg} {...baseImageProps} alt='Snake AI' />,
        githubLink: "https://github.com/rayaaaneee/Snake-AI",
        technologies: ["Python", "Pygame", "PyTorch"],
        description: `An AI that learns to play the classic Snake game using reinforcement learning techniques.<br/>`,
    }
] as AdaptableGridElementProjectData[];

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;