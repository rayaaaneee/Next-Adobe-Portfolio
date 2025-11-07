import assertDefined from "@/util/function/assert-defined";

import Language, { WithLanguage } from "@/util/type/language";
import Sentences from "@/util/type/sentences";

const englishSentences: Sentences = {
    current: Language.EN,
    denomination: "English",
    languages: {
        [Language.EN]: "English",
        [Language.FR]: "French",
        [Language.ES]: "Spanish"
    } as WithLanguage<string>,
    title: "Portfolio",
    flag_img: "english.png",
    index: {
        title: `Adobe Portfolio - ${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}`,
        discover: "Get started",
        description: {
            long: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "Full-Stack Developper", 
                "Cybersecurity"
            ],
            short: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "FullStack Dev",
                "Cyber"
            ]
        },
    },
    home: {
        role: "Full-Stack Developer & Cybersecurity Enthusiast",
        location: {
            country: "France",
            city: "Lyon",
        },
        links: {
            title: "Links",
            mail: "Email",
            phone: "Phone",
            resume: "Resume",
        },
        about: {
            title: "About Me",
            texts: [
                "Hello! I'm <b>Rayane</b>, a passionate <b>developer</b> with a deep interest in <b>technology</b> and all things related to computing. Over the years, I've dedicated myself to creating a variety of <b>personal projects</b>, driven by my passion for <b>learning</b> and <b>exploring new technologies</b>.<br/>",
                "I'm proficient in <b>full-stack development</b> and <b>cybersecurity</b>, with a particular focus on <b>React</b> and <b>Next.js</b> for web development. In cybersecurity, I've trained through Capture The Flag <b>(CTF)</b> challenges and applied those skills in <b>real-world contexts</b>, strengthening my understanding of <b>vulnerabilities</b>, <b>system hardening</b>, and <b>secure development practices</b>.<br/>",
                "I hold a <b>BUT in Computer Science</b> from the <b>University of Lyon 1</b> (<i>Development &amp; Implementation Program</i>) and am currently pursuing a <b>three-year engineering degree at CPE Lyon</b>, specializing in <b>Cybersecurity Computer Engineering</b>.<br/>",
                "I'm currently working at <b>Energy Pool</b> as a <b>Blue Team member</b> (<i>vulnerability protection</i>) throughout my engineering studies. This role is enhancing my skills in <b>threat detection</b>, <b>incident analysis</b>, <b>vulnerability management</b>, and <b>continuous improvement of defensive measures</b> within a <b>production environment</b>.<br/>",
                "📝 <i>Note</i> : Although my <b>portfolio places a strong emphasis on design</b>, it mainly reflects my appreciation for <b>visual aesthetics</b> and <b>user experience</b>, aspects I value as a <i>hobby</i> and <i>creative outlet</i>. While I truly enjoy crafting <b>clean and visually engaging interfaces</b>, my <b>professional focus</b> is oriented toward <b>Cybersecurity</b> and <b>software development</b>, where I aim to deepen my expertise and build a <b>solid technical career</b>.<br/>",
                "... certs",
            ]
        },
        projects: {
            title: "Projects",
            description: "A selection of my latest development projects, exploring various technologies from AI and web apps to 3D and cybersecurity. Click to dive deeper into each one, learn more about it, try it and discover its source code!",
        },
        work: {
            title: "Work Experience",
            description: "Here is an overview of my professional experiences, highlighting my roles, responsibilities, and the technologies I've worked with in various positions. Each experience has contributed to my growth as a developer and cybersecurity enthusiast.",
            techs: "Technologies",
        },
        education: {
            title: "Education",
            description: "Here is an overview of my educational background, highlighting the institutions I've attended, the degrees I've obtained, and the fields of study I've explored."
        },
        contact: {
            title: "Get in Touch",
            description: "If you want to reach me, you can use the links above or send me an email at ",
        },
        skills : {
            title: "Skills & Technologies",
            description: "Here is a selection of my technical skills and the technologies I have experience with, ranging from programming languages and frameworks to tools and platforms.",
            parts: {
                languages: "Programming Languages",
                frameworks: "Frameworks",
                libraries: "Libraries",
                tools: "Tools",
                databases: "Databases",
            }
        },
        hobbies: {
            title: "Hobbies",
        },
        thanks: "Thank you for visiting !"
    },
    blog: {
        title: "Blog",
        lang: "Language",
        footer: "Thank you for reading !",
        rights: "This post is licensed under the {cc} license.",
    },
    about: {
        title: "About",
        some_rights_reserved: "Some Rights Reserved",
        description: [
            "This site was entirely designed and developed by myself to showcase my background, projects, and skills.",
            "The projects presented have all been carried out in whole or in part by myself.",
            "Each article on the {blog} page details the design steps, challenges encountered, and solutions implemented for a specific project, issue, or achievement."
        ],
        parts: {
            cookies: {
                title: "Cookies",
                description: [
                    "This site uses cookies to enhance your browsing experience.",
                    "By continuing to use this site, you agree to the use of cookies in accordance with the privacy policy."
                ]
            },
            stack: {
                title: "Stack",
                description: [
                    "This site was developed using the <strong>Next.js</strong> framework with <strong>TypeScript</strong> for better type management.",
                    "Styling is handled with <strong>Tailwind CSS</strong> for a responsive and modern design.",
                    "Hosting is provided by <strong>Vercel</strong>, offering optimal performance and automatic scaling."
                ]
            },
            inspirations: {
                title: "Inspirations",
                description: "The logo was inspired by the official Adobe Photoshop logo (more generally from the entire {adobe} suite logos)."
            },
            license: {
                title: "License & Usage Rights",
                description: [
                    "The design, layout, and visual elements of this site have been carefully crafted and are protected by copyright.",
                    "Their reuse, even partially, is not allowed without prior agreement.",
                    "Except where otherwise noted, all the content is licensed under the {cc} by the author.",    
                    "This means you are free to share (copy and redistribute the material in any medium or format) and adapt (remix, transform, and build upon the material) for any purpose, even commercially, under the following terms:"
                ],
                parts: [
                    {
                        title: "Attribution",
                        description : [
                            "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use."
                        ]
                    },
                    {
                        title: "No additional restrictions",
                        description : [
                            "You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits."
                        ]
                    },
                    {
                        title: "Notices",
                        description : [
                            "You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.",
                            "No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material."
                        ]
                    }
                ]
            }
        }
    },
    adaptive_grid: {
        expand: "Expand",
        dismiss: "Dismiss",
    },
    not_found: {
        title: "404 - Page not found",
        text: "Sorry, we couldn’t find the page you’re looking for.",
    }
}

export default englishSentences as Sentences;