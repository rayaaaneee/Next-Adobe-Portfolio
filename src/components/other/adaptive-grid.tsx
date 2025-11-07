import { forwardRef } from "react";

import cn from "@/util/function/cn";

import type ClassNameInterface from "@/util/interface/classname";
import { DeepReadonlyable } from "@/util/type/deep-readonly";

import AdaptiveGridWrapper from "./adaptive-grid/adaptive-grid-wrapper";
import AdaptiveGridExpandButton from "./adaptive-grid/adaptive-grid-expand-button";
import AdaptiveGridTopBottomPart from "./adaptive-grid/adaptive-grid-top-bottom-part";

import type GridContent from "@/asset/data/home/adaptive-grid-base";
import { ChildrenType } from "@/util/interface/children";
import { TechCategory } from "@/asset/data/home/general-technologies-list";

export interface AdaptiveGridElementData {
    content: GridContent
    customIcon?: ChildrenType;
}

export interface AdaptiveGridElementProjectData extends AdaptiveGridElementData {
    description: string;
    year: number;
    technologies: {name: string, type: TechCategory}[];
    githubLink?: string;
}

export type oneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const isOneToTen = (n: number): n is oneToTen => {
    return n >= 1 && n <= 10;
}

interface AdaptiveGridBaseProps extends ClassNameInterface {
    elementsPerRow: oneToTen;
    asInternalLink?: boolean;
    hidden?: boolean;
}

interface NonclickableAdaptiveGridProps extends AdaptiveGridBaseProps {
    elements: DeepReadonlyable<AdaptiveGridElementData[]>;
    clickable?: false;
}

interface ClickableAdaptiveGridProps extends AdaptiveGridBaseProps {
    elements: DeepReadonlyable<AdaptiveGridElementProjectData[]>;
    clickable: true;
}


export type AdaptiveGridProps = (NonclickableAdaptiveGridProps | ClickableAdaptiveGridProps);

// Complete grid
const AdaptiveGrid = forwardRef<HTMLDivElement, AdaptiveGridProps>(
    (
        { className, id, elementsPerRow, elements, clickable = false, asInternalLink = false, hidden = false },
        ref
    ) => {

        if (!id) throw new Error("An id must be provided to AdaptiveGrid");
        if (!isOneToTen(elementsPerRow)) throw new Error("elementsPerRow must be between 1 and 10");
        if (!hidden && elements.length === 0) throw new Error("No elements provided to AdaptiveGrid");
        if (elementsPerRow && !isOneToTen(elementsPerRow)) throw new Error("elementsPerRow must be greater than 0 and less than or equal to 10");

        const elementCount: number = elements.length;
        const nbWrappers: number = Math.ceil(elementCount / elementsPerRow);

        if (clickable && nbWrappers > 1 ) throw new Error(`Clickable AdaptiveGrid can only have one row (elementsPerRow (${elementsPerRow}) must be greater than or equal to the number of elements (${elementCount}, ${elements.map(e => e.content.name).join(", ")})`);

        if (elementsPerRow > elementCount) elementsPerRow = elementCount as oneToTen;

        return (
            <div
                ref={ref}
                className={cn(
                    "adaptive-grid",
                    [hidden ? "hidden" : "flex"],
                    className
                )}
                id={id}>

                <AdaptiveGridTopBottomPart
                    hover={false}
                    className='adaptive-grid-top-part'
                    id={`adaptive-grid-top-part-${id}`}
                />

                {elements.map((_, i) => (
                    (() => {
                        const elementsInWrapper: number = Math.min(elementsPerRow, elementCount - i);
                        return (
                            (i % elementsPerRow === 0) &&
                                (
                                    <AdaptiveGridWrapper
                                        asInternalLink={asInternalLink}
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

                <AdaptiveGridExpandButton
                    className={cn(
                        "adaptive-grid-bottom-part",
                        [!clickable && "overflow-hidden"]
                    )}
                    id={id}
                    nbWrappers={nbWrappers}
                />

            </div>
        );
    }
);

AdaptiveGrid.displayName = "AdaptiveGrid";

export default AdaptiveGrid;
