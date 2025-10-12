import { forwardRef } from "react";
import { cn } from "@/lib/utils";

import type ClassNameInterface from "@/utils/interface/classname";
import { DeepReadonliable } from "@/utils/types/deep-readonly";

import { ChildrenType } from "@/utils/interface/children";
import AdaptableGridWrapper from "./adaptable-grid-wrapper";
import AdaptableGridSeeMoreButton from "./adaptable-grid-see-more-button";
import AdaptableGridTopBottomPart from "./adaptable-grid-top-bottom-part";

export interface AdaptableGridElementData {
    name: string;
    color: string;
    link?: string;
    icon?: ChildrenType;
    imageAlt?: string;
}

export interface AdaptableGridElementProjectData extends AdaptableGridElementData {
    description: string;
    year: number;
    technologies: string[];
    githubLink?: string;
}

export type oneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const isOneToTen = (n: number): n is oneToTen => {
  return n >= 1 && n <= 10;
}

interface AdaptableGridBaseProps extends ClassNameInterface {
    elementsPerRow: oneToTen;
    hidden?: boolean;
}

interface NonclickableAdaptableGridProps extends AdaptableGridBaseProps {
    elements: DeepReadonliable<AdaptableGridElementData[]>;
    clickable?: false;
}

interface ClickableAdaptableGridProps extends AdaptableGridBaseProps {
    elements: DeepReadonliable<AdaptableGridElementProjectData[]>;
    clickable: true;
}


export type AdaptableGridProps = (NonclickableAdaptableGridProps | ClickableAdaptableGridProps);

// Complete grid
const AdaptableGrid = forwardRef<HTMLDivElement, AdaptableGridProps>(
    (
        { className, id, elementsPerRow, elements, clickable = false, hidden = false },
        ref
    ) => {

        if (!id) throw new Error("An id must be provided to AdaptableGrid");
        if (!isOneToTen(elementsPerRow)) throw new Error("elementsPerRow must be between 1 and 10");
        if (elements.length === 0) throw new Error("No elements provided to AdaptableGrid");
        if (elementsPerRow && elementsPerRow <= 0) throw new Error("elementsPerRow must be greater than 0");

        const elementCount: number = elements.length;
        const nbWrappers: number = Math.ceil(elementCount / elementsPerRow);

        if (clickable && nbWrappers > 1) throw new Error("Clickable AdaptableGrid can only have one row (elementsPerRow must be greater than or equal to the number of elements)");

        if (elementsPerRow > elementCount) elementsPerRow = elementCount as oneToTen;

        return (
            <div
                ref={ref}
                className={cn(
                    "adaptable-grid",
                    [hidden ? "hidden" : "flex"],
                    className
                )}
                id={id}>

                <AdaptableGridTopBottomPart
                    hover={false}
                    className='rounded-b-none'
                    id={`adaptable-grid-top-bottom-part-${id}`}
                ><></></AdaptableGridTopBottomPart>

                {elements.map((_, i) => (
                    (() => {
                        const elementsInWrapper: number = Math.min(elementsPerRow, elementCount - i);
                        return (
                            (i % elementsPerRow === 0) &&
                                (
                                    <AdaptableGridWrapper
                                        clickable={clickable}
                                        key={`wrapper-${i}`}
                                        className={cn(
                                            { ["!h-0"]: (i > 1) }
                                        )}
                                        elements={elements}
                                        nbElements={elementsInWrapper}
                                        index={i}
                                    />
                                )
                        );
                    })()
                ))}

                <AdaptableGridSeeMoreButton id={id} nbWrappers={nbWrappers} />

            </div>
        );
    }
);

AdaptableGrid.displayName = "AdaptableGrid";

export default AdaptableGrid
