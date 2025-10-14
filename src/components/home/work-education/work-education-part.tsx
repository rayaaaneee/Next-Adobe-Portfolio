import { HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from "../../page-flow";

import { IoMdBusiness } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";

import { ChildrenInterface } from "@/utils/interface/children";
import { type Work, type Education } from "@/utils/types/home/experience";

import Separator from "./separator";
import TechItem from "./tech-item";

export interface WorkEducationPartProps {
    item: Work | Education;
    index: number;
    separator?: boolean;
}

const WorkEducationPart = ({ item, index, separator = false }: WorkEducationPartProps) => {

    const isWork = item.hasOwnProperty("technologies");

    const SubSection = ({ children }: ChildrenInterface) => (
        <div className="flex items-start justify-between gap-3">
            {children}
        </div>
    );

    return (
        <>
            <section className="my-8">
                <SubSection>
                    <HeadingTwo 
                        isAnchorLink id={`${isWork ? "work" : "education"}-${index}`} 
                        containerClassName="m-0" 
                        icon={isWork ? 
                                (<IoMdBusiness className="w-8 h-8"/>)
                                    :
                                (<MdSchool className="w-8 h-8"/>)
                            }
                        >
                            {item.name}
                    </HeadingTwo>
                    <div className="flex flex-col items-end justify-center gap-1">
                        <HeadingThree containerClassName="m-0" icon={<FaLocationDot className="w-5 h-5"/>}>{item.location}</HeadingThree>
                        <Paragraph className="m-0 italic">{item.date.toString()}</Paragraph>
                    </div>
                </SubSection>
                {isWork && (item as Work).technologies.length > 0 && (
                    <div className="tech-list-container">
                        <HeadingThree icon={<FaLayerGroup className="w-5 h-5"/>} containerClassName="m-0">Technologies:</HeadingThree>
                        <ul className="list-none my-5 ml-10 flex flex-col gap-2">
                            {(item as Work).technologies.map((tech, idx) => (
                                <TechItem key={idx} tech={tech} />
                            ))}
                        </ul>
                    </div>
                )}
                {isWork && (
                    <SubSection>
                        <HeadingThree containerClassName="m-0">• {(item as Work).title}</HeadingThree>
                        <Paragraph className="m-0 italic">{(item as Work).type}</Paragraph>
                    </SubSection>
                )}
                <Paragraph indent alignment={ParagraphAlignment.justify}>{item.description}</Paragraph>
            </section>
            {separator && <Separator />}
        </>
    )
}

export default WorkEducationPart;