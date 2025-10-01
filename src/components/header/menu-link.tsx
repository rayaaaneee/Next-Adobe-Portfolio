"use client";

import { cn } from '@/lib/utils';
import ChildrenType from '@/utils/types/children-type';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export interface MenuLinkProps {
    className?: string | null,
    to: string,
    children?: ChildrenType,
    isColored: boolean
}

const MenuLink = ({ className, to, children = <></>, isColored }: MenuLinkProps) => {

    const location = usePathname();

    return (
        <li className={cn("menu-link", "w-fit text-white text-xl font-apple font-semibold", className)}>
            <Link href={ to } className={ cn(
                className, 
                { active: location === to },
                "after:bg-menu-link",
                "[text-shadow:0_0_2.15rem_#000]",
                isColored ? 
                    cn(
                        "block mt-[3px] w-[95%] after:h-[6px] after:rounded-[50px] transition-all duration-100 ease-in",
                        "hover:after:w-[70%] hover:after:h-[6px] mt-[1px]",
                        "[&.active]:after:w-[70%] [&.active]:after:h-[6px] [&.active]:text-menu-link mt-[1px]"
                    )
                        : 
                    cn(
                        "after:opacity-0 after:h-[5px] after:w-0 after:rounded-[5px] mt-[5px] transition-all duration-300 ease-in",
                        "after:transition-all after:duration-300 after:ease-in",
                        "hover:after:opacity-100 hover:text-menu-link hover:after:w-[120%]",
                        "[&.active]:after:opacity-100 [&.active]:text-menu-link [&.active]:after:w-[120%]"
                    ),
                "flex flex-col items-center justify-center no-underline text-nowrap"
            ) }>{ children }</Link>
        </li>
    )
}

export default MenuLink;