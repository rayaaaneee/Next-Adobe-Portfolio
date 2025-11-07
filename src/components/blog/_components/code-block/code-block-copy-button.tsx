import cn from "@/util/function/cn";

import { TooltipPosition } from "@/components/tooltip";

import CopyButton from "@/components/other/copy-button";

import ClassNameInterface from "@/util/interface/classname";

export interface CodeBlockCopyButtonProps extends ClassNameInterface {
    code: string;
}

const CodeBlockCopyButton = ({ code, className }: CodeBlockCopyButtonProps) => {
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