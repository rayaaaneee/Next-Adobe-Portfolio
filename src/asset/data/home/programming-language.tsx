import Image from "next/image";

import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/others/adaptable-grid';

import { baseImageProps } from './adaptable-grid-base';

import typescriptImg from "~/img/home/programming-languages/typescript.png";
import cImg from "~/img/home/programming-languages/c.png";
import cppImg from "~/img/home/programming-languages/cpp.png";
import csharpImg from "~/img/home/programming-languages/csharp.png";
import htmlImg from "~/img/home/programming-languages/html.png";

import { assertFoundTech, GeneralTechnologiesName } from "./general-technologies-list";

const programmingLanguages: DeepReadonly<AdaptableGridElementData[]> = [
    {
        content: assertFoundTech(
            GeneralTechnologiesName.TYPESCRIPT,
            "language"
        ),
        customIcon: <Image {...baseImageProps} src={typescriptImg.src} alt={GeneralTechnologiesName.TYPESCRIPT} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.JAVASCRIPT,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.PYTHON,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.HTML,
            "language"
        ),
        customIcon: <Image {...baseImageProps} src={htmlImg.src} alt={GeneralTechnologiesName.HTML} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.CSS,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.C,
            "language"
        ),
        customIcon: <Image {...baseImageProps} src={cImg.src} alt={GeneralTechnologiesName.C} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.CPP,
            "language"
        ),
        customIcon: <Image {...baseImageProps} src={cppImg.src} alt={GeneralTechnologiesName.CPP} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.CSHARP,
            "language"
        ),
        customIcon: <Image {...baseImageProps} src={csharpImg.src} alt={GeneralTechnologiesName.CSHARP} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.JAVA,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.KOTLIN,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.SQL,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.PHP,
            "language"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.MARKDOWN,
            "language"
        ),
    },

] as const;

export type ProgrammingLanguage = DeepReadonly<typeof programmingLanguages>;

export default programmingLanguages as ProgrammingLanguage;