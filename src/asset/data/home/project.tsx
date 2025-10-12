import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';
import type { ChildrenType } from '@/utils/interface/children';
import type { AdaptableGridElementProjectData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseImageProps } from './base';

/* Project logos */
// bundlr logo
import Logo, { LogoColors } from '@/components/logo';
import worldMasterImg from '~/img/home/projects/worldmaster.png';
import snakeAiImg from '~/img/home/projects/snake-ai.png';
import sunsysImg from '~/img/home/projects/sunsys.png';

/* Project techs icons */
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNuxt } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPrisma } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { SiPytorch } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiZod } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { ImSvg } from "react-icons/im";

export type ProjectTechnologies = { [key: string]: ChildrenType; }

const projectTechnologiesBaseProps = {
    className: '[&_*]:!text-slate-600 w-8 h-8 p-2',
} as const;

export const projectTechnologiesList: DeepReadonly<ProjectTechnologies> = {
    "Next.js": <SiNextdotjs {...projectTechnologiesBaseProps} />,
    "React": <RiReactjsFill {...projectTechnologiesBaseProps} />,
    "Nuxt.js": <TbBrandNuxt {...projectTechnologiesBaseProps} />,
    "Vue.js": <IoLogoVue {...projectTechnologiesBaseProps} />,
    "Tailwind CSS": <RiTailwindCssFill {...projectTechnologiesBaseProps} />,
    "CSS": <SiCss3 {...projectTechnologiesBaseProps} />,
    "SCSS": <SiSass {...projectTechnologiesBaseProps} />,
    "TypeScript": <SiTypescript {...projectTechnologiesBaseProps} />,
    "JavaScript": <IoLogoJavascript {...projectTechnologiesBaseProps} />,
    "Prisma": <SiPrisma {...projectTechnologiesBaseProps} />,
    "Vite": <SiVitest {...projectTechnologiesBaseProps} />,
    "Three.js": <TbBrandThreejs {...projectTechnologiesBaseProps} />,
    "Python": <FaPython {...projectTechnologiesBaseProps} />,
    "PyGame": <FaGamepad {...projectTechnologiesBaseProps} />,
    "PyTorch": <SiPytorch {...projectTechnologiesBaseProps} />,
    "Electron": <IoLogoElectron {...projectTechnologiesBaseProps} />,
    "Zod": <SiZod {...projectTechnologiesBaseProps} />,
    "SQLite": <SiSqlite {...projectTechnologiesBaseProps} />,
    "MongoDB": <TbBrandMongodb {...projectTechnologiesBaseProps} />,
    "Firebase": <SiFirebase {...projectTechnologiesBaseProps} />,
    "OAuth": <TbBrandOauth {...projectTechnologiesBaseProps} />,
    "SVGR": <ImSvg {...projectTechnologiesBaseProps} />,
} as const;

const projects: DeepReadonly<AdaptableGridElementProjectData[]> = [
    {
        name: 'Bundlr',
        color: "rgb(144 221 239)",
        link: undefined,
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        githubLink: undefined,
        technologies: ["Electron", "Nuxt.js", "Vue.js", "Tailwind CSS", "TypeScript", "Zod", "Prisma", "OAuth","Firebase"],
        year: 2025,
        description: "New project coming soon!"
    },
    {
        name: 'Adobe Portfolio v3',
        color: "#efde90",
        link: "https://rayanemerlin.com",
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        githubLink: "https://github.com/rayaaaneee/Next-Adobe-Portfolio",
        technologies: ["Next.js", "React","Tailwind CSS", "TypeScript", "SCSS"],
        year: 2025,
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
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "SQLite", "SVGR", "OAuth"],
        year: 2024,
        description: `A web application that allows users to create, share, and explore custom maps for tabletop RPGs.<br/>`,
    },
    {
        name: "SunSys",
        color: "#ebac00",
        link: "https://sunsys.vercel.app",
        icon: <Image src={sunsysImg} {...baseImageProps} alt='SunSys' />,
        technologies: ["Vite", "CSS", "JavaScript", "Three.js"],
        githubLink: "https://github.com/rayaaaneee/SunSys",
        year: 2023, 
        description: `A website for a solar panel installation company, showcasing their services and projects.<br/>`,
    },
    {
        name: "Snake AI",
        color: "#00cc99",
        link: undefined,
        icon: <Image src={snakeAiImg} {...baseImageProps} alt='Snake AI' />,
        githubLink: "https://github.com/rayaaaneee/Snake-AI",
        technologies: ["Python", "PyGame", "PyTorch"],
        year: 2023,
        description: `An AI that learns to play the classic Snake game using reinforcement learning techniques.<br/>`,
    }
] as const;

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;