import cn from '@/utils/function/cn';

import React from 'react'
import Tooltip, { TooltipSize } from '../tooltip';
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
            <Tooltip 
                disabled
                tooltipBackgroundColor={element.color} 
                key={`${index}-${j}`} 
                className={cn(
                    `w-full size-element`,
                    className,
                )} 
                tooltipClassName="shadow-none" 
                text={element.name} 
                size={TooltipSize.lg}>
                <AdaptableGridElement element={element} index={j} />
            </Tooltip>
        ))}
    </div>
  )
}

export default AdaptableGridWrapper;