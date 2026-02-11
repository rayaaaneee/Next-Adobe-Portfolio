import { forwardRef } from "react";

import cn from "@/util/function/cn";

import { AnchorLinkButtonPropsInterface, ButtonPropsInterface } from "../types/page-flow-interface";

export const Button = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
    ({ className, children, id, onClick, hover = true, background = true }, ref) => (
        <button
            ref={ref}
            id={id ? id : undefined}
            onClick={onClick}
            className={cn(
                "flex items-center justify-center",
                `transition-[height,background-color,transform]`,
                `duration-400 ease-in-out rounded-lg`,
                "w-fit h-fit",
                [ background && "bg-[rgba(255,255,255,0.75)] [&.active]:bg-[rgba(245,233,225,0.75)]" ],
                [ background && "dark:bg-[rgba(32,32,32,0.50)] dark:[&.active]:bg-[rgba(50,50,50,0.70)]" ],
                [ background && hover && 
                    ["cursor-pointer hover:bg-[rgba(234,234,234,0.75)] dark:hover:bg-[rgba(70,70,70,0.75)]",
                    "[&.active]:hover:bg-[rgba(219,219,219,0.75)] dark:[&.active]:hover:bg-[rgba(90,90,90,0.90)]"]
                ],
                [ hover ? "cursor-pointer" : "cursor-default" ],
                "outline-none",
                "[&.active]:scale-95",
                className,
            )}
        >
            {children}
        </button>
    )
);
Button.displayName = "Button";

export const AnchorLinkButton = forwardRef<HTMLAnchorElement, AnchorLinkButtonPropsInterface>(
    ({ className, children, id, onClick, href, buttonClassName, style, background = true }, ref) => (
        <a
            ref={ref}
            id={id ? id : undefined}
            href={href}
            className={cn(className)}
            style={style}
            target="_blank"
            rel="noreferrer"
            onClick={onClick}>
                <Button className={cn("w-full h-full", buttonClassName)} background={background}>
                    {children}
                </Button>
        </a>
    )
);
AnchorLinkButton.displayName = "AnchorLinkButton";