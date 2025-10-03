import Link from 'next/link';
import { cn } from '@/lib/utils'

import { ChildrenType } from '@/utils/interface/children';

import Tooltip, { TooltipPosition, TooltipSize } from './tooltip'
import ClassNameInterface from '@/utils/interface/classname';

export enum IconSize {
    sm = 'w-16 h-16',
    md = 'w-20 h-20',
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
    tooltipClassName?: string,
    size?: IconSize,
}

const ContactIcon = ({ className, size = IconSize.md, link, tooltip = true, tooltipClassName }: ContactIconProps) => {


    if (!tooltip && tooltipClassName) {
        throw new Error("tooltipClassName cannot be used if tooltip is deactivated");
    }
    
    return (
        <Tooltip 
            disabled={!tooltip}
            className={cn('rounded-full', tooltipClassName)}
            size={TooltipSize.lg} 
            position={TooltipPosition.top} 
            text={link.username || link.title}>
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
