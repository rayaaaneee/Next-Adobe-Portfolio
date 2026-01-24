"use client";

import { useRef, useState } from 'react';
import useLanguage from '@/util/hook/use-language';
import useConditionalEffect from '@/util/hook/use-conditional-effect';

import cn from "@/util/function/cn";

import { HeadingThree, IconPosition } from '@/components/page-flow';

import { FaPlus, FaMinus } from "react-icons/fa6";

import ClassNameInterface from '@/util/interface/classname';
import verifyReference from '@/util/function/verify-reference';
import AdaptiveGridTopBottomPart from './adaptive-grid-top-bottom-part';

interface AdaptiveGridExpandButtonProps extends ClassNameInterface {
    id: string;
    nbWrappers: number;
}

const AdaptiveGridExpandButton = ({ className, id, nbWrappers }: AdaptiveGridExpandButtonProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const { t } = useLanguage();

    const expandButtonRef = useRef<HTMLButtonElement | null>(null);

    const isInteractive: boolean = nbWrappers > 1;

    const initialText = (isInteractive) ? 
        (isExpanded ? t('adaptive_grid.dismiss') : t('adaptive_grid.expand'))
            : 
        "";
        
    const heightClassToggled = "!h-0";

    const toggleLastWrappers = () => {

        verifyReference<HTMLButtonElement>(expandButtonRef, "expandButtonRef");

        const anchorElement = expandButtonRef.current!.closest(".adaptive-grid");

        if (!anchorElement) throw new Error("No adaptive-grid ancestor found for the see more button.");

        const wrappers = anchorElement.querySelectorAll(".wrapper");

        if (wrappers.length === 0) throw new Error("No wrapper found in the adaptive-grid.");

        for (let i = 1; i < wrappers.length; i++) {
            const wrapper = wrappers[i] as HTMLElement;
            if (isExpanded) {
                // on open
                wrapper.classList.remove(heightClassToggled);
            } else {
                // on close
                wrapper.classList.add(heightClassToggled);
            }
        }
    }

    useConditionalEffect(() => {

        verifyReference(expandButtonRef, "expandButtonRef");

        const text: string = isExpanded ? t('adaptive_grid.dismiss') : initialText;

        expandButtonRef.current!.querySelector("h3")!.textContent = text;

        toggleLastWrappers();

    }, [isExpanded]);

    return (
        <AdaptiveGridTopBottomPart 
            className='adaptive-grid-bottom-part' 
            id={`expand-button-${id}`} 
            ref={expandButtonRef} 
            hover={isInteractive}>
            <HeadingThree 
                onClick={isInteractive ? () => setIsExpanded(!isExpanded) : undefined}
                id={`expand-${id}`} 
                className='m-0'
                icon={isInteractive && (isExpanded ? <FaMinus /> : <FaPlus />)}
                iconPosition={IconPosition.right}
                containerClassName={cn(
                    "expand-button",
                    "dark:text-gray-200",
                    { ["expanded"]: isExpanded },
                    "!m-0 w-full h-full flex items-center justify-center",
                    className
                )}>
                {initialText}
            </HeadingThree>
        </AdaptiveGridTopBottomPart>
    )
}

export default AdaptiveGridExpandButton;