import Image from 'next/image';

import { assertFoundTech, GeneralTechnologiesName } from './general-technologies-list';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseImageProps } from './adaptable-grid-base';

import sassImg from "~/img/home/libraries/sass.png";

const libraries: DeepReadonly<AdaptableGridElementData[]> = [
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