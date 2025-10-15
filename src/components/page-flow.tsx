import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { ChildrenType, OptionalChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";
import StylesInterface from "@/utils/interface/style";

import { Undefined } from "@/utils/types/nullable";
import { forwardRef } from "react";

export interface PageFlowBaseInterface extends OptionalChildrenInterface, ClassNameInterface, StylesInterface {};

const headingContainerBaseClassName = (active: boolean, hasIcon: boolean) => [
    "flex flex-row gap-3 items-center justify-center mt-4 w-fit h-fit no-underline",
    "[&>*:not(h1)]:transition-transform [&>*:not(h1,h2,h3)]:duration-100 [&>*:not(h1,h2,h3)]:ease-in-out",
    {
        ["group"]: (active || hasIcon)
    },
    { [
        `after:content-['#'] after:text-[1em] hover:after:underline after:no-underline after:opacity-0 after:transition-opacity after:duration-200
        hover:cursor-pointer hover:after:opacity-100`
    ]: active }
];
const headingBaseClassName = "font-poppins font-light hover:no-underline";
const iconContainerBaseClassName = "group-hover:scale-90";

const anchorLink = (isAnchorLink: Undefined<boolean>, id: Undefined<string>): Undefined<string> => {
    if (isAnchorLink && !id) {
        throw new Error("'isAnchorLink' is set to true but 'id' is undefined. Anchor link cannot be created without an 'id'.");
    }
    return isAnchorLink ? `#${id}` : undefined;
}

export enum IconPosition {
    left = "left",
    right = "right"
}

export interface HeadingPropsInterface extends PageFlowBaseInterface {
    isAnchorLink?: boolean,
    containerClassName?: string,
    icon?: ChildrenType, // Expected to be an SVG icon
    iconPosition?: IconPosition,
    iconScale?: boolean,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
    href?: string
}

export const HeadingOne = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick, href, iconPosition = IconPosition.left, iconScale = false }, ref) => {

        const iconElement = <div className={cn(iconScale && iconContainerBaseClassName)}>{icon}</div>;

        return (
        <a
            ref={ref}
            href={href || anchorLink(isAnchorLink, id)}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            onClick={onClick}
            className={cn(
                "text-4xl text-black dark:text-white w-fit",
                headingContainerBaseClassName(isAnchorLink, (icon !== undefined)),
                containerClassName
            )}>
            {(icon && iconPosition === IconPosition.left) && iconElement}
            <h1 id={id} className={cn(headingBaseClassName, className)}>
                {children}
            </h1>
            {(icon && iconPosition === IconPosition.right) && iconElement}
        </a>
    )
});
HeadingOne.displayName = "HeadingOne";

export const HeadingTwo = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick, href, iconPosition = IconPosition.left, iconScale = false }, ref) => {

        const iconElement = <div className={cn(iconScale && iconContainerBaseClassName)}>{icon}</div>;

        return (<a
            ref={ref}
            href={href || anchorLink(isAnchorLink, id)}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            onClick={onClick}
            className={cn(
                "text-gray-600 dark:text-gray-300 text-3xl ml-4", 
                headingContainerBaseClassName(isAnchorLink, (icon !== undefined)),
                containerClassName
            )}>
            {(icon && iconPosition === IconPosition.left) && iconElement}
            <h2 id={id} className={cn(headingBaseClassName, className)}>
                {children}
            </h2>
            {(icon && iconPosition === IconPosition.right) && iconElement}
        </a>
    )
});
HeadingTwo.displayName = "HeadingTwo";

export const HeadingThree = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName, onClick, href, iconPosition = IconPosition.left, iconScale = false }, ref) => {

        const iconElement = <div className={cn(iconScale && iconContainerBaseClassName)}>{icon}</div>;

        return (
            <a
            ref={ref}
            id={id}
            href={href || anchorLink(isAnchorLink, id)}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            onClick={onClick}
            className={cn(
                "text-gray-500 dark:text-gray-400 text-2xl ml-7", 
                headingContainerBaseClassName(isAnchorLink, (icon !== undefined)),
                containerClassName
            )}>
            {(icon && iconPosition === IconPosition.left) && iconElement}
            <h3 id={`text-${id}`} className={cn(headingBaseClassName, className)}>
                {children}
            </h3>
            {(icon && iconPosition === IconPosition.right) && iconElement}
        </a>
    )
});
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
    innerHtml?: string
}

export const Paragraph = ({ className, children, id, alignment = ParagraphAlignment.left, indent = false, innerHtml }: ParagraphPropsInterface) => (
    <p id={id} className={cn(
        "text-xl text-gray-800 dark:text-gray-300 font-normal mt-2",
        { "first-letter:ml-10": indent },
        alignment,
        className
    )} dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : undefined}>
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
    background?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
    ({ className, children, id, onClick, hover = true, background = true }, ref) => (
        <button
            ref={ref}
            id={id}
            onClick={onClick}
            className={cn(
                "flex items-center justify-center",
                `transition-[height,background-color,transform]`,
                `duration-400 ease-in-out rounded-lg`,
                "w-fit h-fit",
                [ background && "bg-[rgba(255,255,255,0.75)] [&.active]:bg-[rgba(245,233,225,0.75)]" ],
                [ background && "dark:bg-[rgba(32,32,32,0.50)] dark:[&.active]:bg-[rgba(50,50,50,0.70)]" ],
                [ background && hover && 
                    ["cursor-pointer hover:bg-[rgba(239,239,239,0.75)] dark:hover:bg-[rgba(70,70,70,0.75)]",
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


export interface AnchorLinkButtonPropsInterface extends Omit<ButtonPropsInterface, 'onClick'> {
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    buttonClassName?: string;
}

export const AnchorLinkButton = forwardRef<HTMLAnchorElement, AnchorLinkButtonPropsInterface>(
    ({ className, children, id, onClick, href, buttonClassName, style, background = true }, ref) => (
        <a
            ref={ref}
            id={id}
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
