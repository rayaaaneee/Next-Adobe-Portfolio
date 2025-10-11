"use client";

import { MouseEvent, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { AdaptableGridElementData } from "./adaptable-grid";
import useConditionalEffect from "@/utils/hook/use-conditionnal-effect";
import verifyReference from "@/utils/function/verify-reference";

interface AdaptableGridElementProps {
    element: AdaptableGridElementData;
    index: number;
    clickable: boolean;
    className?: string;
}

// Single grid element
const AdaptableGridElement = ({ element, className, index, clickable }: AdaptableGridElementProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const gridElementRef = useRef<HTMLAnchorElement | null>(null);
    
    const supportHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

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

    useConditionalEffect(() => {

        verifyReference(gridElementRef, "gridElementRef");

        if (isClicked) {
            // Do something when clicked
            gridElementRef.current!.classList.add("active");
        } else {
            // Do something when not clicked
            gridElementRef.current!.classList.remove("active");
        }

        const clickClassName: string = `click-${index + 1}`;

        const wrapper: Element | null = gridElementRef.current!.closest('.wrapper');

        if (wrapper) {
            if (isClicked) wrapper.classList.add(clickClassName);
            else wrapper.classList.remove(handlingClassName);
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }, [isClicked]);

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setIsClicked(true);
    }

    const onClose = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        e.preventDefault();

        setIsClicked(false);

        const wrapper: Element | null = e.currentTarget.closest('.wrapper');

        if (wrapper) {
            wrapper.classList.remove(`click-${index + 1}`);
            const activeElement: Element | null = wrapper.querySelector('.active');
            if (activeElement) activeElement.classList.remove('active');
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }

    return (
        <a  
            ref={gridElementRef}
            onClick={clickable ? onClick : undefined}
            onMouseEnter={supportHover ? onMouseEnter : undefined} 
            onMouseLeave={supportHover ? onMouseLeave : undefined} 
            href={element.link} 
            target="_blank" 
            rel="noreferrer" 
            className={cn(
                className,
                { ["expanded"]: isClicked },
                "size-element flex relative flex-row items-center [&.active]:items-center [&.active>*]:ml-10 cursor-pointer justify-center [&.active]:justify-start transition-[opacity,background-color,align-items] duration-300",
                "opacity-50 hover:opacity-90 [&.active]:opacity-90 [&.active]:cursor-default",
            )}
            key={index}
            style={{ backgroundColor: element.color }}>
            { clickable && (
                <span 
                    onClick={onClose} 
                    className={cn(
                        "absolute top-4 right-4 w-7 h-7 bg-white hover:bg-red-600 rounded-full transition-[opacity,background-color] duration-300",
                        [isClicked ? "opacity-80 hover:opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"]
                    )}></span>
            )}
            { element.icon }
            {/* { isClicked && (
                <div className="w-full h-full flex flex-col">
                    <a href={element.link}>Consult</a>

                </div>
            ) } */}
        </a>
    )
}

export default AdaptableGridElement;