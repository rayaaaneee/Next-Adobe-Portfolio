import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import cn from "@/util/function/cn";

import { ChildrenType } from '@/util/interface/children';
import ClassNameInterface from '@/util/interface/classname';

import Tooltip, { TooltipPosition, TooltipSize } from './tooltip';

export enum IconSize {
    sm = 'w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16',
    md = 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
}

export interface ContactIconType extends ClassNameInterface { 
    title: string,
    href: string, 
    image: StaticImageData,
    darkImage?: StaticImageData,
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
const ImageElement = ({ link, className }: { link: ContactIconType } & ClassNameInterface) => (
    <Image    
        className={cn(
            'rounded-full w-full h-full block bg-cover bg-center transition-all duration-200',
            link.className,
            className
        )}
        src={link.image}
        alt={link.title}
        width={70}
        height={70}
    />
);

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
            <li className='rounded-full overflow-hidden group'>
                <Link 
                    className={cn(
                        link.className,
                        size,
                        'rounded-full block bg-cover bg-center transition-all duration-200 overflow-hidden',
                        className
                    )} 
                    href={link.href} 
                    target={link.target} 
                    rel={link.rel}>
                    <ImageElement 
                        link={link} 
                        className={cn(className, [link.darkImage && 'dark:hidden'])} />
                    {link.darkImage && 
                        <ImageElement
                        link={{...link, image: link.darkImage}} 
                        className={cn("hidden dark:block")} />}
                    <div id={id ? `contact-links-white-background-${id}` : undefined} className={cn(
                        "absolute -z-10",
                        "top-0 left-0 right-0 bottom-0 m-auto",
                        "w-[95%] h-[95%] rounded-full",
                        "bg-white dark:bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    )}></div>
                </Link>
            </li>
        </Tooltip>
    )
}

export default ContactIcon;
