import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import Logo, { LogoColors } from '@/components/logo';

import worldMasterImg from '~/img/home/projects/worldmaster.png';
import snakeAiImg from '~/img/home/projects/snake-ai.png';
import sunsysImg from '~/img/home/projects/sunsys.png';

import { baseImageProps } from './base';

const projects = [
    {
        name: 'Bundlr',
        color: "rgb(144 221 239)",
        link: "https://bundlr.fr",
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        description: "New project coming soon!"
    },
    {
        name: 'Adobe Portfolio v3',
        color: "#efde90",
        link: "https://rayanemerlin.com",
        icon: <Logo color={LogoColors.white} asImage {...baseImageProps} />,
        description: "The very website you are on right now! My personal portfolio built with Next.js and Tailwind CSS, showcasing my projects and skills.<br/>Remade with a focus on navigation compared to the V2 (React CRA)."
    },
    {
        name: "WorldMaster",
        color: "#ffae9e",
        link: "https://worldmaster.vercel.app",
        icon: <Image src={worldMasterImg} {...baseImageProps} alt='WorldMaster' />
    },
    {
        name: "SunSys",
        color: "#ebac00",
        link: "https://sunsys.vercel.app",
        icon: <Image src={sunsysImg} {...baseImageProps} alt='SunSys' />
    },
    {
        name: "Snake AI",
        color: "#00cc99",
        link: null,
        icon: <Image src={snakeAiImg} {...baseImageProps} alt='Snake AI' />
    }
] as AdaptableGridElementData[];

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;