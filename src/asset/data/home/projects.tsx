import Image from 'next/image';

import type DeepReadonly from '@/util/type/deep-readonly';
import type { AdaptiveGridElementProjectData } from '@/components/other/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

/* Project logos */
// import bundlrImg from '~/img/home/projects/bundlr.png';
import Logo, { LogoColors } from '@/components/logo';
import worldMasterImg from '~/img/home/projects/worldmaster.png';
import snakeAiImg from '~/img/home/projects/snake-ai.png';
import sunsysImg from '~/img/home/projects/sunsys.png';
import { GeneralTechnologiesName } from './general-technologies-list';

const projects: DeepReadonly<AdaptiveGridElementProjectData[]> = [
    {
        content: {
            name: 'Bundlr',
            color: "rgb(144 221 239)",
            icon: <Logo color={LogoColors.black} asImage {...baseImageProps} />,
            link: undefined,
        },
        githubLink: undefined,
        technologies: [
            { name: GeneralTechnologiesName.ELECTRON, type: "framework" }, 
            { name: GeneralTechnologiesName.NUXTJS, type: "framework" }, 
            { name: GeneralTechnologiesName.VUEJS, type: "library" }, 
            { name: GeneralTechnologiesName.TAILWINDCSS, type: "framework" }, 
            { name: GeneralTechnologiesName.TYPESCRIPT, type: "language" }, 
            { name: GeneralTechnologiesName.ZOD, type: "library" }, 
            { name: GeneralTechnologiesName.PRISMA, type: "library" }, 
            { name: GeneralTechnologiesName.OAUTH, type: "tool" }, 
            { name: GeneralTechnologiesName.FIREBASE, type: "database" }
        ],
        year: 2025,
        description: "New project coming soon!"
    },
    {
        content: {
            name: 'Adobe Portfolio v3',
            color: "#efde90",
            icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
            link: "https://rayanemerlin.com",
        },
        githubLink: "https://github.com/rayaaaneee/Next-Adobe-Portfolio",
        technologies: [
            { name: GeneralTechnologiesName.NEXTJS, type: "framework" },
            { name: GeneralTechnologiesName.REACT, type: "library" },
            { name: GeneralTechnologiesName.TAILWINDCSS, type: "framework" },
            { name: GeneralTechnologiesName.TYPESCRIPT, type: "language" },
            { name: GeneralTechnologiesName.SCSS, type: "library" }
        ],
        year: 2025,
        description: `My personal portfolio built with <b>Next.js</b>, <b>Tailwind CSS</b> and <b>TypeScript</b>, showcasing my projects and skills.<br/>
            Remade with a stronger focus on <b>seamless navigation</b> compared to the V2 (built with React CRA).<br/>
            \tFewer pages, better information grouping, and a unified theme.`
    },
    {
        content: {
            name: "WorldMaster",
            color: "#ffae9e",
            icon: <Image src={worldMasterImg} {...baseImageProps} alt='WorldMaster' />,
            link: "https://worldmaster.vercel.app",
        },
        githubLink: "https://github.com/rayaaaneee/WorldMaster",
        technologies: [
            { name: GeneralTechnologiesName.NEXTJS, type: "framework" },
            { name: GeneralTechnologiesName.REACT, type: "library" },
            { name: GeneralTechnologiesName.SCSS, type: "library" },
            { name: GeneralTechnologiesName.TAILWINDCSS, type: "framework" },
            { name: GeneralTechnologiesName.SQLITE, type: "database" },
            { name: GeneralTechnologiesName.OAUTH, type: "tool" },
        ],
        year: 2024,
        description: `A web application to learn <b>world flags</b>, <b>capitals</b>, <b>maps</b> and get your <b>stats</b> and <b>scores</b>!<br/>
            Built with <b>Next.js</b> and <b>Tailwind CSS</b>, featuring user authentication with <b>OAuth</b>.<br/>
            Data is stored in a <b>SQLite</b> database using <b>Prisma ORM</b>.`,
    },
    {
        content: {
            name: "SunSys",
            color: "#ebac00",
            icon: <Image src={sunsysImg} {...baseImageProps} alt='SunSys' />,
            link: "https://sunsys.vercel.app",
        },
        technologies: [
            { name: GeneralTechnologiesName.VITE, type: "framework" },
            { name: GeneralTechnologiesName.CSS, type: "language" },
            { name: GeneralTechnologiesName.JAVASCRIPT, type: "language" },
            { name: GeneralTechnologiesName.THREEJS, type: "library" }
        ],
        githubLink: "https://github.com/rayaaaneee/SunSys",
        year: 2023, 
        description: `A <b>3D solar system</b> proportional <b>simulation model</b> with real-time planetary orbits and rotations.<br/>
            Built with <b>Vite</b> and <b>Three.js</b> for smooth 3D rendering and animations.<br/>
            Explore the solar system and learn about each planet's characteristics.`,
    },
    {
        content: {
            name: "Snake AI",
            color: "#00cc99",
            icon: <Image src={snakeAiImg} {...baseImageProps} alt='Snake AI' />,
            link: undefined,
        },
        githubLink: "https://github.com/rayaaaneee/Snake-AI",
        technologies: [
            { name: GeneralTechnologiesName.PYTHON, type: "language" },
            { name: GeneralTechnologiesName.PYGAME, type: "library" },
            { name: GeneralTechnologiesName.PYTORCH, type: "library" }
        ],
        year: 2023,
        description: `An <b>AI</b> that learns to play the classic <b>Snake game</b> using <b>deep learning</b> techniques.<br/>
            Built with <b>Python</b> and <b>PyGame</b> for the game environment, and <b>PyTorch</b> for the AI model.<br/>
            Three different modes available: <b>human</b>, <b>AI-train</b> and <b>AI-controlled</b>.`,
    }
] as const;

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;