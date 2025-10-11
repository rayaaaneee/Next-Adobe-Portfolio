import Link from 'next/link';
import { cn } from '@/lib/utils';

import { ChildrenType } from '@/utils/interface/children';
import ClassNameInterface from '@/utils/interface/classname';

import Tooltip, { TooltipPosition, TooltipSize } from './tooltip';

export enum IconSize {
    sm = 'md:w-16 md:h-16 xs:w-12 xs:h-12 w-10 h-10',
    md = 'md:w-20 md:h-20 sm:w-16 sm:h-16 w-12 h-12',
}

export interface ContactIconType extends ClassNameInterface { 
    title: string,
    link: string, 
    username?: ChildrenType, 
    target?: string, 
    rel?: string, 
    download?: boolean 
}

export interface ContactIconProps extends ClassNameInterface {
    link: ContactIconType,
    tooltip?: boolean,
    tooltipSize?: TooltipSize,
    tooltipClassName?: string,
    size?: IconSize,
}

const ContactIcon = ({ className, id, size = IconSize.md, link, tooltip = true, tooltipClassName, tooltipSize = TooltipSize.lg }: ContactIconProps) => {


    if (!tooltip && (tooltipClassName || tooltipSize)) {
        throw new Error("tooltipClassName and tooltipSize cannot be used if tooltip is deactivated");
    }
    
    return (
        <Tooltip 
            disabled={!tooltip}
            className={cn('rounded-full', tooltipClassName)}
            size={tooltipSize} 
            position={TooltipPosition.top} 
            text={link.username || link.title}
            id={id}>
            <li className='rounded-full'>
                <Link 
                    className={cn(
                        link.className,
                        size,
                        'rounded-full block bg-cover bg-center transition-all duration-200',
                        className
                    )} 
                    href={link.link} 
                    target={link.target} 
                    rel={link.rel}>    
                </Link>
            </li>
        </Tooltip>
    )
}

export default ContactIcon;
