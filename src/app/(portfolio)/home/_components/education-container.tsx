"use client";

import useLanguage from '@/utils/hook/use-language';

import { HeadingOne, Paragraph, ParagraphAlignment } from '@/components/page-flow';

import WorkEducationPart from '@/components/home/work-education/work-education-part';

import { DateClass, IntervalDateClass, Month } from '@/utils/types/date';
import { type Education } from '@/utils/types/home/experience';
import Language from '@/utils/types/language';

const EducationContainer = () => {

    const { language } = useLanguage();

    const education: Education[] = [
        {
            name: "CPE Lyon",
            location: {
                [Language.EN]: "Villeurbanne, France",
                [Language.FR]: "Villeurbanne, France",
                [Language.ES]: "Villeurbanne, Francia"
            },
            title: {
                [Language.EN]: "Engineering Degree in Cybersecurity Computer Engineering",
                [Language.FR]: "Diplôme d'ingénieur en cybersécurité et informatique",
                [Language.ES]: "Título de Ingeniero en Ciberseguridad e Ingeniería Informática"
            },
            description: {
                [Language.EN]: "Currently pursuing a three-year engineering degree at CPE Lyon, specializing in Cybersecurity. The program focuses on advanced topics in cybersecurity, including network security, cryptography, secure software development, and ethical hacking. The curriculum combines theoretical knowledge with practical applications, preparing students for careers in protecting digital assets and infrastructure.",
                [Language.FR]: "Actuellement en train de poursuivre un diplôme d'ingénieur de trois ans à CPE Lyon, spécialisé en Cybersécurité. Le programme se concentre sur des sujets avancés en cybersécurité, y compris la sécurité des réseaux, la cryptographie, le développement de logiciels sécurisés et le hacking éthique. Le programme combine des connaissances théoriques avec des applications pratiques, préparant les étudiants à des carrières dans la protection des actifs et des infrastructures numériques.",
                [Language.ES]: "Actualmente cursando un título de ingeniero de tres años en CPE Lyon, especializado en Ciberseguridad. El programa se centra en temas avanzados en ciberseguridad, incluyendo seguridad de redes, criptografía, desarrollo de software seguro y hacking ético. El plan de estudios combina conocimientos teóricos con aplicaciones prácticas, preparando a los estudiantes para carreras en la protección de activos e infraestructuras digitales."
            },
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2024,
                }),
            })
        },
        {
            name: {
                [Language.EN]: "University of Lyon 1",
                [Language.FR]: "Université Lyon 1",
                [Language.ES]: "Universidad de Lyon 1"
            },
            location: {
                [Language.EN]: "Villeurbanne, France",
                [Language.FR]: "Villeurbanne, France",
                [Language.ES]: "Villeurbanne, Francia"
            },
            title: {
                [Language.EN]: "BUT in Computer Science - Development & Implementation Program",
                [Language.FR]: "BUT en Informatique - Programme de Développement et d'Implémentation",
                [Language.ES]: "BUT en Informática - Programa de Desarrollo e Implementación"
            },
            description: {
                [Language.EN]: "Completed a Bachelor's degree in Computer Science (BUT) at the University of Lyon 1, specializing in Development & Implementation. The program provided a solid foundation in programming, algorithms, data structures, and software engineering principles. It also included hands-on experience with various programming languages and development tools, preparing me for a career in software development and laying the groundwork for cybersecurity fundamentals.",
                [Language.FR]: "Diplôme de Bachelor Universitaire de Technologie (BUT) Informatique obtenu à l'Université Lyon 1, spécialisé en Développement et Implémentation. Le programme a fourni une base solide en programmation, algorithmes, structures de données et principes d'ingénierie logicielle. Il a également inclus une expérience pratique avec divers langages de programmation et outils de développement, me préparant à une carrière dans le développement logiciel et m'ouvrant la voie vers les bases de la cybersécurité.",
                [Language.ES]: "Título de Grado en Informática (BUT) obtenido en la Universidad de Lyon 1, especializado en Desarrollo e Implementación. El programa proporcionó una base sólida en programación, algoritmos, estructuras de datos y principios de ingeniería de software. También incluyó experiencia práctica con varios lenguajes de programación y herramientas de desarrollo, preparándome para una carrera en el desarrollo de software y sentando las bases para los fundamentos de la ciberseguridad."
            },
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2021,
                }),
                end: new DateClass({
                    month: Month.August,
                    year: 2024,
                }),
            })
        },
        {
            name: {
                [Language.EN]: "St. Charles High School",
                [Language.FR]: "Lycée St Charles",
                [Language.ES]: "Liceo St. Charles"
            },
            location: {
                [Language.EN]: "Rillieux-La-Pape, France",
                [Language.FR]: "Rillieux-La-Pape, France",
                [Language.ES]: "Rillieux-La-Pape, Francia"
            },
            title: {
                [Language.EN]: "Scientific Baccalaureate, Specialty in Mathematics",
                [Language.FR]: "Baccalauréat Scientifique, Spécialité Mathématiques",
                [Language.ES]: "Bachillerato Científico, Especialidad en Matemáticas"
            },
            description: {
                [Language.EN]: "I obtained a General Baccalaureate with specialties in Mathematics and Physics (former Bac S). In the first year, I also studied economics before focusing on sciences in the final year. Although I did not have computer science courses at that time, mathematics and physics provided me with a solid foundation in logic, abstract reasoning, and problem-solving—skills that naturally led me to the field of computer science later on.",
                [Language.FR]: "J’ai obtenu un Baccalauréat Général avec spécialités Mathématiques et Physique (ancien Bac S). En première, j’ai également étudié l’économie avant de me concentrer sur les sciences en terminale. Même si je n’avais pas encore de cours d’informatique à cette époque, les mathématiques et la physique m’ont donné une base solide en logique, en raisonnement abstrait et en résolution de problèmes — des compétences qui m’ont naturellement conduit vers le domaine de l’informatique par la suite.",
                [Language.ES]: "He obtenido un Bachillerato General con especialidades en Matemáticas y Física (antiguo Bac S). En el primer año, también estudié economía antes de centrarme en las ciencias en el último año. Aunque no tenía cursos de informática en ese momento, las matemáticas y la física me proporcionaron una base sólida en lógica, razonamiento abstracto y resolución de problemas, habilidades que me llevaron naturalmente al campo de la informática más adelante."
            },
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2018,
                }),
                end: new DateClass({
                    month: Month.June,
                    year: 2021,
                }),
            })
        }
    ];
    
    return (
        <>
            <HeadingOne id="education" isAnchorLink>{ language.home.education.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify}>{ language.home.education.description }</Paragraph>
            {education.map((edu, index) => (
                <WorkEducationPart language={language.current}  separator={index < education.length - 1} key={index} item={edu} index={index} />
            ))}
        </>
    )
}

export default EducationContainer;