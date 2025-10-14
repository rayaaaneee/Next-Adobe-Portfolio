import { HeadingOne, Paragraph } from '../page-flow';

import WorkEducationPart from './work-education/work-education-part';

import Month from '@/utils/types/month';
import { DateClass, ExperienceDateClass } from '@/utils/types/home/date';
import { type Work } from '@/utils/types/home/experience';
import { assertFoundTech, GeneralTechnologiesName } from '@/asset/data/home/general-technologies-list';

const WorkContainer = () => {

        const workExperience: Work[] = [
        {
            name: "Energy Pool",
            location: "Lyon, France",
            title: "Cybersecurity Engineer (Blue Team)",
            description: "As a Blue Team member at Energy Pool, I am responsible for protecting the company's digital assets from cyber threats. My role involves monitoring network traffic, analyzing security incidents, and implementing defensive measures to safeguard sensitive information. I work closely with other IT professionals to ensure the overall security posture of the organization is robust and resilient against potential attacks.",
            type: "Apprenticeship",
            technologies: [
                assertFoundTech(GeneralTechnologiesName.JAVA, "language"),
                assertFoundTech(GeneralTechnologiesName.KOTLIN, "language"),
                assertFoundTech(GeneralTechnologiesName.TYPESCRIPT, "language"),
                assertFoundTech(GeneralTechnologiesName.ANGULAR, "framework"),
                assertFoundTech(GeneralTechnologiesName.BASH, "tool"),
                assertFoundTech(GeneralTechnologiesName.AWS, "tool"),
                assertFoundTech(GeneralTechnologiesName.DOCKER, "tool"),
            ],
            date: new ExperienceDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2024,
                })
            }),
        },
        {
            name: "ICP Conseil",
            location: "Lyon, France",
            title: "Backend Developer Intern",
            description: "During my apprenticeship at ICP Conseil, I contributed to the development of backend systems using Node.js and Express. I was involved in designing and implementing RESTful APIs, optimizing database queries, and ensuring the scalability and security of the applications. This experience allowed me to enhance my skills in server-side development and gain practical knowledge of industry best practices.",
            type: "Apprenticeship",
            technologies: [
                assertFoundTech(GeneralTechnologiesName.DOTNET, "framework"),
                assertFoundTech(GeneralTechnologiesName.CSHARP, "language"),
                assertFoundTech(GeneralTechnologiesName.JQUERY, "library"),
                assertFoundTech(GeneralTechnologiesName.SQLSERVER, "database"),
                assertFoundTech(GeneralTechnologiesName.MICROSOFT_ACCESS, "database")
            ],
            date: new ExperienceDateClass({
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
            location: "Lyon, France",
            title: "Full-Stack Developer Intern",
            type: "Internship",
            technologies: [
                assertFoundTech(GeneralTechnologiesName.SYMFONY, "framework"),
                assertFoundTech(GeneralTechnologiesName.PHP, "language"),
                assertFoundTech(GeneralTechnologiesName.JAVASCRIPT, "language"),
                assertFoundTech(GeneralTechnologiesName.SCSS, "library"),
                assertFoundTech(GeneralTechnologiesName.MONGODB, "database")
            ],
            description: "During my internship at Onyl Rocks, I worked as a Full-Stack Developer, contributing to both frontend and backend development tasks. I utilized technologies such as React for building user interfaces and Node.js for server-side logic. My responsibilities included developing new features, fixing bugs, and collaborating with the design team to ensure a seamless user experience. This internship provided me with valuable hands-on experience in full-stack development within a dynamic team environment.",
            date: new ExperienceDateClass({
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
        <article>
            <HeadingOne id="xp" isAnchorLink>Work Experience</HeadingOne>
            <Paragraph>Describe here...</Paragraph>
            {workExperience.map((work, index) => (
                <WorkEducationPart separator={index < workExperience.length - 1} key={index} item={work} index={index} />
            ))}
        </article>
    )
}

export default WorkContainer;
