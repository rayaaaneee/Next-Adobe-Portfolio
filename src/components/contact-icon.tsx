import Link from 'next/link';
import { cn } from '@/lib/utils'

import ChildrenType from '@/utils/types/children-type';

import Tooltip, { TooltipPosition, TooltipSize } from './tooltip'

export interface ContactIconType { 
    title: string, 
    className: string, 
    link: string, 
    username?: ChildrenType, 
    target?: string, 
    rel?: string, 
    download?: boolean 
}

export interface ContactIconProps {
    className?: string | null,
    link: ContactIconType,
    tooltip?: boolean,
}

const ContactIcon = ({ className, link, tooltip = true }: ContactIconProps) => {

  return (
    <Tooltip 
        disabled={!tooltip}
        className='rounded-full'
        size={TooltipSize.lg} 
        position={TooltipPosition.top} 
        text={link.username || link.title}>
        <li className='rounded-full'>
            <Link 
                className={cn(
                    link.className,
                    'w-22 h-22 rounded-full block bg-cover bg-center transition-all duration-200',
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
