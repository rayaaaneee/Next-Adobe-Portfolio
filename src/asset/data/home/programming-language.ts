import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/home/adaptable-grid';

import typescriptImg from "~/img/home/programmation-languages/typescript.png";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import sassImg from "~/img/home/programmation-languages/sass.png";
import { FaJava } from "react-icons/fa";
import bashImg from "~/img/home/programmation-languages/bash.png";

import { TbSql } from "react-icons/tb";
import { RiPhpFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

const programmingLanguages = [
    {
        name: "TypeScript",
        color: "#3178C6",
        icon: typescriptImg,
        link: "https://www.typescriptlang.org/"
    },
    {
        name: "JavaScript",
        color: "#F7DF1E",
        icon: IoLogoJavascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "Python",
        color: "#3776AB",
        icon: FaPython,
        link: "https://www.python.org/"
    },
    {
        name: "HTML5",
        color: "#E34F26",
        icon: FaHtml5,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "SCSS (Sass)",
        color: "rgb(191.25, 63.75, 127.5)",
        icon: sassImg,
        link: "https://sass-lang.com/"
    },
    {
        name: "C",
        color: "#A8B9CC",
        //icon: "c",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    {
        name: "C++",
        color: "#00599C",
        //icon: "cpp",
        link: "https://isocpp.org/"
    },
    {
        name: "C#",
        color: "#239120",
        //icon: "csharp",
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        name: "Java",
        color: "#007396",
        icon: FaJava,
        link: "https://www.java.com/"
    },
    {
        name: "Bash",
        color: "#283037",
        icon: bashImg,
        link: "https://www.gnu.org/software/bash/"
    },
    {
        name: "SQL",
        color: "#4479A1",
        icon: TbSql,
        link: "https://en.wikipedia.org/wiki/SQL"
    },
    {
        name: "PHP",
        color: "#777BB4",
        icon: RiPhpFill,
        link: "https://www.php.net/"
    },
    {
        name: "Kotlin",
        color: "#ba1ce5",
        icon: TbBrandKotlin,
        link: "https://kotlinlang.org/"
    }
] as AdaptableGridElementData[];

export type Languages = DeepReadonly<typeof programmingLanguages>;

// export type LanguageName = Languages[number]['name'];

export default programmingLanguages;