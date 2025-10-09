import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import Tooltip, { TooltipSize } from "../tooltip";
import { type IconType } from "react-icons/lib";

import type ClassNameInterface from "@/utils/interface/classname";
import { DeepRedonliable } from "@/utils/types/deep-readonly";

export type GridElementIconType = IconType | StaticImageData;

export interface AdaptableGridElementData {
    name: string;
    icon?: StaticImageData | IconType;
    color: string;
    link: string;
    description?: string;
    imageAlt?: string;
}

export type ElementsPerRow = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface AdaptableGridProps extends ClassNameInterface {
    elementsPerRow?: ElementsPerRow;
    elements: DeepRedonliable<AdaptableGridElementData[]>;
    elementClassName?: string;
}

const AdaptableGrid = ({ className, id, elementsPerRow = 5, elements, elementClassName }: AdaptableGridProps) => {

    if (elements.length === 0) throw new Error("No elements provided to AdaptableGrid");
    if (elementsPerRow && elementsPerRow <= 0) throw new Error("elementsPerRow must be greater than 0");

    const iconBaseClassName = "h-24 w-24";

    // const elementsRef = useRef<null | ChildrenType[]>(null);

    return (
        <div className={cn('adaptable-grid', className)} id={id}>
            {elements.map((_, i) => (
                ((i % elementsPerRow === 0) && (
                    <div key={i} className={cn("wrapper", `cols-${elementsPerRow}`)}>
                        { elements.slice(i, i + elementsPerRow).map((element, j) => (
                            <Tooltip tooltipBackgroundColor={element.color} key={`${i}-${j}`} className="w-full shadow-none" text={element.name} size={TooltipSize.lg}>
                                <a href={element.link} target="_blank" rel="noreferrer" className={cn(
                                    "h-52 flex flex-col items-center justify-center opacity-70 hover:opacity-90 transition-opacity duration-200", 
                                    elementClassName
                                )} key={j} style={{ backgroundColor: element.color }}>
                                    { element.icon && (() => {
                                        const Icon: GridElementIconType = element.icon;
                                        return (("src" in Icon) ? (
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
