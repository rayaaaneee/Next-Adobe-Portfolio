import Image from 'next/image';

import { assertFoundTech, GeneralTechnologiesName } from './general-technologies-list';

import type DeepReadonly from '@/util/type/deep-readonly';

import type { AdaptiveGridElementData } from '@/components/others/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

import sassImg from "~/img/home/libraries/sass.png";

const libraries: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: assertFoundTech(
            GeneralTechnologiesName.REACT,
            "library"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.VUEJS,
            "library"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.SCSS,
            "library"
        ),
        customIcon: <Image {...baseImageProps} src={sassImg.src} alt={GeneralTechnologiesName.SCSS} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.THREEJS,
            "library"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.JQUERY,
            "library"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.PRISMA,
            "library"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.NUMPY,
            "library"
        ),
    }
] as const;

export type Libraries = DeepReadonly<typeof libraries>;

export default libraries as Libraries;