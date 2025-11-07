"use client";

import Link from "next/link";

import { useEffect, useRef, useState, MouseEvent, Ref, CSSProperties} from "react";
import useConditionalEffect from "@/utils/hook/use-conditional-effect";
import { createRoot, Root } from "react-dom/client";

import cn from "@/utils/function/cn";

import { FaLink } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

import { AdaptiveGridElementData, AdaptiveGridElementProjectData } from "../adaptive-grid";
import AdaptiveGridElementExpansion from "./adaptive-grid-element-expansion";

import Tooltip, { TooltipSize } from "@/components/tooltip";

import { HeadingTwo, Button, HeadingPropsInterface, IconPosition } from "@/components/page-flow";

import { getStringWithLanguage } from "@/utils/types/language";

import verifyReference from "@/utils/function/verify-reference";

import { assertFoundTech } from "@/asset/data/home/general-technologies-list";

import ManageLanguages from "@/utils/manager/manage-language";

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
        containerClassName={cn("m-0 text-slate-500 dark:text-gray-200", containerClassName)}
        className={cn(`text-nowrap`, className)}>
            { children }
    </HeadingTwo>
);

interface AdaptiveGridElementProps {
    element: AdaptiveGridElementData;
    index: number;
    clickable: boolean;
    asInternalLink: boolean;
    className?: string;
}

// Single grid element
const AdaptiveGridElement = ({ element, className, index, clickable, asInternalLink }: AdaptiveGridElementProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const gridElementRef = useRef<HTMLElement | null>(null);

    const handlingClassName: string = `hover-${index + 1}`;

    const wrapper = useRef<HTMLDivElement | null>(null);

    const topPartRoot = useRef<Root | null>(null);

    const bottomPartRoot = useRef<Root | null>(null);

    useEffect(() => {

        verifyReference<HTMLElement>(gridElementRef, "gridElementRef");

        if (!wrapper.current) {

            wrapper.current = gridElementRef.current!.closest('.wrapper') as HTMLDivElement;
            if (!wrapper.current) throw new Error("No wrapper found for AdaptiveGridElement");

        }

        const parentGrid = wrapper.current.closest(".adaptive-grid");

        if (!parentGrid) throw new Error("No adaptive-grid ancestor found for AdaptiveGridElement");

        if (!topPartRoot.current) {

            const topPartElement = parentGrid.querySelector('.adaptive-grid-top-part') as HTMLButtonElement;

            if (!topPartElement) throw new Error("No top part found for AdaptiveGridElement");

            topPartRoot.current = createRoot(topPartElement);

        }

        if (!bottomPartRoot.current && clickable) {

            const bottomPartElement = parentGrid.querySelector('.adaptive-grid-bottom-part') as HTMLButtonElement;

            if (!bottomPartElement) throw new Error("No bottom part found for AdaptiveGridElement");

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
                <TopPartText 
                    icon={
                        element.content.link && (asInternalLink ?
                            (<FaLink />)
                            :
                            (<TbExternalLink />)
                        )
                    }
                    containerClassName="!m-0 to-animate fade short"
                    >
                        { getStringWithLanguage<string>(element.content.name, ManageLanguages.language) }
                </TopPartText>
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

            const elementProjectData = element as AdaptiveGridElementProjectData;

            topPartRoot.current.render(
                <TopPartText 
                    icon={elementProjectData.content.link && <TbExternalLink />}
                    href={elementProjectData.content.link} 
                    iconScale
                    containerClassName="!m-0 opacity-0 to-animate fade"
                    className="text-nowrap">
                        {elementProjectData.content.link && "Consult "}
                        <u>{ getStringWithLanguage(elementProjectData.content.name, ManageLanguages.language) }</u> 
                        <i>({elementProjectData.year})</i>
                </TopPartText>
            );

            bottomPartRoot.current.render(
                <section className={cn(
                    "content-expansion",
                    "bottom-2 w-fit h-fit",
                    "flex flex-row flex-nowrap",
                    [ "gap-2", "sm:gap-4" ],
                    "transition-opacity duration-400 ease-out",
                    "opacity-80",
                )}>
                    {elementProjectData.technologies.map((tech, i) => {
                        const icon = assertFoundTech(tech.name, tech.type).icon;
                        return (
                            <Tooltip 
                                key={i} 
                                text={tech.name} 
                                size={TooltipSize.md} 
                                className={`to-animate appear translate-y-3 rounded-full !text-slate-600 dark:!text-gray-200 anim-delay-${i * 100}`}
                                tooltipClassName="bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(70,70,70,0.9)] font-semibold">
                                <Button className={cn(
                                    "rounded-full p-2 ",
                                    [
                                        "[&>svg]:w-4 [&>svg]:h-4",
                                        "sm:[&>svg]:w-7 sm:[&>svg]:h-7",
                                    ]
                                )}>
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

    const ParentElement = (clickable || !element.content.link) ? "div" : (asInternalLink ? Link : "a");

    return (
        <ParentElement
            ref={gridElementRef as Ref<HTMLAnchorElement & HTMLDivElement>}
            onClick={clickable ? () => (setIsExpanded(true)) : undefined}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            href={element.content.link || "#"}
            target={(clickable || asInternalLink) ? undefined : "_blank"}
            key={index}
            rel={clickable ? undefined : "noreferrer"}
            style={{ "--bg-color" : element.content.color } as CSSProperties}
            className={cn(
                "adaptive-grid-element",
                [(element.content.link || clickable) ? "cursor-pointer" : "cursor-default"],
                "bg-[var(--bg-color)]",
                "opacity-50 hover:opacity-90 [&.active]:opacity-90 [&.active]:cursor-auto [&.active]:items-center ",
                "text-white size-element flex relative flex-row items-center gap-0 justify-center",
                [
                    "[&>:is(img,svg)]:w-12 [&>:is(img,svg)]:h-12 [&>:is(img,svg)]:pointer-events-none",
                    "xs:[&>:is(img,svg)]:w-16 xs:[&>:is(img,svg)]:h-16",
                    "sm:[&>:is(img,svg)]:w-20 sm:[&>:is(img,svg)]:h-20",
                    "lg:[&>:is(img,svg)]:w-24 lg:[&>:is(img,svg)]:h-24"
                ],
                "transition-[opacity,background-color] duration-300 ease-in-out",
                [
                    "[&.active>img]:ml-2 [&.active>.content-expansion]:pl-2 [&.active>.content-expansion]:mr-2",
                    "sm:[&.active>img]:ml-4 sm:[&.active>.content-expansion]:pl-4 sm:[&.active>.content-expansion]:mr-4",
                    "md:[&.active>img]:ml-6 md:[&.active>.content-expansion]:pl-6 md:[&.active>.content-expansion]:mr-6",
                    "lg:[&.active>img]:ml-10 lg:[&.active>.content-expansion]:pl-10 lg:[&.active>.content-expansion]:mr-10",
                ],
                className,
            )}>
            { element.customIcon || element.content.icon }
            { clickable && 
                (<AdaptiveGridElementExpansion 
                    element={element as AdaptiveGridElementProjectData} 
                    onClose={(e) => (e.stopPropagation(), setIsExpanded(false))}
                    isClicked={isExpanded} 
                />) 
            }
        </ParentElement>
    );
}

export default AdaptiveGridElement;
