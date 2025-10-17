import Link from "next/link";
import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import ClassNameInterface from "@/utils/interface/classname";

export interface QuitButtonProps extends ClassNameInterface {
    onClick?: MouseEventHandler<HTMLSpanElement> | MouseEventHandler<HTMLAnchorElement>;
    title?: string;
    href?: string;
}

const QuitButton = ({ id, className, onClick, title, href }: QuitButtonProps) => {

    const baseProps = {
        id,
        className: cn(
            "z-10",
            "bg-white hover:bg-red-500 cursor-pointer rounded-full transition-[opacity,background-color] duration-[400ms,300ms] ease-[linear,ease-in-out]",
            className
        ),
        onClick,
        title: title && `Close ${title}`,
    };

    if (href) return (<Link href={href} {...baseProps}></Link>);
    else return (<span {...baseProps}></span>);
}

export default QuitButton;
