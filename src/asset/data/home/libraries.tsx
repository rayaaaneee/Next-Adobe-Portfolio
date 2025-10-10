import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid';

import { baseIconProps, baseImageProps } from './base';

import { FaReact } from 'react-icons/fa6';
import { RiVuejsLine } from 'react-icons/ri';
import { SiThreedotjs } from "react-icons/si";
import sassImg from "~/img/home/libraries/sass.png";

const libraries = [
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
        name: "Entity Framework Core",
        color: "#512BD4",
        icon: null,
        link: "https://learn.microsoft.com/en-us/ef/core/"
    },
    {
        name: "JQuery",
        color: "#0769AD",
        icon: null,
        link: "https://jquery.com/"
    },
    {
        name: "NumPy",
        color: "#013243",
        icon: null,
        link: "https://numpy.org/"
    },
    {
        name: "Matplotlib",
        color: "#11557C",
        icon: null,
        link: "https://matplotlib.org/"
    }
] as AdaptableGridElementData[];

export type Libraries = DeepReadonly<typeof libraries>;

export default libraries as Libraries;