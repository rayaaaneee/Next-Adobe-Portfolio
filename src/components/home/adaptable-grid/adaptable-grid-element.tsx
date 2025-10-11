"use client";

import { MouseEvent, Ref, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { AdaptableGridElementData } from "./adaptable-grid";
import useConditionalEffect from "@/utils/hook/use-conditionnal-effect";
import verifyReference from "@/utils/function/verify-reference";
import AdaptableGridElementExpansion from "./adaptable-grid-element-expansion";

interface AdaptableGridElementProps {
    element: AdaptableGridElementData;
    index: number;
    clickable: boolean;
    className?: string;
}

// Single grid element
const AdaptableGridElement = ({ element, className, index, clickable }: AdaptableGridElementProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const gridElementRef = useRef<HTMLElement | null>(null);
    
    const supportHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    const handlingClassName: string = `hover-${index + 1}`;

    const onMouseEnter = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        e.stopPropagation();
        
        const wrapper: Element | null = e.currentTarget.closest('.wrapper');

        if (wrapper) {
            wrapper.classList.add(handlingClassName);
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }

    const onMouseLeave = (e: MouseEvent<HTMLAnchorElement & HTMLDivElement>) => {
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
            else wrapper.classList.remove(clickClassName);
        } else throw new Error("No wrapper found for AdaptableGridElement");
    }, [isClicked]);

    const onClick = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        e.stopPropagation();
        setIsClicked(true);
    }

    const onClose = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        setIsClicked(false);
    }

    const ParentElement = clickable ? "div" : "a";

    return (
        <ParentElement
            ref={clickable ? (gridElementRef as Ref<HTMLAnchorElement & HTMLDivElement>) : undefined}
            onClick={clickable ? onClick : undefined}
            onMouseEnter={supportHover ? onMouseEnter : undefined} 
            onMouseLeave={supportHover ? onMouseLeave : undefined} 
            href={clickable ? undefined : element.link}
            target={clickable ? undefined : "_blank"}
            rel={clickable ? undefined : "noreferrer"}
            className={cn(
                "size-element flex relative flex-row items-center gap-0 cursor-pointer justify-center [&.active]:justify-start",
                "transition-[opacity,background-color,align-items] duration-300",
                "[&.active>img]:ml-10 [&.active]:gap-10 [&.active>*:not(img)]:mr-10",
                "opacity-50 hover:opacity-90 [&.active]:opacity-90 [&.active]:cursor-auto [&.active]:items-center ",
                className,
            )}
            key={index}
            style={{ backgroundColor: element.color }}>
            { element.icon }
            { clickable && (<AdaptableGridElementExpansion element={element} onClose={onClose} isClicked={isClicked} />) }
        </ParentElement>
    );
}

export default AdaptableGridElement;
