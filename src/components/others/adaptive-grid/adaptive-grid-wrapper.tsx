import cn from '@/util/function/cn';

import { AdaptiveGridElementData } from '../adaptive-grid';
import AdaptiveGridElement from './adaptive-grid-element';

import { DeepReadonlyable } from '@/util/type/deep-readonly';

export type IndexesType = { i: number; j: number };

export interface AdaptiveGridWrapperProps {
    elements: DeepReadonlyable<AdaptiveGridElementData[]>;
    asInternalLink: boolean;
    nbElements: number;
    index: number;
    clickable: boolean;
    className?: string;
}

// Grid line
const AdaptiveGridWrapper = ({ elements, nbElements, className, index, clickable, asInternalLink }: AdaptiveGridWrapperProps) => {
    return (
        <div className={cn(
            "wrapper",
            `cols-${nbElements} overflow-hidden size-element`,
            className
        )}>
            { elements.slice(index, index + nbElements).map((element, j) => {
                if (!element.content) throw new Error(`No content provided for AdaptiveGridElement at index ${j}`);
                return (
                    <AdaptiveGridElement asInternalLink={asInternalLink} clickable={clickable} key={`${index}-${j}`}  element={element} index={j} />
                )
            })}
        </div>
    )
}

export default AdaptiveGridWrapper;