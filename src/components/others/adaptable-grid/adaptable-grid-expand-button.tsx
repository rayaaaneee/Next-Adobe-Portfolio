"use client";

import { useRef, useState } from 'react';
import useConditionalEffect from '@/utils/hook/use-conditional-effect';

import cn from "@/utils/function/cn";

import { HeadingThree, IconPosition } from '@/components/page-flow';

import { FaPlus, FaMinus } from "react-icons/fa6";

import ClassNameInterface from '@/utils/interface/classname';
import verifyReference from '@/utils/function/verify-reference';
import AdaptableGridTopBottomPart from './adaptable-grid-top-bottom-part';

interface AdaptableGridSeeMoreButtonProps extends ClassNameInterface {
    id: string;
    nbWrappers: number;
}

const AdaptableGridExpandButton = ({ className, id, nbWrappers }: AdaptableGridSeeMoreButtonProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const seeMoreButtonRef = useRef<HTMLButtonElement | null>(null);

    const isInteractive: boolean = nbWrappers > 1;

    const initialText = (isInteractive) ? 
        "Expand"
            : 
        "";
    const transitionDuration = 75;
    const heightClassToggled = "!h-0";

    const toggleLastWrappers = () => {

        verifyReference<HTMLButtonElement>(seeMoreButtonRef, "seeMoreButtonRef");

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
                }, transitionDuration);
            } else {
                // on close
                wrapper.classList.add(heightClassToggled);
            }
        }
    }

    useConditionalEffect(() => {

        verifyReference(seeMoreButtonRef, "seeMoreButtonRef");

        const text: string = isExpanded ? "Dismiss" : initialText;

        seeMoreButtonRef.current!.classList.add(heightClassToggled);

        setTimeout(() => {

            seeMoreButtonRef.current!.querySelector("h3")!.textContent = text;

            setTimeout(() => {
                toggleLastWrappers();
                seeMoreButtonRef.current?.classList.remove(heightClassToggled);
            }, transitionDuration);
            
        }, transitionDuration);

    }, [isExpanded]);

    return (
        <AdaptableGridTopBottomPart 
            className='adaptable-grid-bottom-part' 
            id={`see-more-button-${id}`} 
            ref={seeMoreButtonRef} 
            hover={isInteractive}>
            <HeadingThree 
                onClick={isInteractive ? () => setIsExpanded(!isExpanded) : undefined}
                id={`see-more-${id}`} 
                className='m-0'
                icon={isInteractive && (isExpanded ? <FaMinus /> : <FaPlus />)}
                iconPosition={IconPosition.right}
                containerClassName={cn(
                    "see-more-button",
                    "dark:text-gray-200",
                    { ["expanded"]: isExpanded },
                    "!m-0 w-full h-full flex items-center justify-center",
                    className
                )}>
                {initialText}
            </HeadingThree>
        </AdaptableGridTopBottomPart>
    )
}

export default AdaptableGridExpandButton;