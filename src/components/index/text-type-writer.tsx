import { cn } from '@/lib/utils';

import { ChildrenInterface } from '@/utils/interface/children';
import ClassNameInterface from '@/utils/interface/classname';

export interface TextTypeWriterProps extends ClassNameInterface, ChildrenInterface {}

const TextTypeWriter = ({ children, id, className }: TextTypeWriterProps) => {
    return (
        <h2 id={`typerWriter-${id}`} className={cn(
            'text-white text-nowrap [line-height:1] [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)] font-adobe font-semibold text-[6vw]', 
            className
        )}>
            { children }
        </h2>
    )
}

export default TextTypeWriter;
