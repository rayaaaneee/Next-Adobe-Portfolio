import { forwardRef } from "react";
import cn from "@/util/function/cn";

import Link from "next/link";

import { type PageFlowBaseInterface } from "../types/page-flow-interface";


export const SmallText = ({ className, children, id }: PageFlowBaseInterface) => (
    <span id={id} className={cn("text-sm text-gray-500 dark:text-gray-400 font-light", className)}>
        {children}
    </span>
);

export const ItalicText = ({ className, children, id }: PageFlowBaseInterface) => (
    <em id={id} className={cn("italic", className)}>
        {children}
    </em>
);

export const BoldText = ({ className, children, id }: PageFlowBaseInterface) => (
    <strong id={id} className={cn("font-semibold", className)}>
        {children}
    </strong>
);

export const UnderlineText = ({ className, children, id }: PageFlowBaseInterface) => (
    <u id={id} className={cn("underline", className)}>
        {children}
    </u>
);

export const AnchorLinkText = forwardRef<HTMLAnchorElement, PageFlowBaseInterface & { href: string }>(
    ({ className, children, id, href}, ref) => {

        const ParentLink = href.startsWith("/") ? Link : "a";

        return (
            <ParentLink
                ref={ref}
                id={id ? id : undefined}
                href={href}
                className={cn("underline underline-offset-2 font-semibold",className)}
            >
                {children}
            </ParentLink>
        )
    }
);
AnchorLinkText.displayName = "AnchorLinkText";