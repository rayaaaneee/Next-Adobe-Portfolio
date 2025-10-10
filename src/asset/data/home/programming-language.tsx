import Image from "next/image";

import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseImageProps, baseIconProps } from './base';

import typescriptImg from "~/img/home/programmation-languages/typescript.png";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import htmlImg from "~/img/home/programmation-languages/html.png";
import { FaCss3 } from "react-icons/fa";
import cImg from "~/img/home/programmation-languages/c.png";
import cppImg from "~/img/home/programmation-languages/cpp.png";
import csharpImg from "~/img/home/programmation-languages/csharp.png";
import { FaJava } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { RiPhpFill } from "react-icons/ri";
import { VscMarkdown } from "react-icons/vsc";

const programmingLanguages = [
    {
        name: "TypeScript",
        color: "#3178C6",
        icon: <Image {...baseImageProps} src={typescriptImg.src} alt={`TypeScript`} />,
        link: "https://www.typescriptlang.org/"
    },
    {
        name: "JavaScript",
        color: "#F7DF1E",
        icon: <IoLogoJavascript {...baseIconProps} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "Python",
        color: "#3776AB",
        icon: <FaPython {...baseIconProps} />,
        link: "https://www.python.org/"
    },
    {
        name: "HTML5",
        color: "#E34F26",
        icon: <Image {...baseImageProps} src={htmlImg.src} alt={`HTML5`} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS3",
        color: "#1572B6",
        icon: <FaCss3 {...baseIconProps} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "C",
        color: "#A8B9CC",
        icon: <Image {...baseImageProps} src={cImg.src} alt={`C`} />,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    {
        name: "C++",
        color: "#00599C",
        icon: <Image {...baseImageProps} src={cppImg.src} alt={`C++`} />,
        link: "https://isocpp.org/"
    },
    {
        name: "C#",
        color: "#9b4f97",
        icon: <Image {...baseImageProps} src={csharpImg.src} alt={`C#`} />,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        name: "Java",
        color: "#007396",
        icon: <FaJava {...baseIconProps} />,
        link: "https://www.java.com/"
    },
    {
        name: "Kotlin",
        color: "#ba1ce5",
        icon: <TbBrandKotlin {...baseIconProps} />,
        link: "https://kotlinlang.org/"
    },
    {
        name: "Structured Query Language (SQL)",
        color: "#4479A1",
        icon: <TbSql {...baseIconProps} />,
        link: "https://en.wikipedia.org/wiki/SQL"
    },
    {
        name: "PHP",
        color: "#777BB4",
        icon: <RiPhpFill {...baseIconProps} />,
        link: "https://www.php.net/"
    },
    {
        name: "Markdown",
        color: "#000000",
        icon: <VscMarkdown {...baseIconProps} />,
        link: "https://www.markdownguide.org/"
    },

] as AdaptableGridElementData[];

export type ProgrammingLanguage = DeepReadonly<typeof programmingLanguages>;

export default programmingLanguages as ProgrammingLanguage;