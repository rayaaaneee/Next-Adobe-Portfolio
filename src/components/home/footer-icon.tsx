import Link from 'next/link';
import { cn } from '@/lib/utils'

import Tooltip, { TooltipPosition, TooltipSize } from '../tooltip'
import ChildrenType from '@/utils/types/children-type';

export interface FooterIconProps {
    className?: string | null,
    link: FooterIconType
}

export interface FooterIconType { 
    title: string, 
    className: string, 
    link: string, 
    username?: ChildrenType, 
    target?: string, 
    rel?: string, 
    download?: boolean 
}

const FooterIcon = ({ className, link }: FooterIconProps) => {
  
  return (
    <Tooltip 
        size={TooltipSize.lg} 
        position={TooltipPosition.top} 
        text={link.username || link.title}>
        <li>
            <Link 
                className={cn(
                    link.className,
                    'w-22 h-22 rounded-full block bg-cover bg-center transition-all duration-200',
                    className
                )} 
                href={link.link} 
                target={link.target} 
                rel={link.rel}
                download={link.download}>    
            </Link>
        </li>
    </Tooltip>
  )
}

export default FooterIcon;
