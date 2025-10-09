import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import Tooltip, { TooltipSize } from "../tooltip";
import { type IconType } from "react-icons/lib";

import type ClassNameInterface from "@/utils/interface/classname";

export type GridElementIconType = IconType | StaticImageData;

export interface AdaptableGridElementData {
    name: string;
    icon?: StaticImageData | IconType;
    color: string;
    link: string;
    description?: string;
    imageAlt?: string;
}

export interface AdaptableGridProps extends ClassNameInterface {
    elementsPerRow?: number;
    elements: AdaptableGridElementData[];
    elementClassName?: string;
}

const AdaptableGrid = ({ className, id, elementsPerRow, elements, elementClassName }: AdaptableGridProps) => {

    if (elements.length === 0) throw new Error("No elements provided to AdaptableGrid");
    if (elementsPerRow && elementsPerRow <= 0) throw new Error("elementsPerRow must be greater than 0");

    const iconBaseClassName = "h-24 w-24";

    return (
        <div className={cn('adaptable-grid', className)} id={id}>
            {elements.map((_, i) => (
                ((i % 5 === 0) && (
                    <div key={i} className="wrapper">
                        { elements.slice(i, i + 5).map((element, j) => (
                            <Tooltip tooltipBackgroundColor={element.color} key={i} className="w-full" text={element.name} size={TooltipSize.lg}>
                                <a href={element.link} target="_blank" rel="noreferrer" className={cn(
                                    "h-52 flex flex-col items-center justify-center opacity-70 hover:opacity-90 transition-opacity duration-200", 
                                    elementClassName
                                )} key={j} style={{ backgroundColor: element.color }}>
                                    { element.icon && (() => {
                                        const Icon: GridElementIconType = element.icon;
                                        return (Icon && ("src" in Icon) ? (
                                            <Image className={iconBaseClassName} src={Icon as StaticImageData} alt={`${element.name}`} />
                                        ) : (
                                            <Icon className={`text-white ${iconBaseClassName}`} />
                                        ))
                                    })() }
                                    { !element.icon && element.name }
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                ))
            ))}
        </div>
    )
}

export default AdaptableGrid
