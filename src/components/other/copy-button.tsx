"use client";

import { useState } from "react";

import { FaCheck, FaCopy } from "react-icons/fa6";

import { Button } from "@/components/page-flow";
import Tooltip, { TooltipPosition, TooltipSize } from "@/components/tooltip/tooltip";

import cn from "@/util/function/cn";

import ClassNameInterface from "@/util/interface/classname";
import { ChildrenType } from "@/util/interface/children";
import { languageKey } from "@/util/type/language-key";

export interface CopyButtonProps extends ClassNameInterface {
    text: string;
    tooltipText?: languageKey;
    tooltipCopiedText?: languageKey;
    resetTooltipOnLeaving?: boolean;
    tooltipClassName?: string;
    tooltipPosition?: TooltipPosition;
    tooltipSize?: TooltipSize;
    customIcon?: ChildrenType;
    changeIconOnCopy?: boolean;
    copiedIconClassName?: string;
    keepTooltipTextOnCopy?: boolean;
    alwaysShowTooltip?: boolean;
}

const CopyButton = ({ 
    text, 
    tooltipText, 
    tooltipCopiedText, 
    resetTooltipOnLeaving = false,
    className, 
    tooltipClassName, 
    tooltipPosition, 
    tooltipSize = TooltipSize.md, 
    customIcon, 
    changeIconOnCopy = true, 
    copiedIconClassName,
    keepTooltipTextOnCopy = true, 
    alwaysShowTooltip = false 
}: CopyButtonProps) => {

    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            if (!resetTooltipOnLeaving) setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error(`Failed to copy text: ${text}`, error);
        }
    };

    return (
        <Tooltip
            disabled={!alwaysShowTooltip && !copied}
            text={copied ? tooltipCopiedText : tooltipText}
            className={cn("copy-button cursor-pointer", className)}
            tooltipClassName={tooltipClassName}
            position={tooltipPosition}
            onClick={!copied ? handleClick : undefined}
            onMouseLeave={resetTooltipOnLeaving ? () => setCopied(false) : undefined}
            size={tooltipSize}
            forceShow={keepTooltipTextOnCopy}
            >
            <Button 
                background={false}>
                    {(copied && changeIconOnCopy ? <FaCheck className={copiedIconClassName} /> : (customIcon ? customIcon : <FaCopy />))}
            </Button>
        </Tooltip>
    );
}

export default CopyButton;