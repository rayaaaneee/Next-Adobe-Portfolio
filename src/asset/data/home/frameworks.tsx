import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseIconProps, baseImageProps } from './base';

import nextJsImg from '~/img/home/frameworks/nextjs.png';
import { TbBrandNuxt } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAngular, SiElectron } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import springBootImg from "~/img/home/frameworks/spring-boot.png";
import symfonyImg from "~/img/home/frameworks/symfony.png";
import { SiDotnet } from "react-icons/si";

const frameworks = [
    {
        name: "Next.js",
        color: "#000000",
        icon: <Image {...baseImageProps} src={nextJsImg} alt="Next.js" />,
        link: "https://nextjs.org/",
    },
    {
        name: "Nuxt.js",
        color: "#00C58E",
        icon: <TbBrandNuxt {...baseIconProps} />,
        link: "https://nuxt.com/",
    },
    {
        name: "Tailwind CSS",
        color: "#06B6D4",
        icon:  <RiTailwindCssFill {...baseIconProps} />,
        link: "https://tailwindcss.com/",
    },
    {
        name: "Electron",
        color: "#47848F",
        icon: <SiElectron {...baseIconProps} />,
        link: "https://www.electronjs.org/"
    },
    {
        name: "Angular",
        color: "#DD0031",
        icon: <SiAngular {...baseIconProps} />,
        link: "https://angular.io/",
    },
    {
        name: "Express.js",
        color: "#000000",
        icon: <SiExpress {...baseIconProps} />,
        link: "https://expressjs.com/",
    },
    {
        name: "Spring Boot",
        color: "#6DB33F",
        icon: <Image {...baseImageProps} src={springBootImg} alt="Spring Boot" />,
        link: "https://spring.io/projects/spring-boot",
    },
    {
        name: "PHP Symfony",
        color: "#1a171b",
        icon: <Image {...baseImageProps} src={symfonyImg} alt="Symfony" />,
        link: "https://symfony.com/",
    },
    {
        name: "ASP.NET Core",
        color: "#512BD4",
        icon: <SiDotnet {...baseIconProps} />,
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    }
] as AdaptableGridElementData[];

export type Frameworks = DeepReadonly<typeof frameworks>;

export default frameworks as Frameworks;