import Language from "@/utils/types/language";
import Sentences from "@/utils/types/sentences";

const englishSentences: Sentences = {
    current: Language.EN,
    denomination: "English",
    languages: {
        en: "English",
        fr: "French",
        es: "Spanish"
    },
    title: "Portfolio",
    flag_img: "english.png",
    loader: {
        texts: [
            "Reading preferences...",
            "Initializing tools...",
            "Loading the palette...",
            "Creating color conversion tables...",
            "Reading brushes...",
            "Loading .",
            "Loading . .",
            "Loading . . ."
        ],
        illustration_creator: "Illustration by Flore Marquin",
        illustration_inspiration: "Illustration inspired by The Lord of the Rings: The Rings of Power. \"For more details and legal information, please visit the screen.\""
    },
    index: {
        title: "Adobe Portfolio - Rayane Merlin",
        discover: "Get started",
        description: {
            long: [
                "Rayane Merlin", 
                "Full-Stack Developper", 
                "Cybersecurity"
            ],
            short: [
                "Rayane Merlin",
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
                "Although my <b>portfolio places a strong emphasis on design</b>, it mainly reflects my appreciation for <b>visual aesthetics</b> and <b>user experience</b>, aspects I value as a <i>hobby</i> and <i>creative outlet</i>. While I truly enjoy crafting <b>clean and visually engaging interfaces</b>, my <b>professional focus</b> is oriented toward <b>Cybersecurity</b> and <b>software development</b>, where I aim to deepen my expertise and build a <b>solid technical career</b>.<br/>",
                "I'm proficient in <b>full-stack development</b> and <b>cybersecurity</b>, with a particular focus on <b>React</b> and <b>Next.js</b> for web development. In cybersecurity, I've trained through Capture The Flag <b>(CTF)</b> challenges and applied those skills in <b>real-world contexts</b>, strengthening my understanding of <b>vulnerabilities</b>, <b>system hardening</b>, and <b>secure development practices</b>.<br/>",
                "I hold a <b>BUT in Computer Science</b> from the <b>University of Lyon 1</b> (<i>Development &amp; Implementation Program</i>) and am currently pursuing a <b>three-year engineering degree at CPE Lyon</b>, specializing in <b>Cybersecurity Computer Engineering</b>.<br/>",
                "I'm currently working at <b>Energy Pool</b> as a <b>Blue Team member</b> (<i>vulnerability protection</i>) throughout my engineering studies. This role is enhancing my skills in <b>threat detection</b>, <b>incident analysis</b>, <b>vulnerability management</b>, and <b>continuous improvement of defensive measures</b> within a <b>production environment</b>.<br/>",
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
        lang: "Language",
        footer: "Thank you for reading !",
    },
    about: {
        title: "About",
        main_title: "Privacy Policy",
        main_text: "Your privacy is important to me. Adobe Portfolio's policy is to respect your privacy and to comply with all applicable laws and regulations regarding the personal information I may collect about you, including on my website, via the address",
        main_text_explaination: "This policy has been in effect since February 7, 2023, and was last updated on February 7, 2023.",
        contact_me: "Contact Me",
        contact_me_text: "For any questions or concerns regarding your privacy, you can contact me using the following contact information:",
        informations: "Collected Information",
        informations_text: "The information I collect includes both information that you knowingly and actively provide when using or participating in any of our services and promotions, and any information automatically sent by your devices when accessing our products and services.",
        log_data: "Log Data",
        log_data_text: "When you visit this website, servers may automatically record standard data provided by your web browser. This may include your device's IP address (Internet Protocol), browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with errors you may encounter. <br/> Please note that while this information may not be personally identifiable on its own, it may be possible to combine it with other data to personally identify individual persons.",
        inspirations_text: "This site was entirely coded by myself with the purpose of presenting my background, projects, and skills. <br/> Similarly, all projects presented may have been partially or entirely coded by myself. <br/> The logo was inspired by the official logo of Adobe Photoshop (more generally, by all logos of the Adobe Suite). The loader was inspired by the official loading of Adobe Photoshop 2022.",
        personal_data: "Personal Data",
        personal_data_text: "You may be asked for personal information that may include one or more of the following items: <br/>• Name <br/>• Email",
        cookies: "Use of Cookies",
        cookies_text: "The use of 'cookies' to collect information about you and your activity on our site. A cookie is a small data element that our website stores on your computer and accesses each time you visit, so that I can understand how you use our site."
    },
    adaptive_grid: {
        expand: "Expand",
        dismiss: "Dismiss",
    },
    not_found: {
        title: "Page not found"
    }
}

export default englishSentences as Sentences;