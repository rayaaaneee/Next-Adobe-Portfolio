import { MouseEventHandler } from "react";

import cn from "@/util/function/cn";

import ClassNameInterface from "@/util/interface/classname";

export interface QuitButtonProps extends ClassNameInterface {
    onClick?: MouseEventHandler<HTMLSpanElement> | MouseEventHandler<HTMLAnchorElement>;
    title?: string;
}

const QuitButton = ({ id, className, onClick, title }: QuitButtonProps) => {

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

    return (<span {...baseProps}></span>);
}

export default QuitButton;
