import { HeadingOne, Paragraph } from '@/components/page-flow';

import WorkEducationPart from '@/components/home/work-education/work-education-part';

import { DateClass, IntervalDateClass, Month } from '@/utils/types/date';
import { type Education } from '@/utils/types/home/experience';

const EducationContainer = () => {


    const education: Education[] = [
        {
            name: "CPE Lyon",
            location: "Villeurbanne, France",
            title: "Engineering Degree in Cybersecurity Computer Engineering",
            description: "Currently pursuing a three-year engineering degree at CPE Lyon, specializing in Cybersecurity Computer Engineering. The program focuses on advanced topics in cybersecurity, including network security, cryptography, secure software development, and ethical hacking. The curriculum combines theoretical knowledge with practical applications, preparing students for careers in protecting digital assets and infrastructure.",
            date: new IntervalDateClass({
                start: new DateClass({
                    month: Month.September,
                    year: 2024,
                }),
            })
        },
        {
            name: "University of Lyon 1",
            location: "Villeurbanne, France",
            title: "BUT in Computer Science - Development & Implementation Program",
            description: "Completed a Bachelor's degree in Computer Science (BUT) at the University of Lyon 1, specializing in Development & Implementation. The program provided a solid foundation in programming, algorithms, data structures, and software engineering principles. It also included hands-on experience with various programming languages and development tools, preparing me for a career in software development.",
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
            name: "St. Charles High School",
            location: "Rillieux-La-Pape, France",
            title: "Scientific Baccalaureate, Specialty in Mathematics",
            description: "Completed my secondary education with a Scientific Baccalaureate, specializing in Mathematics. This program emphasized analytical thinking, problem-solving skills, and a strong foundation in mathematical concepts. It prepared me for further studies in technical and scientific fields, including computer science and engineering.",
            date : new IntervalDateClass({
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
            <HeadingOne id="education" isAnchorLink>Education</HeadingOne>
            <Paragraph>Describe here...</Paragraph>
            {education.map((edu, index) => (
                <WorkEducationPart separator={index < education.length - 1} key={index} item={edu} index={index} />
            ))}
        </>
    )
}

export default EducationContainer;