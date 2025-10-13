"use client";

import { useEffect, useRef, useState, MouseEvent, MouseEventHandler, Ref} from "react";
import useConditionalEffect from "@/utils/hook/use-conditional-effect";
import { createRoot, Root } from "react-dom/client";

import { cn } from "@/lib/utils";

import { TbExternalLink } from "react-icons/tb";

import { AdaptableGridElementData, AdaptableGridElementProjectData } from "./adaptable-grid";
import AdaptableGridElementExpansion from "./adaptable-grid-element-expansion";

import Tooltip, { TooltipSize } from "@/components/tooltip";

import { HeadingTwo, Button, HeadingPropsInterface, IconPosition } from "@/components/page-flow";

import verifyReference from "@/utils/function/verify-reference";

import { projectTechnologiesList } from "@/asset/data/home/projects";

const TopPartText = ({
    className, children, icon, containerClassName, onClick, 
    href, iconPosition = IconPosition.right, iconScale = false 
}: HeadingPropsInterface) =>  (
    <HeadingTwo
        icon={icon}
        onClick={onClick}
        iconPosition={iconPosition}
        href={href}
        iconScale={iconScale}
        containerClassName={cn("m-0 text-slate-500", containerClassName)}
        className={cn(`text-nowrap`, className)}>
            { children }
    </HeadingTwo>
);

interface AdaptableGridElementProps {
    element: AdaptableGridElementData;
    index: number;
    clickable: boolean;
    className?: string;
}

