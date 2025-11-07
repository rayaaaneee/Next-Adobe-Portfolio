import Image from 'next/image';

import type DeepReadonly from '@/util/type/deep-readonly';

import type { AdaptiveGridElementData } from '@/components/other/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

import { assertFoundTech, GeneralTechnologiesName } from './general-technologies-list';

import postmanImg from "~/img/home/tools/postman.png";
import bashImg from "~/img/home/tools/bash.png";
import windows from "~/img/home/tools/windows.png";

const tools: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: assertFoundTech(
            GeneralTechnologiesName.GIT,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.GITHUB,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.GITHUB_COPILOT,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.VSCODE,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.VISUAL_STUDIO,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.INTELLIJ,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.DOCKER,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.AWS,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.POSTMAN,
            "tool"
        ),
        customIcon: <Image {...baseImageProps} src={postmanImg.src} alt={GeneralTechnologiesName.POSTMAN} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.FIGMA,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.LINUX,
            "tool"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.BASH,
            "tool"
        ),
        customIcon: <Image {...baseImageProps} src={bashImg.src} alt={GeneralTechnologiesName.BASH} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.WINDOWS,
            "tool"
        ),
        customIcon: <Image {...baseImageProps} src={windows.src} alt={GeneralTechnologiesName.WINDOWS} />,
    },
] as const;

export type Tools = DeepReadonly<typeof tools>;

export default tools as Tools;