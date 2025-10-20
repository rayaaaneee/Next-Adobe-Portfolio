import cn from '@/utils/function/cn';

import { AdaptableGridElementData } from './adaptable-grid';
import AdaptableGridElement from './adaptable-grid-element';

import { DeepReadonliable } from '@/utils/types/deep-readonly';

export type IndexesType = { i: number; j: number };

export interface AdaptableGridWrapperProps {
    elements: DeepReadonliable<AdaptableGridElementData[]>;
    asInternalLink: boolean;
    nbElements: number;
    index: number;
    clickable: boolean;
    className?: string;
}

// Grid line
const AdaptableGridWrapper = ({ elements, nbElements, className, index, clickable, asInternalLink }: AdaptableGridWrapperProps) => {
    return (
        <div className={cn(
            "wrapper",
            `cols-${nbElements} overflow-hidden size-element`,
            className
        )}>
            { elements.slice(index, index + nbElements).map((element, j) => {
                if (!element.content) throw new Error(`No content provided for AdaptableGridElement at index ${j}`);
                return (
                    <AdaptableGridElement asInternalLink={asInternalLink} clickable={clickable} key={`${index}-${j}`}  element={element} index={j} />
                )
            })}
        </div>
    )
}

export default AdaptableGridWrapper;