// Single grid element
const AdaptableGridElement = ({ element, className, index, clickable }: AdaptableGridElementProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const gridElementRef = useRef<HTMLElement | null>(null);
    
    const supportHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    const handlingClassName: string = `hover-${index + 1}`;

    const wrapper = useRef<HTMLDivElement | null>(null);

    const topPartRoot = useRef<Root | null>(null);

    const bottomPartRoot = useRef<Root | null>(null);

    useEffect(() => {

        verifyReference<HTMLElement>(gridElementRef, "gridElementRef");

        if (!wrapper.current) {

            wrapper.current = gridElementRef.current!.closest('.wrapper') as HTMLDivElement;
            if (!wrapper.current) throw new Error("No wrapper found for AdaptableGridElement");

        }

        const parentGrid = wrapper.current.closest(".adaptable-grid");
        
        if (!parentGrid) throw new Error("No adaptable-grid ancestor found for AdaptableGridElement");

        if (!topPartRoot.current) {
    
            const topPartElement = parentGrid.querySelector('.adaptable-grid-top-part') as HTMLButtonElement;
    
            if (!topPartElement) throw new Error("No top part found for AdaptableGridElement");
    
            topPartRoot.current = createRoot(topPartElement);

        }

        if (!bottomPartRoot.current && clickable) {

            const bottomPartElement = parentGrid.querySelector('.adaptable-grid-bottom-part') as HTMLButtonElement;

            if (!bottomPartElement) throw new Error("No bottom part found for AdaptableGridElement");

            bottomPartRoot.current = createRoot(bottomPartElement);

        }

        return () => {

            if (topPartRoot.current) {
                topPartRoot.current.unmount();
                topPartRoot.current = null;
            }

            if (bottomPartRoot.current) {
                bottomPartRoot.current.unmount();
                bottomPartRoot.current = null;
            }

        }

    }, [clickable]);

    const onMouseEnter = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {

        e.stopPropagation();

        if (!wrapper.current || !topPartRoot.current) return;
        
        wrapper.current.classList.add(handlingClassName);

        if (!clickable) {

            topPartRoot.current.render(
                <TopPartText icon={element.link && <TbExternalLink />} containerClassName="to-animate fade short">{element.name}</TopPartText>
            );
        }

    }

    const onMouseLeave = (e: MouseEvent<HTMLAnchorElement & HTMLDivElement>) => {

        e.stopPropagation();

        if (!wrapper.current || !topPartRoot.current) return;

        wrapper.current.classList.remove(handlingClassName);

        if (!clickable) {
            topPartRoot.current.render(null);
        }

    }

    useConditionalEffect(() => {

        if (!gridElementRef.current || !wrapper.current || !topPartRoot.current) return;
        if (clickable && !bottomPartRoot.current) return;

        if (isExpanded) {
            
            // When expanded

            gridElementRef.current.classList.add("active");


            if (!bottomPartRoot.current) return;

            const elementProjectData = element as AdaptableGridElementProjectData;

            topPartRoot.current.render(
                <TopPartText 
                    icon={elementProjectData.link && <TbExternalLink />}
                    href={elementProjectData.link} 
                    iconScale
                    containerClassName="mt-3 opacity-0 to-animate fade"
                    className="text-nowrap">
                        {elementProjectData.link && "Consult "}
                        <u>{elementProjectData.name}</u> 
                        <i>({elementProjectData.year})</i>
                </TopPartText>
            );

            bottomPartRoot.current.render(
                <section className={cn(
                    "content-expansion",
                    "bottom-2 w-fit h-fit",
                    "flex flex-row flex-nowrap gap-4",
                    "transition-opacity duration-400 ease-out",
                    "opacity-80",
                )}>
                    {elementProjectData.technologies.map((name, i) => {
                        if (!(name in projectTechnologiesList)) throw new Error(`Project technology "${name}" not found in projectTechnologies data.`);
                        const icon = projectTechnologiesList[name];
                        return (
                            <Tooltip 
                                key={i} 
                                text={name} 
                                size={TooltipSize.md} 
                                className={`to-animate appear translate-y-3 anim-delay-${i * 100}`}
                                tooltipClassName="bg-[rgba(255,255,255,0.9)] !text-slate-600 font-semibold">
                                <Button className="rounded-full">
                                    {icon}
                                </Button>
                            </Tooltip>
                        );
                    })}
                </section>
            );

        } else {

            // When dismissed

            gridElementRef.current.classList.remove("active");

            if (!bottomPartRoot.current) return;

            topPartRoot.current.render(null);
            bottomPartRoot.current.render(null);

        }

        const clickClassName: string = `click-${index + 1}`;


        if (isExpanded) {
            wrapper.current.classList.add(clickClassName);
        } else {
            wrapper.current.classList.remove(clickClassName);
        }

    }, [isExpanded]);

    const ParentElement = clickable ? "div" : "a";

    return (
        <ParentElement
            ref={gridElementRef as Ref<HTMLAnchorElement & HTMLDivElement>}
            onClick={clickable ? () => (setIsExpanded(true)) : undefined}
            onMouseEnter={supportHover ? onMouseEnter : undefined} 
            onMouseLeave={supportHover ? onMouseLeave : undefined} 
            href={clickable ? undefined : element.link}
            target={clickable ? undefined : "_blank"}
            rel={clickable ? undefined : "noreferrer"}
            className={cn(
                "adaptable-grid-element",
                [(element.link || clickable) ? "cursor-pointer" : "cursor-default"],
                "size-element flex relative flex-row items-center gap-0 justify-center",
                "transition-[opacity,background-color] duration-300 ease-in-out",
                "[&.active>img]:ml-10 [&.active>.content-expansion]:pl-10 [&.active>.content-expansion]:mr-10",
                "opacity-50 hover:opacity-90 [&.active]:opacity-90 [&.active]:cursor-auto [&.active]:items-center ",
                className,
            )}
            key={index}
            style={{ backgroundColor: element.color }}>
            { element.icon }
            { clickable && 
                (<AdaptableGridElementExpansion 
                    element={element as AdaptableGridElementProjectData} 
                    onClose={(e) => (e.stopPropagation(), setIsExpanded(false))}
                    isClicked={isExpanded} 
                />) 
            }
        </ParentElement>
    );
}

export default AdaptableGridElement;
