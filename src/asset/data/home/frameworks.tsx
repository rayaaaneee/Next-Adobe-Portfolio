import Image from 'next/image';

import type DeepReadonly from '@/util/type/deep-readonly';

import type { AdaptiveGridElementData } from '@/components/other/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

import { assertFoundTech, GeneralTechnologiesName } from './general-technologies-list';

import nextJsImg from '~/img/home/frameworks/nextjs.png';
import springBootImg from "~/img/home/frameworks/spring-boot.png";
import symfonyImg from "~/img/home/frameworks/symfony.png";

const frameworks: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: assertFoundTech(
            GeneralTechnologiesName.NEXTJS,
            "framework"
        ),
        customIcon: <Image {...baseImageProps} src={nextJsImg.src} alt={GeneralTechnologiesName.NEXTJS} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.NUXTJS,
            "framework"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.TAILWINDCSS,
            "framework"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.ELECTRON,
            "framework"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.ANGULAR,
            "framework"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.SPRINGBOOT,
            "framework"
        ),
        customIcon: <Image {...baseImageProps} src={springBootImg} alt={GeneralTechnologiesName.SPRINGBOOT} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.SYMFONY,
            "framework"
        ),
        customIcon: <Image {...baseImageProps} src={symfonyImg} alt={GeneralTechnologiesName.SYMFONY} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.DOTNET,
            "framework"
        ),
    }
] as const;

export type Frameworks = DeepReadonly<typeof frameworks>;

export default frameworks as Frameworks;