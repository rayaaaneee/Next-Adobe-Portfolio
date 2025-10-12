import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { HeadingOne, IconPosition, Paragraph, ParagraphAlignment, AnchorLinkButton } from "@/components/page-flow";

import { TbExternalLink } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

import { AdaptableGridElementProjectData } from "./adaptable-grid";

export interface AdaptableGridElementExpansionProps {
    element: AdaptableGridElementProjectData;
    isClicked: boolean;
    onClose?: MouseEventHandler<HTMLSpanElement>;
}

// Expansion shown when clicking on a project grid element (only for clickable grids)
const AdaptableGridElementExpansion = ({ element, isClicked, onClose }: AdaptableGridElementExpansionProps) => {
    return (
        <div className={cn(
            "h-full flex flex-col [&>*]:absolute overflow-hidden transition-[width] duration-[250] ease-in-out [&_*]:text-white",
            [isClicked ? "w-full" : "w-0"],
            [isClicked ? "[&>*]:pointer-events-auto" : "[&>*]:pointer-events-none"],
        )}>

            <span 
                onClick={onClose}
                className={cn(
                    "close-expansion",
                    "z-10",
                    "top-4 right-4 w-7 h-7 bg-white hover:bg-red-500 rounded-full transition-[opacity,background-color] duration-[400ms,300ms] ease-[linear,ease-in-out]",
                    [isClicked ? "opacity-80 hover:opacity-100 cursor-pointer" : "opacity-0"]
                )}>    
            </span>

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
                    containerClassName="mt-3"
                    className="text-nowrap">
                        {element.link && "Consult "}<u>{element.name}</u>
                </HeadingOne>

                <Paragraph className={cn(
                    "mt-2 text-nowrap",
                )} alignment={ParagraphAlignment.justify} innerHtml={element.description}>{undefined}</Paragraph>   

            </section>

            { element.githubLink && (
                <AnchorLinkButton
                    href={element.githubLink}
                    className={cn(
                        "bottom-4 right-4 w-14 h-14",
                        "transition-opacity duration-400 ease-out",
                        [isClicked ? "opacity-80" : "opacity-0"]
                    )} 
                    buttonClassName="bg-transparent hover:bg-transparent">
                        <FiGithub className="w-full h-full" />
                </AnchorLinkButton>
            )}

        </div>
    )
}

export default AdaptableGridElementExpansion;
