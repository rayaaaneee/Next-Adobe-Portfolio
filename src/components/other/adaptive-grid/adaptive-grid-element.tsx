"use client";

import Link from "next/link";

import { useEffect, useRef, useState, MouseEvent, Ref, CSSProperties} from "react";
import useConditionalEffect from "@/util/hook/use-conditional-effect";
import { createRoot, Root } from "react-dom/client";

import useLanguage from "@/util/hook/use-language";

import cn from "@/util/function/cn";

import { FaLink } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

import { AdaptiveGridElementData, AdaptiveGridElementProjectData } from "../adaptive-grid";
import AdaptiveGridElementExpansion from "./adaptive-grid-element-expansion";

import Tooltip, { TooltipSize } from "@/components/tooltip/tooltip";

import { HeadingTwo, Button, HeadingPropsInterface, IconPosition } from "@/components/page-flow";

import verifyReference from "@/util/function/verify-reference";

import { assertFoundTech } from "@/asset/data/home/general-technologies-list";

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

    const { tLanguageable } = useLanguage();

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
                        { tLanguageable<string>(element.content.name) }
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
                        <u>{ tLanguageable<string>(elementProjectData.content.name) }</u> 
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
                                literalText={tech.name} 
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
            onClick={clickable ? () => setIsExpanded(true) : undefined}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={element.content.link || "#"}
            target={clickable || asInternalLink ? undefined : "_blank"}
            rel={clickable ? undefined : "noreferrer"}
            style={{ "--bg-color": element.content.color } as CSSProperties}
            className={cn(
                "adaptive-grid-element group relative overflow-hidden",
                "cursor-pointer text-white size-element flex items-center justify-center",
                "transition-[background-color] duration-300 ease-in-out",
                isExpanded && "cursor-default",
                className
            )}
        >
            {/* BACKGROUND OVERLAY */}
            <span
                className={cn(
                    "absolute inset-0",
                    "bg-[var(--bg-color)]",
                    "opacity-50",
                    "transition-opacity duration-300",
                    "group-hover:opacity-90",
                    "pointer-events-none",
                    isExpanded && "opacity-90"
                )}
            />

            {/* ICON */}
            <span className={cn(
                "relative z-10",
                "[&>:is(img,svg)]:w-16 [&>:is(img,svg)]:h-16 sm:[&>:is(img,svg)]:w-24 sm:[&>:is(img,svg)]:h-24",
                "[&>:is(img,svg)]:flex [&>:is(img,svg)]:flex-shrink-0",
                isExpanded && "[&>:is(img,svg)]:mx-10",
            )}>
                {element.customIcon || element.content.icon}
            </span>

            {clickable && (
                <AdaptiveGridElementExpansion
                    element={element as AdaptiveGridElementProjectData}
                    onClose={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                    }}
                    isClicked={isExpanded}
                />
            )}
        </ParentElement>
    );
}

export default AdaptiveGridElement;
