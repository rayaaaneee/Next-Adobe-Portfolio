"use client";

import { cn } from '@/lib/utils';
import { ChildrenInterface } from '@/utils/interface/children';
import ClassNameInterface from '@/utils/interface/classname';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export interface MenuLinkProps extends ChildrenInterface, ClassNameInterface {
    to: string,
    isColored: boolean
}

const MenuLink = ({ className, id, to, children = <></>, isColored }: MenuLinkProps) => {

    const location = usePathname();

    return (
        <li id={id} className={cn("menu-link", "w-fit text-white text-2xl font-apple font-medium", className)}>
            <Link href={ to } className={ cn(
                className, 
                { active: location === to },
                "after:bg-menu-link text-2xl",
                "[text-shadow:0_0_2.15rem_#000]",
                isColored ? 
                    cn(
                        "relative mt-[3px] w-[95%] after:rounded-[50px] transition-all duration-100 ease-in",
                        "after:w-[95%] after:mt-10 after:h-[6px] after:transition-all after:duration-100 after:ease-in",
                        "after:absolute after:content-['']",
                        "hover:after:w-[70%] hover:after:h-[5px] mt-[1px] hover:after:bg-[rgb(229,119,154)]",
                        "[&.active]:text-menu-link mt-[1px]",
                        "[&.active]:hover:after:w-[70%] [&.active]:hover:after:h-[5px] [&.active]:hover:after:bg-[rgb(229,119,154)]",
                        "dark:after:bg-[#ead3d3] dark:[&.active]:after:bg-[#ead3d3] dark:hover:after:bg-[#ead8d8]"
                    )
                        : 
                    cn(
                        "after:opacity-0 after:h-[5px] after:w-0 after:rounded-[5px] mt-[5px] transition-all duration-300 ease-in",
                        "after:transition-all after:duration-300 after:ease-in",
                        "hover:after:opacity-100 hover:text-menu-link hover:after:w-[120%]",
                        "[&.active]:after:opacity-100 [&.active]:text-menu-link [&.active]:after:w-[120%]",
                        "dark:hover:text-[#ead3d3] dark:[&.active]:text-[#ead3d3] dark:[&.active]:after:bg-[#ead3d3] dark:hover:after:bg-[#ead3d3]",
                    ),
                "flex flex-col items-center justify-center no-underline text-nowrap"
            ) }>{ children }</Link>
        </li>
    )
}

export default MenuLink;