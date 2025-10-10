"use client";

import { useRef, useState } from 'react';
import useConditionalEffect from '@/utils/hook/use-conditionnal-effect';

import { cn } from '@/lib/utils';

import { HeadingThree } from '../page-flow';

import ClassNameInterface from '@/utils/interface/classname';
import verifyReference from '@/utils/function/verify-reference';

interface AdaptableGridSeeMoreButtonProps extends ClassNameInterface {
    id: string;
    nbWrappers: number;
}

const AdaptableGridSeeMoreButton = ({ className, id, nbWrappers }: AdaptableGridSeeMoreButtonProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const seeMoreButtonRef = useRef<HTMLAnchorElement | null>(null);

    const initialText = `See ${nbWrappers - 1} more ${nbWrappers - 1 > 1 ? "rows" : "row"}`;
    const transitionDuration = 75;
    const heightClassToggled = "!h-0";

    const toggleLastWrappers = () => {

        verifyReference<HTMLAnchorElement>(seeMoreButtonRef, "seeMoreButtonRef");

        const anchorElement = seeMoreButtonRef.current!.closest(".adaptable-grid");

        if (!anchorElement) throw new Error("No adaptable-grid ancestor found for the see more button.");

        const wrappers = anchorElement.querySelectorAll(".wrapper");

        if (wrappers.length === 0) throw new Error("No wrapper found in the adaptable-grid.");

        for (let i = 1; i < wrappers.length; i++) {
            const wrapper = wrappers[i] as HTMLElement;
            if (isExpanded) {
                // on open
                setTimeout(() => {
                    wrapper.classList.remove(heightClassToggled);
                }, transitionDuration + 200);
            } else {
                // on close
                wrapper.classList.add(heightClassToggled);
            }
        }
    }

    useConditionalEffect(() => {

        verifyReference(seeMoreButtonRef, "seeMoreButtonRef");

        const text: string = isExpanded ? "See less" : initialText;

        seeMoreButtonRef.current!.classList.add(heightClassToggled);

        setTimeout(() => {

            seeMoreButtonRef.current!.textContent = text;
            seeMoreButtonRef.current?.classList.remove(heightClassToggled);
            setTimeout(() => toggleLastWrappers(), transitionDuration);
            
        }, transitionDuration);

    }, [isExpanded]);

    return (
        <HeadingThree
            ref={seeMoreButtonRef} 
            onClick={() => setIsExpanded(!isExpanded)}
            id={`see-more-${id}`} 
            className='m-0'
            containerClassName={cn(
                "m-0 flex items-center justify-center",
                `transition-[height,background-color]`,
                `duration-${1000} ease-in-out`,
                "w-full h-16 cursor-pointer overflow-hidden",
                "bg-[rgba(255,255,255,0.75)] hover:bg-[rgba(239,239,239,0.75)]",
                className
            )}>
            {initialText}
        </HeadingThree>
    )
}

export default AdaptableGridSeeMoreButton;