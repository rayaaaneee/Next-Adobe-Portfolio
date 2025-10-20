import { MouseEventHandler } from "react";

import cn from "@/utils/function/cn";

import { Paragraph, ParagraphAlignment, AnchorLinkButton } from "@/components/page-flow";

import { FiGithub } from "react-icons/fi";

import { AdaptableGridElementProjectData } from "./adaptable-grid";
import QuitButton from "@/components/quit-button";

export interface AdaptableGridElementExpansionProps {
    element: AdaptableGridElementProjectData;
    isClicked: boolean;
    onClose?: MouseEventHandler<HTMLSpanElement>;
}

// Expansion shown when clicking on a project grid element (only for clickable grids)
const AdaptableGridElementExpansion = ({ element, isClicked, onClose }: AdaptableGridElementExpansionProps) => {
    return (
        <>
            <QuitButton 
                id="close-expansion"
                title="project" 
                className={cn(
                    "w-7 h-7 absolute top-4 right-4",
                    [isClicked ? 
                        ("opacity-80 hover:opacity-100") 
                            :
                        ("opacity-0 pointer-events-none")
                    ]
                )} 
                onClick={onClose} 
            />
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
                        "text-nowrap m-0 dark:text-white",
                    )} alignment={ParagraphAlignment.justify} innerHtml={element.description}>{undefined}</Paragraph>   

                </section>

            </div>

            { element.githubLink && (
                <AnchorLinkButton
                    href={element.githubLink}
                    background={false}
                    className={cn(
                        "absolute text-white bottom-4 right-4 w-14 h-14",
                        "transition-opacity duration-400 ease-out",
                        [isClicked ? "opacity-80" : "opacity-0 pointer-events-none"]
                    )}>
                        <FiGithub className="w-full h-full" />
                </AnchorLinkButton>
            )}

        </>
    )
}

export default AdaptableGridElementExpansion;
