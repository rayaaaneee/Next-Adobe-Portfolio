"use client";

import { MouseEvent } from "react";

import { cn } from "@/lib/utils";

import { AdaptableGridElementData } from "./adaptable-grid";

interface AdaptableGridElementProps {
    element: AdaptableGridElementData;
    index: number;
    className?: string;
}

// Single grid element
const AdaptableGridElement = ({ element, className, index }: AdaptableGridElementProps) => {

    const supportHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    console.log(supportHover);

    const handlingClassName: string = `hover-${index + 1}`;

    const onMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        
        const wrapper: Element | null = e.currentTarget.closest('.wrapper');

        if (wrapper) {
            wrapper.classList.add(handlingClassName);
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }

    const onMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();

        const wrapper: Element | null = e.currentTarget.closest('.wrapper');

        if (wrapper) {
            wrapper.classList.remove(handlingClassName);
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }

    return (
        <a 
            onMouseEnter={supportHover ? onMouseEnter : undefined} 
            onMouseLeave={supportHover ? onMouseLeave : undefined} 
            href={element.link} 
            target="_blank" 
            rel="noreferrer" 
            className={cn(
                className,
                "size-element flex flex-col items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-200", 
            )} 
            key={index} 
            style={{ backgroundColor: element.color }}>

            { element.icon }

        </a>
    )
}

export default AdaptableGridElement;