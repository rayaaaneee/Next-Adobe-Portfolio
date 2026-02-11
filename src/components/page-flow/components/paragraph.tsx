import cn from "@/util/function/cn";

import { type ParagraphPropsInterface } from "../types/page-flow-interface";

import { ParagraphAlignment } from "../types/paragraph-alignment";

export const Paragraph = ({ className, children, id, alignment = ParagraphAlignment.left, indent = false, innerHtml, stylized = false }: ParagraphPropsInterface) => (
    <p id={id} className={cn(
        "text-sm sm:text-base lg:text-lg xl:text-xl",
        [ stylized ? 
            "text-sm text-gray-500 dark:text-gray-400" 
            : 
            "text-gray-800 dark:text-gray-300 font-normal mt-2" 
        ],
        { "first-letter:ml-7 lg:first-letter:ml-10": indent },
        alignment,
        className
    )} dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : undefined}>
        {children}
    </p>
);