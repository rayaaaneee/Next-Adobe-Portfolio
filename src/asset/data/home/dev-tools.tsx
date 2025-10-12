import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseIconProps, baseImageProps } from './base';

import { FaGitAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { DiIntellij } from "react-icons/di";
import { IoLogoDocker } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import postmanImg from "~/img/home/dev-tools/postman.png";
import { FaFigma } from "react-icons/fa";
import { PiLinuxLogo } from "react-icons/pi";
import bashImg from "~/img/home/dev-tools/bash.png";
import windows from "~/img/home/dev-tools/windows.png";

const devTools: DeepReadonly<AdaptableGridElementData[]> = [
    {
        name: "Git",
        color: "#F05032",
        icon: <FaGitAlt {...baseIconProps} />,
        link: "https://git-scm.com/"
    },
    {
        name: "GitHub",
        color: "#181717",
        icon: <FiGithub {...baseIconProps} />,
        link: "https://github.com/"
    },
    {
        name: "Github Copilot",
        color: "#6CC644",
        icon: <TbBrandGithubCopilot {...baseIconProps} />,
        link: "https://github.com/features/copilot"
    },
    {
        name: "VS Code",
        color: "#007ACC",
        icon: <VscVscode {...baseIconProps} />,
        link: "https://code.visualstudio.com/"
    },
    {
        name: "Visual Studio",
        color: "#5C2D91",
        icon: <DiVisualstudio {...baseIconProps} />,
        link: "https://visualstudio.microsoft.com/"
    },
    {
        name: "IntelliJ IDEA",
        color: "#000000",
        icon: <DiIntellij {...baseIconProps} />,
        link: "https://www.jetbrains.com/idea/"
    },
    {
        name: "Docker",
        color: "#2496ED",
        icon: <IoLogoDocker {...baseIconProps} />,
        link: "https://www.docker.com/"
    },
    {
        name: "AWS",
        color: "#FF9900",
        icon: <FaAws {...baseIconProps} />,
        link: "https://aws.amazon.com/"
    },
    {
        name: "Postman",
        color: "#FF6C37",
        icon: <Image {...baseImageProps} src={postmanImg.src} alt={`Postman`} />,
        link: "https://www.postman.com/"
    },
    {
        name: "Figma",
        color: "#F24E1E",
        icon: <FaFigma {...baseIconProps} />,
        link: "https://www.figma.com/"
    },
    {
        name: "Linux",
        color: "#FCC624",
        icon: <PiLinuxLogo {...baseIconProps} />,
        link: "https://www.linux.org/"
    },
    {
        name: "Bash",
        color: "#283037",
        icon: <Image {...baseImageProps} src={bashImg.src} alt={`Bash`} />,
        link: "https://www.gnu.org/software/bash/"
    },
    {
        name: "Windows",
        color: "#0078D6",
        icon: <Image {...baseImageProps} src={windows.src} alt={`Windows`} />,
        link: "https://www.microsoft.com/windows"
    }
] as const;

export type DevTools = DeepReadonly<typeof devTools>;

export default devTools as DevTools;