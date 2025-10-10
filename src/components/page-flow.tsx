import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { ChildrenInterface, ChildrenType } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";

import { Undefined } from "@/utils/types/nullable";
import { forwardRef } from "react";

export interface PageFlowBaseInterface extends ChildrenInterface, ClassNameInterface {}


const headingContainerBaseClassName = (active: boolean) => [
    "flex flex-row gap-3 items-center justify-center mt-4 w-fit h-fit no-underline",
    { [
        `after:content-['#'] after:text-[1em] hover:after:underline after:no-underline after:opacity-0 after:transition-opacity after:duration-200
        hover:cursor-pointer hover:after:opacity-100`
    ]: active }
];
const headingBaseClassName = "font-poppins font-light hover:no-underline";

const anchorLink = (isAnchorLink: Undefined<boolean>, id: Undefined<string>): Undefined<string> => {
    if (isAnchorLink && !id) {
        throw new Error("'isAnchorLink' is set to true but 'id' is undefined. Anchor link cannot be created without an 'id'.");
    }
    return isAnchorLink ? `#${id}` : undefined;
}

export interface HeadingPropsInterface extends PageFlowBaseInterface {
    icon?: ChildrenType,
    isAnchorLink?: boolean,
    containerClassName?: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
}

export const HeadingOne = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick }, ref) => (
        <a
            ref={ref}
            href={anchorLink(isAnchorLink, id)}
            onClick={onClick}
            className={cn(
                "text-4xl",
                headingContainerBaseClassName(isAnchorLink),
                containerClassName
            )}>
            {icon}
            <h1 id={id} className={cn(headingBaseClassName, className)}>
                {children}
            </h1>
        </a>
    )
);
HeadingOne.displayName = "HeadingOne";

export const HeadingTwo = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick }, ref) => (
        <a
            ref={ref}
            href={anchorLink(isAnchorLink, id)}
            onClick={onClick}
            className={cn(
                "text-gray-600 text-3xl ml-4", 
                headingContainerBaseClassName(isAnchorLink),
                containerClassName
            )}>
            {icon}
            <h2 id={id} className={cn(headingBaseClassName, className)}>
                {children}
            </h2>
        </a>
    )
);
HeadingTwo.displayName = "HeadingTwo";

export const HeadingThree = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick }, ref) => (
        <a
            ref={ref}
            id={id}
            href={anchorLink(isAnchorLink, id)}
            onClick={onClick}
            className={cn(
                "text-gray-500 text-2xl ml-7", 
                headingContainerBaseClassName(isAnchorLink),
                containerClassName
            )}>
            {icon}
            <h3 id={id} className={cn(headingBaseClassName, className)}>
                {children}
            </h3>
        </a>
    )
);
HeadingThree.displayName = "HeadingThree";

export enum ParagraphAlignment {
    left = "text-left",
    center = "text-center",
    right = "text-right",
    justify = "text-justify"
}

export interface ParagraphPropsInterface extends PageFlowBaseInterface {
    alignment?: ParagraphAlignment,
    indent?: boolean
}

export const Paragraph = ({ className, children, id, alignment = ParagraphAlignment.left, indent = false }: ParagraphPropsInterface) => (
    <p id={id} className={cn(
        "text-xl text-gray-800 dark:text-gray-300 font-normal mt-2",
        { "first-letter:ml-10": indent },
        alignment,
        className
    )}>
        {children}
    </p>
);

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

export interface ButtonPropsInterface extends PageFlowBaseInterface {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    hover?: boolean;
}

export const Button = ({ className, children, id, onClick, hover = true }: ButtonPropsInterface) => (
    <button
        id={id} 
        onClick={onClick}
        className={cn(
            "flex items-center justify-center",
            `transition-[height,background-color]`,
            `duration-400 ease-in-out rounded-lg`,
            "w-fit h-fit overflow-hidden",
            "bg-[rgba(255,255,255,0.75)] [&.active]:bg-[rgba(245,233,225,0.75)] [&.active]:hover:bg-[rgba(219,219,219,0.75)]",
            {"cursor-pointer hover:bg-[rgba(239,239,239,0.75)]": hover},
            {"cursor-default": !hover},
            "outline-none",
            "[&.active]:scale-95",
            className,
        )}
    >
        {children}
    </button>
);