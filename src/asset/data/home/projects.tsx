import Image from 'next/image';

import type DeepReadonly from '@/util/type/deep-readonly';
import type { AdaptiveGridElementProjectData } from '@/components/other/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

/* Project logos */
// import bundlrImg from '~/img/home/projects/bundlr.png';
import Logo, { LogoColors } from '@/components/logo';
import worldMasterImg from '~/img/home/projects/worldmaster.png';
import { HiFire as SDMISIcon } from "react-icons/hi";
import snakeAiImg from '~/img/home/projects/snake-ai.png';
import sunsysImg from '~/img/home/projects/sunsys.png';
import { GeneralTechnologiesName } from './general-technologies-list';

const projects: DeepReadonly<AdaptiveGridElementProjectData[]> = [
    {
        content: {
            name: 'SDMIS',
            color: "rgb(144,221,239)",
            icon: <SDMISIcon {...baseImageProps} />,
            link: "https://github.com/rayaaaneee/SDMIS",
        },
        githubLink: undefined,
        technologies: [
            { name: GeneralTechnologiesName.JAVA, type: "language" },
            { name: GeneralTechnologiesName.SPRINGBOOT, type: "framework" },
            { name: GeneralTechnologiesName.KOTLIN, type: "language" },
            { name: GeneralTechnologiesName.DOCKER, type: "tool" },
            { name: GeneralTechnologiesName.CPP, type: "language" },
            // { name: GeneralTechnologiesName.GRAFANA, type: "tool" }
            // { name: GeneralTechnologiesName.KEYCLOAK, type: "tool" }
            { name: GeneralTechnologiesName.TYPESCRIPT, type: "language" }, 
            { name: GeneralTechnologiesName.REACT, type: "library" }, 
            { name: GeneralTechnologiesName.DOCKER, type: "tool" }, 
            { name: GeneralTechnologiesName.POSTGRESQL, type: "database" },
            { name: GeneralTechnologiesName.MONGODB, type: "database" }
        ],
        year: 2026,
        description: {
            en : `SDMIS is a comprehensive system for managing emergency response resources for departmental fire and rescue services.<br/>
            \tThe application enables real-time management of vehicles, firefighters, fire stations, and emergency interventions.<br/>
            \tBuilt with a Java Spring Boot backend and a React TypeScript frontend, it provides a user-friendly interface for efficient resource allocation and incident management.<br/>`,
            fr : `SDMIS est un système complet de gestion des ressources de réponse aux urgences pour les services départementaux d'incendie et de secours.<br/>
            \tL'application permet la gestion en temps réel des véhicules, des pompiers, des casernes et des interventions d'urgence.<br/>
            \tConstruite avec un backend Java Spring Boot et un frontend React TypeScript, elle offre une interface conviviale pour une allocation efficace des ressources et une gestion des incidents.<br/>`,
            es : `SDMIS es un sistema integral para gestionar los recursos de respuesta a emergencias para los servicios departamentales de bomberos y rescate.<br/>
            \tLa aplicación permite la gestión en tiempo real de vehículos, bomberos, estaciones de bomberos e intervenciones de emergencia.<br/>
            \tConstruida con un backend Java Spring Boot y un frontend React TypeScript, proporciona una interfaz fácil de usar para una asignación eficiente de recursos y gestión de incidentes.<br/>`
        }
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
        description: {
            en : `My personal portfolio built with <b>Next.js</b>, <b>Tailwind CSS</b> and <b>TypeScript</b>, showcasing my projects and skills.<br/>
                Remade with a stronger focus on <b>seamless navigation</b> compared to the V2 (built with React CRA).<br/>
                \tFewer pages, better information grouping, and a unified theme.`,
            fr : `Mon portfolio personnel construit avec <b>Next.js</b>, <b>Tailwind CSS</b> et <b>TypeScript</b>, présentant mes projets et compétences.<br/>
                Refaite avec un focus plus fort sur une <b>navigation fluide</b> comparé à la V2 (construite avec React CRA).<br/>
                \tMoins de pages, meilleure organisation de l'information, et thème unifié.`,
            es : `Mi portafolio personal construido con <b>Next.js</b>, <b>Tailwind CSS</b> y <b>TypeScript</b>, mostrando mis proyectos y habilidades.<br/>
                Rehecho con un enfoque más fuerte en una <b>navegación fluida</b> comparado con la V2 (construida con React CRA).<br/>
                \tMenos páginas, mejor organización de la información, y tema unificado.`
        }
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
        description: {
            en : `A web application to learn <b>world flags</b>, <b>capitals</b>, <b>maps</b> and get your <b>stats</b> and <b>scores</b>!<br/>
            Built with <b>Next.js</b> and <b>Tailwind CSS</b>, featuring user authentication with <b>OAuth</b>.<br/>
            Data is stored in a <b>SQLite</b> database using <b>Prisma ORM</b>.`,
            fr : `Une application web pour apprendre les <b>drapeaux</b>, les <b>capitales</b>, les <b>cartes</b> du monde et obtenir vos <b>statistiques</b> et <b>scores</b>!<br/>
            Construite avec <b>Next.js</b> et <b>Tailwind CSS</b>, avec une authentification utilisateur via <b>OAuth</b>.<br/>
            Les données sont stockées dans une base de données <b>SQLite</b> utilisant <b>Prisma ORM</b>.`,
            es : `Una aplicación web para aprender las <b>banderas</b>, las <b>capitales</b>, los <b>mapas</b> del mundo y obtener tus <b>estadísticas</b> y <b>puntuaciones</b>!<br/>
            Construida con <b>Next.js</b> y <b>Tailwind CSS</b>, con autenticación de usuario a través de <b>OAuth</b>.<br/>
            Los datos se almacenan en una base de datos <b>SQLite</b> utilizando <b>Prisma ORM</b>.`
        },
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
        description: {
            en : `A <b>3D solar system</b> proportional <b>simulation model</b> with real-time planetary orbits and rotations.<br/>
                Built with <b>Vite</b> and <b>Three.js</b> for smooth 3D rendering and animations.<br/>
                Explore the solar system and learn about each planet's characteristics.`,
            fr : `Un <b>modèle de simulation</b> du système solaire en 3D avec des orbites et des rotations planétaires en temps réel.<br/>
                Construit avec <b>Vite</b> et <b>Three.js</b> pour un rendu 3D fluide et des animations.<br/>
                Explorez le système solaire et apprenez les caractéristiques de chaque planète.`,
            es : `Un <b>modelo de simulación</b> del sistema solar en 3D con órbitas y rotaciones planetarias en tiempo real.<br/>
                Construido con <b>Vite</b> y <b>Three.js</b> para un renderizado 3D fluido y animaciones.<br/>
                Explora el sistema solar y aprende sobre las características de cada planeta.`
        },
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
        description: {
            en : `An <b>AI</b> that learns to play the classic <b>Snake game</b> using <b>deep learning</b> techniques.<br/>
                Built with <b>Python</b> and <b>PyGame</b> for the game environment, and <b>PyTorch</b> for the AI model.<br/>
                Three different modes available: <b>human</b>, <b>AI-train</b> and <b>AI-controlled</b>.`,
            fr : `Une <b>IA</b> qui apprend à jouer au classique <b>jeu Snake</b> en utilisant des techniques de <b>deep learning</b>.<br/>
                Construite avec <b>Python</b> et <b>PyGame</b> pour l'environnement de jeu, et <b>PyTorch</b> pour le modèle d'IA.<br/>
                Trois modes différents disponibles : <b>humain</b>, <b>IA-entrainement</b> et <b>IA-contrôlée</b>.`,
            es : `Una <b>IA</b> que aprende a jugar al clásico <b>juego de la serpiente</b> utilizando técnicas de <b>aprendizaje profundo</b>.<br/>
                Construida con <b>Python</b> y <b>PyGame</b> para el entorno del juego, y <b>PyTorch</b> para el modelo de IA.<br/>
                Tres modos diferentes disponibles: <b>humano</b>, <b>IA-entrenamiento</b> y <b>IA-controlada</b>.`
        },
    }
] as const;

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;