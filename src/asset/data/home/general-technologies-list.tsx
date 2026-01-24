import DeepReadonly from '@/util/type/deep-readonly';

/* Project techs icons */
import { SiAngular, SiDotnet, SiElectron, SiExpress, SiGnubash, SiJquery, SiNextdotjs, SiNumpy, SiPostman, SiSpring, SiSymfony } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandGithubCopilot, TbBrandNuxt } from "react-icons/tb";
import { IoLogoDocker, IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPrisma } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { TbBrandThreejs } from "react-icons/tb";
import { FaAws, FaFigma, FaPython } from "react-icons/fa";
import { SiC } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava } from 'react-icons/fa';
import { TbBrandKotlin } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { RiPhpFill } from "react-icons/ri";
import { VscMarkdown, VscVscode } from "react-icons/vsc";
import { DiIntellij, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { FaDatabase, FaGamepad, FaGitAlt } from "react-icons/fa6";
import { SiPytorch, SiPostgresql } from "react-icons/si";
import { PiLinuxLogo, PiWindowsLogoFill } from "react-icons/pi";
import { SiZod } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { ImSvg } from "react-icons/im";
import { GrMysql } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';
import { assertFound } from '@/util/function/assert-found';
import { TechItem } from '@/util/type/home/experience';

export const assertFoundTech = (name: string, category: TechCategory) => {
    return assertFound<TechItem>(generalTechnologies[category], (tech) => (tech.name === name), name);
}

export enum GeneralTechnologiesName {

    // Languages
    HTML = "HTML5",
    CSS = "CSS3",
    TYPESCRIPT = "TypeScript",
    JAVASCRIPT = "JavaScript",
    PYTHON = "Python",
    C = "C",
    CSHARP = "C#",
    CPP = "C++",
    JAVA = "Java",
    KOTLIN = "Kotlin",
    SQL = "Structured Query Language (SQL)",
    PHP = "PHP",
    MARKDOWN = "Markdown",

    // Frameworks
    NEXTJS = "Next.js",
    NUXTJS = "Nuxt.js",
    TAILWINDCSS = "Tailwind CSS",
    ELECTRON = "Electron",
    ANGULAR = "Angular",
    EXPRESS = "Express.js",
    SPRINGBOOT = "Spring Boot",
    SYMFONY = "Symfony",
    DOTNET = ".NET",
    VITE = "Vite",

    // Libraries
    REACT = "React",
    VUEJS = "Vue.js",
    SCSS = "SCSS (Sass)",
    THREEJS = "Three.js",
    JQUERY = "JQuery",
    PRISMA = "Prisma",
    NUMPY = "NumPy",
    PYGAME = "PyGame",
    PYTORCH = "PyTorch",
    ZOD = "Zod",
    SVGR = "SVGR",
    
    // Tools & Platforms
    GIT = "Git",
    GITHUB = "GitHub",
    GITLAB = "GitLab",
    BITBUCKET = "Bitbucket",
    GITHUB_COPILOT = "GitHub Copilot",
    VSCODE = "Visual Studio Code",
    VISUAL_STUDIO = "Visual Studio",
    INTELLIJ = "IntelliJ IDEA",
    DOCKER = "Docker",
    AWS = "AWS",
    POSTMAN = "Postman",
    FIGMA = "Figma",
    LINUX = "Linux",
    BASH = "Bash",
    WINDOWS = "Windows",
    OAUTH = "OAuth",
    MICROSOFT_ACCESS = "Microsoft Access",

    // Databases
    SQLITE = "SQLite",
    SQLSERVER = "SQL Server",
    POSTGRESQL = "PostgreSQL",
    MYSQL = "MySQL",
    MONGODB = "MongoDB",
    FIREBASE = "Firebase",
}

export type TechCategory = "language" | "framework" | "library" | "tool" | "database";

export type GeneralTechnologiesType = DeepReadonly<{
    [key in TechCategory]: TechItem[];
}>

const generalTechnologies: GeneralTechnologiesType = {
    language: [
        {
            name: GeneralTechnologiesName.HTML,
            icon: <TfiHtml5 />,
            color: "#E34F26",
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
            name: GeneralTechnologiesName.CSS,
            icon: <SiCss3 />,
            color: "#1572B6",
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
            name: GeneralTechnologiesName.TYPESCRIPT,
            icon: <SiTypescript />,
            color: "#3178C6",
            link: 'https://www.typescriptlang.org/',
        },
        {
            name: GeneralTechnologiesName.JAVASCRIPT,
            icon: <IoLogoJavascript />,
            color: "#F7DF1E",
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: GeneralTechnologiesName.PYTHON,
            icon: <FaPython />,
            color: "#3776AB",
            link: 'https://www.python.org/',
        },
        {
            name: GeneralTechnologiesName.C,
            icon: <SiC />,
            color: "#A8B9CC",
            link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        },
        {
            name: GeneralTechnologiesName.CPP,
            color: "#00599C",
            icon: <CgCPlusPlus />,
            link: 'https://isocpp.org/',
        },
        {
            name: GeneralTechnologiesName.CSHARP,
            color: "#9b4f97",
            icon: <TbBrandCSharp />,
            link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        },
        {
            name: GeneralTechnologiesName.JAVA,
            icon: <FaJava />,
            color: "#007396",
            link: 'https://www.java.com/',
        },
        {
            name: GeneralTechnologiesName.KOTLIN,
            icon: <TbBrandKotlin />,
            color: "#ba1ce5",
            link: 'https://kotlinlang.org/',
        },
        {
            name: GeneralTechnologiesName.SQL,
            icon: <TbSql />,
            color: "#4479A1",
            link: 'https://en.wikipedia.org/wiki/SQL',
        },
        {
            name: GeneralTechnologiesName.PHP,
            icon: <RiPhpFill />,
            color: "#777BB4",
            link: 'https://www.php.net/',
        },
        {
            name: GeneralTechnologiesName.MARKDOWN,
            icon: <VscMarkdown />,
            color: "#000000",
            link: 'https://www.markdownguide.org/',
        },
    ],
    framework: [
        {
            name: GeneralTechnologiesName.NEXTJS,
            icon: <SiNextdotjs />,
            color: "#000000",
            link: 'https://nextjs.org/',
        },
        {
            name: GeneralTechnologiesName.NUXTJS,
            icon: <TbBrandNuxt />,
            color: "#00C58E",
            link: 'https://nuxt.com/',
        },
        {
            name: GeneralTechnologiesName.TAILWINDCSS,
            icon: <RiTailwindCssFill />,
            color: "#06B6D4",
            link: 'https://tailwindcss.com/',
        },
        {
            name: GeneralTechnologiesName.ELECTRON,
            icon: <SiElectron />,
            color: "#47848F",
            link: 'https://www.electronjs.org/',
        },
        {
            name: GeneralTechnologiesName.ANGULAR,
            icon: <SiAngular />,
            color: "#DD0031",
            link: 'https://angular.io/',
        },
        {
            name: GeneralTechnologiesName.EXPRESS,
            icon: <SiExpress />,
            color: "#000000",
            link: 'https://expressjs.com/',
        },
        {
            name: GeneralTechnologiesName.SPRINGBOOT,
            icon: <SiSpring />,
            color: "#6DB33F",
            link: 'https://spring.io/projects/spring-boot',
        },
        {
            name: GeneralTechnologiesName.SYMFONY,
            icon: <SiSymfony />,
            color: "#1a171b",
            link: 'https://symfony.com/',
        },
        {
            name: GeneralTechnologiesName.DOTNET,
            icon: <SiDotnet />,
            color: "#512BD4",
            link: 'https://dotnet.microsoft.com/',
        },
        {
            name: GeneralTechnologiesName.VITE,
            icon: <SiVitest />,
            color: "#680c94",
            link: 'https://vitejs.dev/',
        }
    ],
    library: [
        {
            name: GeneralTechnologiesName.REACT,
            icon: <RiReactjsFill />,
            color: "#61DAFB",
            link: 'https://react.dev/',
        },
        {
            name: GeneralTechnologiesName.VUEJS,
            icon: <IoLogoVue />,
            color: "#4FC08D",
            link: 'https://vuejs.org/',
        },
        {
            name: GeneralTechnologiesName.SCSS,
            icon: <SiSass />,
            color: "rgb(191.25, 63.75, 127.5)",
            link: 'https://sass-lang.com/',
        },
        {
            name: GeneralTechnologiesName.THREEJS,
            icon: <TbBrandThreejs />,
            color: "#283037",
            link: 'https://threejs.org/',
        },
        {
            name: GeneralTechnologiesName.JQUERY,
            icon: <SiJquery />,
            color: "#0769AD",
            link: 'https://jquery.com/',
        },
        {
            name: GeneralTechnologiesName.PRISMA,
            icon: <SiPrisma />,
            color: "#0C344B",
            link: 'https://www.prisma.io/',
        },
        {
            name: GeneralTechnologiesName.SVGR,
            icon: <ImSvg />,
            color: "#FFB13B",
            link: 'https://react-svgr.com/',
        },
        {
            name: GeneralTechnologiesName.PYGAME,
            icon: <FaGamepad />,
            color: "#000000",
            link: 'https://www.pygame.org/news',
        },
        {
            name: GeneralTechnologiesName.NUMPY,
            icon: <SiNumpy />,
            color: "#013243",
            link: 'https://numpy.org/',
        },
        {
            name: GeneralTechnologiesName.PYTORCH,
            icon: <SiPytorch />,
            color: "#EE4C2C",
            link: 'https://pytorch.org/',
        },
        {
            name: GeneralTechnologiesName.ZOD,
            icon: <SiZod />,
            color: "#6F42C1",
            link: 'https://zod.dev/',
        },
    ],
    tool: [
        {
            name: GeneralTechnologiesName.GIT,
            icon: <FaGitAlt />,
            color: "#F05032",
            link: 'https://git-scm.com/',
        },
        {
            name: GeneralTechnologiesName.GITHUB,
            icon: <FiGithub />,
            color: "#181717",
            link: 'https://github.com/',
        },
        {
            name: GeneralTechnologiesName.GITHUB_COPILOT,
            icon: <TbBrandGithubCopilot />,
            color: "#6CC644",
            link: 'https://github.com/features/copilot',
        },
        {
            name: GeneralTechnologiesName.VSCODE,
            icon: <VscVscode />,
            color: "#007ACC",
            link: 'https://code.visualstudio.com/',
        },
        {
            name: GeneralTechnologiesName.VISUAL_STUDIO,
            icon: <DiVisualstudio />,
            color: "#5C2D91",
            link: 'https://visualstudio.microsoft.com/',
        },
        {
            name: GeneralTechnologiesName.INTELLIJ,
            icon: <DiIntellij />,
            color: "#000000",
            link: 'https://www.jetbrains.com/idea/',
        },
        {
            name: GeneralTechnologiesName.DOCKER,
            icon: <IoLogoDocker />,
            color: "#2496ED",
            link: 'https://www.docker.com/',
        },
        {
            name: GeneralTechnologiesName.AWS,
            icon: <FaAws />,
            color: "#FF9900",
            link: 'https://aws.amazon.com/',
        },
        {
            name: GeneralTechnologiesName.POSTMAN,
            icon: <SiPostman />,
            color: "#FF6C37",
            link: 'https://www.postman.com/',
        },
        {
            name: GeneralTechnologiesName.FIGMA,
            icon: <FaFigma />,
            color: "#F24E1E",
            link: 'https://www.figma.com/',
        },
        {
            name: GeneralTechnologiesName.LINUX,
            icon: <PiLinuxLogo />,
            color: "#FCC624",
            link: 'https://www.linux.org/',
        },
        {
            name: GeneralTechnologiesName.BASH,
            icon: <SiGnubash />,
            color: "#283037",
            link: 'https://www.gnu.org/software/bash/',
        },
        {
            name: GeneralTechnologiesName.WINDOWS,
            icon: <PiWindowsLogoFill />,
            color: "#0078D6",
            link: 'https://www.microsoft.com/en-us/windows',
        },
        {
            name: GeneralTechnologiesName.OAUTH,
            icon: <TbBrandOauth />,
            color: "#3F2E84",
            link: 'https://oauth.net/',
        },
    ],
    database: [
        {
            name: GeneralTechnologiesName.SQLITE,
            icon: <SiSqlite />,
            color: "#003B57",
            link: 'https://www.sqlite.org/index.html',
        },
        {
            name: GeneralTechnologiesName.POSTGRESQL,
            icon: <SiPostgresql />,
            color: "#336791",
            link: 'https://www.postgresql.org/',
        },
        {
            name: GeneralTechnologiesName.MYSQL,
            icon: <GrMysql />,
            color: "#00758F",
            link: 'https://www.mysql.com/',
        },
        {
            name: GeneralTechnologiesName.SQLSERVER,
            icon: <DiMsqlServer />,
            color: "#CC2927",
            link: 'https://www.microsoft.com/en-us/sql-server',
        },
        {
            name: GeneralTechnologiesName.MONGODB,
            icon: <TbBrandMongodb />,
            color: "#47A248",
            link: 'https://www.mongodb.com/',
        },
        {
            name: GeneralTechnologiesName.FIREBASE,
            icon: <SiFirebase />,
            color: "#FF9100",
            link: 'https://firebase.google.com/',
        },
        {
            name: GeneralTechnologiesName.MICROSOFT_ACCESS,
            icon: <FaDatabase />,
            color: "#A4373A",
            link: 'https://www.microsoft.com/en-us/microsoft-365/access',
        }
    ],
};

export default generalTechnologies;