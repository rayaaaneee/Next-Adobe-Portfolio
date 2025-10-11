import { forwardRef } from "react";
import { cn } from "@/lib/utils";

import type ClassNameInterface from "@/utils/interface/classname";
import { DeepReadonliable } from "@/utils/types/deep-readonly";

import { ChildrenType } from "@/utils/interface/children";
import AdaptableGridWrapper from "./adaptable-grid-wrapper";
import AdaptableGridSeeMoreButton from "./adaptable-grid-see-more-button";

export interface AdaptableGridElementData {
    name: string;
    color: string;
    link: string;
    icon?: ChildrenType;
    description?: string;
    imageAlt?: string;
}

export type oneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const isOneToTen = (n: number): n is oneToTen => {
  return n >= 1 && n <= 10;
} 

export interface AdaptableGridProps extends ClassNameInterface {
    elements: DeepReadonliable<AdaptableGridElementData[]>;
    elementsPerRow: oneToTen;
    clickable?: boolean;
    hidden?: boolean;
}

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

        if (elementsPerRow > elementCount) elementsPerRow = elementCount as oneToTen;

        return (
            <div
                ref={ref}
                className={cn(
                    "adaptable-grid",
                    [hidden ? "hidden" : "flex"],
                    className
                )}
                id={id}
            >
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
