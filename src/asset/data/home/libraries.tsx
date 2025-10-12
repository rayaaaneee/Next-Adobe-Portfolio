import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseIconProps, baseImageProps } from './base';

import { FaReact } from 'react-icons/fa6';
import { RiVuejsLine } from 'react-icons/ri';
import sassImg from "~/img/home/libraries/sass.png";
import { SiThreedotjs } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiNumpy } from "react-icons/si";

const libraries: DeepReadonly<AdaptableGridElementData[]> = [
    {
        name: "React",
        color: "#61DAFB",
        icon: <FaReact {...baseIconProps } />,
        link: "https://reactjs.org/"
    },
    {
        name: "Vue.js",
        color: "#4FC08D",
        icon: <RiVuejsLine {...baseIconProps} />,
        link: "https://vuejs.org/",
    },
    {
        name: "SCSS (Sass)",
        color: "rgb(191.25, 63.75, 127.5)",
        icon: <Image {...baseImageProps} src={sassImg.src} alt={`SCSS (Sass)`} />,
        link: "https://sass-lang.com/"
    },
    {
        name: "Three.js",
        color: "#283037",
        icon: <SiThreedotjs {...baseIconProps} />,
        link: "https://threejs.org/"
    },
    {
        name: "JQuery",
        color: "#0769AD",
        icon: <DiJqueryLogo {...baseIconProps} />,
        link: "https://jquery.com/"
    },
    {
        name: "Prisma",
        color: "#0C344B",
        icon: <SiPrisma {...baseIconProps} />,
        link: "https://www.prisma.io/"
    },
    {
        name: "NumPy",
        color: "#013243",
        icon: <SiNumpy {...baseIconProps} />,
        link: "https://numpy.org/"
    }
] as const;

export type Libraries = DeepReadonly<typeof libraries>;

export default libraries as Libraries;