import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { HeadingOne, IconPosition, Paragraph, ParagraphAlignment, AnchorLinkButton, Button } from "@/components/page-flow";

import { TbExternalLink } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

import { AdaptableGridElementProjectData } from "./adaptable-grid";
import Tooltip, { TooltipSize } from "@/components/tooltip";
import { projectTechnologiesList } from "@/asset/data/home/project";

export interface AdaptableGridElementExpansionProps {
    element: AdaptableGridElementProjectData;
    isClicked: boolean;
    onClose?: MouseEventHandler<HTMLSpanElement>;
}

// Expansion shown when clicking on a project grid element (only for clickable grids)
const AdaptableGridElementExpansion = ({ element, isClicked, onClose }: AdaptableGridElementExpansionProps) => {
    return (
        <>
            <span 
                onClick={onClose}
                className={cn(
                    "close-expansion",
                    "z-10",
                    "absolute top-4 right-4 w-7 h-7 bg-white hover:bg-red-500 rounded-full transition-[opacity,background-color] duration-[400ms,300ms] ease-[linear,ease-in-out]",
                    [isClicked ? "opacity-80 hover:opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"]
                )}>    
            </span>
            <div className={cn(
                "content-expansion",
                "relative h-full flex flex-col [&>*]:absolute overflow-hidden transition-[width] duration-[250] ease-in-out [&_*]:text-white",
                [isClicked ? "w-full" : "w-0"],
                [isClicked ? "[&>*]:pointer-events-auto" : "[&>*]:pointer-events-none"],
            )}>


                <section className={cn(
                    "expansion-details",
                    [isClicked ? "opacity-100" : "opacity-0"],
                    "z-0",
                    "transition-opacity duration-250 ease-in-out",
                )}>

                    <HeadingOne 
                        icon={element.link && <TbExternalLink />} 
                        iconPosition={IconPosition.right} 
                        href={element.link} 
                        iconScale
                        containerClassName="mt-3"
                        className="text-nowrap">
                            {element.link && "Consult "}<u>{element.name}</u> <i>({element.year})</i>
                    </HeadingOne>

                    <Paragraph className={cn(
                        "mt-1 text-nowrap",
                    )} alignment={ParagraphAlignment.justify} innerHtml={element.description}>{undefined}</Paragraph>   

                </section>

                <section className={cn(
                    "content-expansion",
                    "bottom-2 w-fit h-fit",
                    "flex flex-row flex-nowrap gap-4",
                    "transition-opacity duration-400 ease-out",
                    [isClicked ? "opacity-80" : "opacity-0"]
                )}>
                    {element.technologies.map((name, i) => {
                        if (!(name in projectTechnologiesList)) throw new Error(`Project technology "${name}" not found in projectTechnologies data.`);
                        const icon = projectTechnologiesList[name];
                        return (
                            <Tooltip key={i} text={name} size={TooltipSize.md} tooltipClassName="bg-[rgba(255,255,255,0.75)] !text-slate-600 font-semibold" className="inline-block">
                                <Button className="rounded-full">
                                    {icon}
                                </Button>
                            </Tooltip>
                        );
                    })}
                </section>

            </div>

            { element.githubLink && (
                <AnchorLinkButton
                    href={element.githubLink}
                    className={cn(
                        "absolute text-white bottom-4 right-4 w-14 h-14",
                        "transition-opacity duration-400 ease-out",
                        [isClicked ? "opacity-80" : "opacity-0 pointer-events-none"]
                    )} 
                    buttonClassName="bg-transparent hover:bg-transparent">
                        <FiGithub className="w-full h-full" />
                </AnchorLinkButton>
            )}

        </>
    )
}

export default AdaptableGridElementExpansion;
