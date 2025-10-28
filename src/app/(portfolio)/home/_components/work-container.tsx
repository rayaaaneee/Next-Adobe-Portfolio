"use client";

import { useLanguage } from '@/utils/hook/use-language';

import { HeadingOne, Paragraph } from '@/components/page-flow';

import WorkEducationPart from '@/components/home/work-education/work-education-part';

import { DateClass, IntervalDateClass, Month  } from '@/utils/types/date';
import { type Work } from '@/utils/types/home/experience';
import { assertFoundTech, GeneralTechnologiesName } from '@/asset/data/home/general-technologies-list';

const WorkContainer = () => {

    const { language } = useLanguage();

    const workExperience: Work[] = [
        {
            name: "Energy Pool",
            location: {
                en: "Lyon, France",
                fr: "Lyon, France",
                es: "Lyon, Francia",
            },
            title: {
                en: "Blue Team Member",
                fr: "Membre de l'équipe Blue Team",
                es: "Miembro del equipo Blue Team"
            },
            description: {
                en: "As a Blue Team member at Energy Pool, I am responsible for protecting the company's digital assets from cyber threats. My role involves monitoring network traffic, analyzing security incidents, and implementing defensive measures to safeguard sensitive information. I work closely with other IT professionals to ensure the overall security posture of the organization is robust and resilient against potential attacks.",
                fr: "En tant que membre de l'équipe Blue Team chez Energy Pool, je suis responsable de la protection des actifs numériques de l'entreprise contre les menaces cybernétiques. Mon rôle consiste à surveiller le trafic réseau, à analyser les incidents de sécurité et à mettre en œuvre des mesures de défense pour protéger les informations sensibles. Je travaille en étroite collaboration avec d'autres professionnels de l'informatique pour garantir que la posture de sécurité globale de l'organisation est robuste et résiliente face aux attaques potentielles.",
                es: "Como miembro del equipo Blue Team en Energy Pool, soy responsable de proteger los activos digitales de la empresa contra amenazas cibernéticas. Mi función implica monitorear el tráfico de la red, analizar incidentes de seguridad e implementar medidas defensivas para salvaguardar información sensible. Trabajo en estrecha colaboración con otros profesionales de TI para garantizar que la postura de seguridad general de la organización sea sólida y resistente a posibles ataques."
            },
            type: {
                en: "Apprenticeship",
                fr: "Alternance",
                es: "Aprendizaje"
            },
            technologies: [
                assertFoundTech(GeneralTechnologiesName.SPRINGBOOT, "framework"),
                assertFoundTech(GeneralTechnologiesName.JAVA, "language"),
                assertFoundTech(GeneralTechnologiesName.KOTLIN, "language"),
                assertFoundTech(GeneralTechnologiesName.TYPESCRIPT, "language"),
                assertFoundTech(GeneralTechnologiesName.ANGULAR, "framework"),
                assertFoundTech(GeneralTechnologiesName.BASH, "tool"),
                assertFoundTech(GeneralTechnologiesName.AWS, "tool"),
                assertFoundTech(GeneralTechnologiesName.DOCKER, "tool"),
            ],
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2024,
                })
            }),
        },
        {
            name: "ICP Conseil",
            location: {
                en: "Lyon, France",
                fr: "Lyon, France",
                es: "Lyon, Francia"
            },
            title: {
                en: "Backend Developer Intern",
                fr: "Stagiaire Développeur Backend",
                es: "Practicante de Desarrollo Backend"
            },
            description: {
                en: "During my apprenticeship at ICP Conseil, I contributed to the development of backend systems using Node.js and Express. I was involved in designing and implementing RESTful APIs, optimizing database queries, and ensuring the scalability and security of the applications. This experience allowed me to enhance my skills in server-side development and gain practical knowledge of industry best practices.",
                fr: "Au cours de mon apprentissage chez ICP Conseil, j'ai contribué au développement de systèmes backend en utilisant Node.js et Express. J'ai participé à la conception et à la mise en œuvre d'API RESTful, à l'optimisation des requêtes de base de données et à la garantie de la scalabilité et de la sécurité des applications. Cette expérience m'a permis d'améliorer mes compétences en développement côté serveur et d'acquérir des connaissances pratiques sur les meilleures pratiques de l'industrie.",
                es: "Durante mi aprendizaje en ICP Conseil, contribuí al desarrollo de sistemas backend utilizando Node.js y Express. Participé en el diseño e implementación de API RESTful, optimizando consultas a bases de datos y asegurando la escalabilidad y seguridad de las aplicaciones. Esta experiencia me permitió mejorar mis habilidades en desarrollo del lado del servidor y adquirir conocimientos prácticos sobre las mejores prácticas de la industria."
            },
            type: {
                en: "Apprenticeship",
                fr: "Alternance",
                es: "Aprendizaje"
            },
            technologies: [
                assertFoundTech(GeneralTechnologiesName.DOTNET, "framework"),
                assertFoundTech(GeneralTechnologiesName.CSHARP, "language"),
                assertFoundTech(GeneralTechnologiesName.JQUERY, "library"),
                assertFoundTech(GeneralTechnologiesName.SQLSERVER, "database"),
                assertFoundTech(GeneralTechnologiesName.MICROSOFT_ACCESS, "database")
            ],
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2023,
                }),
                end: new DateClass({
                    month: Month.August,
                    year: 2024,
                }),
            }),
        },
        {
            name: "Onyl Rocks",
            location: {
                en: "Lyon, France",
                fr: "Lyon, France",
                es: "Lyon, Francia"
            },
            title: {
                en: "Full-Stack Developer Intern",
                fr: "Stagiaire Développeur Full-Stack",
                es: "Practicante de Desarrollo Full-Stack"
            },
            type: {
                en: "Internship",
                fr: "Stage",
                es: "Pasantía"
            },
            technologies: [
                assertFoundTech(GeneralTechnologiesName.SYMFONY, "framework"),
                assertFoundTech(GeneralTechnologiesName.PHP, "language"),
                assertFoundTech(GeneralTechnologiesName.JAVASCRIPT, "language"),
                assertFoundTech(GeneralTechnologiesName.SCSS, "library"),
                assertFoundTech(GeneralTechnologiesName.MONGODB, "database")
            ],
            description: {
                en: "During my internship at Onyl Rocks, I worked as a Full-Stack Developer, contributing to both frontend and backend development tasks. I was responsible for implementing new features, fixing bugs, and optimizing the performance of web applications. This role provided me with valuable experience in working with a variety of technologies and collaborating with a team of developers to deliver high-quality software solutions.",
                fr: "Lors de mon stage chez Onyl Rocks, j'ai travaillé en tant que Développeur Full-Stack, contribuant aux tâches de développement frontend et backend. J'étais responsable de la mise en œuvre de nouvelles fonctionnalités, de la correction de bugs et de l'optimisation des performances des applications web. Ce rôle m'a offert une expérience précieuse en travaillant avec une variété de technologies et en collaborant avec une équipe de développeurs pour fournir des solutions logicielles de haute qualité.",
                es: "Durante mi pasantía en Onyl Rocks, trabajé como Desarrollador Full-Stack, contribuyendo a tareas de desarrollo tanto frontend como backend. Fui responsable de implementar nuevas funciones, corregir errores y optimizar el rendimiento de las aplicaciones web. Este rol me brindó una valiosa experiencia al trabajar con una variedad de tecnologías y colaborar con un equipo de desarrolladores para entregar soluciones de software de alta calidad."
            },
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.April,
                    year: 2023,
                }),
                end: new DateClass({
                    month: Month.July,
                    year: 2023,
                }),
            }),
        }
    ];
    
    return (
        <>
            <HeadingOne id="work" isAnchorLink>{ language.home.work.title }</HeadingOne>
            <Paragraph>{ language.home.work.description }</Paragraph>
            {workExperience.map((work, index) => (
                <WorkEducationPart language={language.current} separator={index < workExperience.length - 1} key={index} item={work} index={index} />
            ))}
        </>
    )
}

export default WorkContainer;
