"use client";

import { useState } from "react";

import { Button } from "@/components/page-flow";
import Tooltip, { TooltipPosition, TooltipSize } from "@/components/tooltip";

import { FaCopy, FaCheck } from "react-icons/fa6";

import cn from "@/util/function/cn";
import ClassNameInterface from "@/util/interface/classname";
import CopyButton from "@/components/others/copy-button";

export interface CodeBlockCopyButtonProps extends ClassNameInterface {
    code: string;
}

const CodeBlockCopyButton = ({ code, className }: CodeBlockCopyButtonProps) => {

    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error(`Failed to copy text: ${code}`, error);
        }
    };

    return (
        <CopyButton 
            text={code}
            className={cn("code-block-copy-button text-xl mr-2", className)}
            copiedIconClassName="text-green-400 dark:text-green-200"
            tooltipPosition={TooltipPosition.left}
            tooltipClassName={cn("text-white bg-[#90A4AE]", "dark:text-black dark:bg-[#C6D0F5]")}
        />
    );
}

export default CodeBlockCopyButton;