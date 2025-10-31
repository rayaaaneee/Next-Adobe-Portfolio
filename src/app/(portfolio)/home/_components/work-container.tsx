"use client";

import useLanguage from '@/utils/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from '@/components/page-flow';

import WorkEducationPart from '@/components/home/work-education/work-education-part';

import { DateClass, IntervalDateClass, Month  } from '@/utils/types/date';
import { type Work } from '@/utils/types/home/experience';
import { assertFoundTech, GeneralTechnologiesName } from '@/asset/data/home/general-technologies-list';
import Language from '@/utils/types/language';

const WorkContainer = () => {

    const { language } = useLanguage();

    const workExperience: Work[] = [
        {
            name: "Energy Pool",
            location: {
                [Language.EN]: "Lyon, France",
                [Language.FR]: "Lyon, France",
                [Language.ES]: "Lyon, Francia",
            },
            title: {
                [Language.EN]: "Blue Team Member",
                [Language.FR]: "Membre de l'équipe Blue Team",
                [Language.ES]: "Miembro del equipo Blue Team"
            },
            description: {
                [Language.EN]: "As a Blue Team member at Energy Pool, I am responsible for protecting the company's digital assets from cyber threats. My role involves monitoring network traffic, analyzing security incidents, and implementing defensive measures to safeguard sensitive information. I work closely with other IT professionals to ensure the overall security posture of the organization is robust and resilient against potential attacks.",
                [Language.FR]: "En tant que membre de l'équipe Blue Team chez Energy Pool, je suis responsable de la protection des actifs numériques de l'entreprise contre les menaces cybernétiques. Mon rôle consiste à surveiller le trafic réseau, à analyser les incidents de sécurité et à mettre en œuvre des mesures de défense pour protéger les informations sensibles. Je travaille en étroite collaboration avec d'autres professionnels de l'informatique pour garantir que la posture de sécurité globale de l'organisation est robuste et résiliente face aux attaques potentielles.",
                [Language.ES]: "Como miembro del equipo Blue Team en Energy Pool, soy responsable de proteger los activos digitales de la empresa contra amenazas cibernéticas. Mi función implica monitorear el tráfico de la red, analizar incidentes de seguridad e implementar medidas defensivas para salvaguardar información sensible. Trabajo en estrecha colaboración con otros profesionales de TI para garantizar que la postura de seguridad general de la organización sea sólida y resistente a posibles ataques."
            },
            type: {
                [Language.EN]: "Apprenticeship",
                [Language.FR]: "Alternance",
                [Language.ES]: "Aprendizaje"
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
                [Language.EN]: "Lyon, France",
                [Language.FR]: "Lyon, France",
                [Language.ES]: "Lyon, Francia"
            },
            title: {
                [Language.EN]: "Backend Developer Intern",
                [Language.FR]: "Stagiaire Développeur Backend",
                [Language.ES]: "Practicante de Desarrollo Backend"
            },
            description: {
                [Language.EN]: "During my apprenticeship at ICP Conseil, I contributed to the development of client features using the ASP.NET Core MVC framework, on the LifeLine software, a SaaS for managing medical practices. I worked on creating new pages and back-end functionalities. This experience involved using Microsoft SQL Server for managing medical data, as well as Microsoft Access for data management. This experience was very enriching and allowed me to develop my skills in web development and database management in a sensitive sector like healthcare.",
                [Language.FR]: "Au cours de mon apprentissage chez ICP Conseil, j'ai à l'élaboration de fonctionnalités clients en utilisant le framework ASP.NET Core MVC, sur le logiciel LifeLine, SaaS de gestion de cabinets médicaux. J'ai travaillé sur la création de nouvelles pages et de nouvelles fonctionnalités back-end. Cette expérience s'est accompagnée de l'utilisation de la base de données Microsoft SQL Server pour la gestion des données médicales, ainsi que de Microsoft Access pour la gestion des données. Cette expérience a été très enrichissante et m'a permis de développer mes compétences en développement web et en gestion de bases de données dans un secteur aussi sensible que la santé.",
                [Language.ES]: "Durante mi aprendizaje en ICP Conseil, contribuí al desarrollo de funcionalidades para clientes utilizando el framework ASP.NET Core MVC, en el software LifeLine, un SaaS para la gestión de consultorios médicos. Trabajé en la creación de nuevas páginas y funcionalidades de back-end. Esta experiencia implicó el uso de Microsoft SQL Server para la gestión de datos médicos, así como Microsoft Access para la gestión de datos. Esta experiencia fue muy enriquecedora y me permitió desarrollar mis habilidades en desarrollo web y gestión de bases de datos en un sector tan sensible como el de la salud."
            },
            type: {
                [Language.EN]: "Apprenticeship",
                [Language.FR]: "Alternance",
                [Language.ES]: "Aprendizaje"
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
                [Language.EN]: "Lyon, France",
                [Language.FR]: "Lyon, France",
                [Language.ES]: "Lyon, Francia"
            },
            title: {
                [Language.EN]: "Full-Stack Developer Intern",
                [Language.FR]: "Stagiaire Développeur Full-Stack",
                [Language.ES]: "Practicante de Desarrollo Full-Stack"
            },
            type: {
                [Language.EN]: "Internship",
                [Language.FR]: "Stage",
                [Language.ES]: "Pasantía"
            },
            technologies: [
                assertFoundTech(GeneralTechnologiesName.SYMFONY, "framework"),
                assertFoundTech(GeneralTechnologiesName.PHP, "language"),
                assertFoundTech(GeneralTechnologiesName.JAVASCRIPT, "language"),
                assertFoundTech(GeneralTechnologiesName.SCSS, "library"),
                assertFoundTech(GeneralTechnologiesName.MONGODB, "database")
            ],
            description: {
                [Language.EN]: "During my internship at Onyl Rocks, I worked as a Full-Stack Developer, contributing to both frontend and backend development tasks. I was responsible for implementing new features, fixing bugs, and optimizing the performance of web applications. This role provided me with valuable experience in working with a variety of technologies and collaborating with a team of developers to deliver high-quality software solutions.",
                [Language.FR]: "Lors de mon stage chez Onyl Rocks, j'ai travaillé en tant que Développeur Full-Stack, contribuant aux tâches de développement frontend et backend. J'étais responsable de la mise en œuvre de nouvelles fonctionnalités, de la correction de bugs et de l'optimisation des performances des applications web. Ce rôle m'a offert une expérience précieuse en travaillant avec une variété de technologies et en collaborant avec une équipe de développeurs pour fournir des solutions logicielles de haute qualité.",
                [Language.ES]: "Durante mi pasantía en Onyl Rocks, trabajé como Desarrollador Full-Stack, contribuyendo a tareas de desarrollo tanto frontend como backend. Fui responsable de implementar nuevas funciones, corregir errores y optimizar el rendimiento de las aplicaciones web. Este rol me brindó una valiosa experiencia al trabajar con una variedad de tecnologías y colaborar con un equipo de desarrolladores para entregar soluciones de software de alta calidad."
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
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.work.description }</Paragraph>
            {workExperience.map((work, index) => (
                <WorkEducationPart language={language.current} separator={index < workExperience.length - 1} key={index} item={work} index={index} />
            ))}
        </>
    )
}

export default WorkContainer;
