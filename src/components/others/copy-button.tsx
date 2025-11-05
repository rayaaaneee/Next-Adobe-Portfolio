"use client";

import { useState } from "react";

import { Button } from "@/components/page-flow";
import Tooltip, { TooltipPosition, TooltipSize } from "@/components/tooltip";

import cn from "@/utils/function/cn";
import ClassNameInterface from "@/utils/interface/classname";
import { ChildrenType } from "@/utils/interface/children";

export interface CopyButtonProps extends ClassNameInterface {
    text: string;
    icon: ChildrenType;
    copiedIcon?: ChildrenType;
}

const CopyButton = ({ text, className, icon, copiedIcon = icon }: CopyButtonProps) => {

    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error(`Failed to copy text: ${text}`, error);
        }
    };

    return (
        <Tooltip
            disabled={!copied} 
            text="Copied!" 
            className={cn("code-block-copy-button", className)}
            tooltipClassName={cn("text-white bg-[#90A4AE]", "dark:text-black dark:bg-[#C6D0F5]")}
            position={TooltipPosition.left}
            size={TooltipSize.md}
            forceShow
            >
            <Button 
                background={false}
                className="p-2 rounded-lg text-xl"
                onClick={!copied ? handleClick : undefined}>
                    {copied ? copiedIcon : icon}
            </Button>
        </Tooltip>
    );
}

export default CopyButton;