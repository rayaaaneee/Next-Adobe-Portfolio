import cn from '@/utils/function/cn';

import Tooltip, { TooltipSize } from '@/components/tooltip';

import { AdaptableGridElementData } from './adaptable-grid';
import AdaptableGridElement from './adaptable-grid-element';

import { DeepReadonliable } from '@/utils/types/deep-readonly';

export type IndexesType = { i: number; j: number };

export interface AdaptableGridWrapperProps {
    elements: DeepReadonliable<AdaptableGridElementData[]>;
    nbElements: number;
    index: number;
    className?: string;
}

// Grid line
const AdaptableGridWrapper = ({ elements, nbElements, className, index }: AdaptableGridWrapperProps) => {
  return (
    <div className={cn(
        "wrapper", 
        `cols-${nbElements} overflow-hidden size-element`,
        className
    )}>
        { elements.slice(index, index + nbElements).map((element, j) => (
            <AdaptableGridElement key={`${index}-${j}`} element={element} index={j} />
        ))}
    </div>
  )
}

export default AdaptableGridWrapper;