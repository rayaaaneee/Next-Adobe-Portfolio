"use client";

import { useState } from "react";

import { Button } from "@/components/page-flow";
import Tooltip, { TooltipPosition, TooltipSize } from "@/components/tooltip";

import { FaC, FaCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import cn from "@/utils/function/cn";
import ClassNameInterface from "@/utils/interface/classname";

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
        <Tooltip 
            disabled={!copied} 
            text="Copied!" 
            className={cn("code-block-copy-button", className)}
            position={TooltipPosition.left}
            size={TooltipSize.md}
            >
            <Button 
                background={false}
                className="p-2 rounded-lg text-xl"
                onClick={!copied ? handleClick : undefined}>
                    {copied ? <FaCheck className="text-green-200" /> : <FaCopy />}
            </Button>
        </Tooltip>
    );
}

export default CodeBlockCopyButton;