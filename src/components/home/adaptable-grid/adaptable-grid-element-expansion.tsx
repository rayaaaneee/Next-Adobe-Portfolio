import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { Paragraph, ParagraphAlignment, AnchorLinkButton } from "@/components/page-flow";

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
                "relative h-full flex flex-col justify-center",
                "[&>*]:absolute overflow-hidden transition-[width] duration-[250] ease-in-out [&_*]:text-white",
                [isClicked ? "w-full" : "w-0"],
                [isClicked ? "[&>*]:pointer-events-auto" : "[&>*]:pointer-events-none"],
            )}>

                <section className={cn(
                    "expansion-details",
                    [isClicked ? "opacity-100" : "opacity-0"],
                    "z-0",
                    "transition-opacity duration-250 ease-in-out",
                )}>

                    <Paragraph className={cn(
                        "text-nowrap",
                    )} alignment={ParagraphAlignment.justify} innerHtml={element.description}>{undefined}</Paragraph>   

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
