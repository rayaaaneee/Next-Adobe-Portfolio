import { forwardRef, JSX, MouseEventHandler } from "react";

import cn from "@/utils/function/cn";

import { Undefined } from "@/utils/types/nullable";

import { type ChildrenType, OptionalChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";
import StylesInterface from "@/utils/interface/style";

import hash from "hash-sum";

export interface PageFlowBaseInterface extends OptionalChildrenInterface, ClassNameInterface, StylesInterface {};

const headingContainerBaseClassName = (active: boolean, hasIcon: boolean) => [
    "flex flex-row gap-3 items-center justify-center w-fit h-fit no-underline",
    "[&>*:not(h1)]:transition-transform [&>*:not(h1,h2,h3)]:duration-100 [&>*:not(h1,h2,h3)]:ease-in-out",
    ["mt-2 xl:mt-4"],
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

export enum IconPosition {
    left = "left",
    right = "right"
}

interface HeadingWithHref {
    href: string;
    isAnchorLink?: false;
}

interface HeadingWithoutHref {
    href?: undefined;
    isAnchorLink?: boolean;
}

export type HeadingPropsInterface = PageFlowBaseInterface & (HeadingWithHref | HeadingWithoutHref) & {
    containerClassName?: string,
    icon?: ChildrenType, // Expected to be an SVG icon
    iconPosition?: IconPosition,
    iconScale?: boolean,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
}

enum HeadingType {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3"
};

const Heading = forwardRef<HTMLAnchorElement, HeadingPropsInterface & { type: HeadingType }>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName,
            onClick, href, iconPosition = IconPosition.left, iconScale = false, type }, ref) => {

    const iconElement = <div className={cn(iconScale && iconContainerBaseClassName)}>{icon}</div>;

    const textId: Undefined<string> = id ? id : (isAnchorLink ? `${type}-${hash({ children, type })}` : undefined);

    const getClassName = (): string[] => {
        switch (type) {
            case HeadingType.h1:
                return [
                    "text-xl sm:text-2xl lg:text-3xl xl:text-4xl",
                    "text-black dark:text-white font-normal w-fit"
                ];
            case HeadingType.h2:
                return [
                    "text-lg sm:text-xl lg:text-2xl xl:text-3xl",
                    "text-gray-600 dark:text-gray-300 ml-4", 
                ];
            case HeadingType.h3:
                return [
                    "xs:text-base sm:text-lg lg:text-xl xl:text-2xl ",
                    "xs:ml-4 sm:ml-5 md:ml-6 xl:ml-7",
                    "text-gray-500 dark:text-gray-400", 
                ];
            default:
                throw new Error(`Unknown heading type: ${type}`);
        }
    }

    const ParentType = type as keyof JSX.IntrinsicElements;

    return (
        <a
            ref={ref}
            href={href || (isAnchorLink ? ((textId) && `#${textId}`) : undefined)}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            onClick={onClick}
            className={cn(
                [getClassName() as string[]],
                headingContainerBaseClassName(isAnchorLink, (icon !== undefined)),
                containerClassName
            )}>
            {(icon && iconPosition === IconPosition.left) && iconElement}
            <ParentType id={id ? id : textId} className={cn(headingBaseClassName, className)}>
                {children}
            </ParentType>
            {(icon && iconPosition === IconPosition.right) && iconElement}
        </a>
    );
});
Heading.displayName = "Heading";

export const HeadingOne = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    (props, ref) => {
        return <Heading ref={ref} type={HeadingType.h1} {...props} />;
});
HeadingOne.displayName = "HeadingOne";

export const HeadingTwo = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    (props, ref) => {
        return <Heading ref={ref} type={HeadingType.h2} {...props} />;
});
HeadingTwo.displayName = "HeadingTwo";

export const HeadingThree = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    (props, ref) => {
        return <Heading ref={ref} type={HeadingType.h3} {...props} />;
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
        "text-sm sm:text-base lg:text-lg xl:text-xl",
        "text-gray-800 dark:text-gray-300 font-normal mt-2",
        { "first-letter:ml-7 lg:first-letter:ml-10": indent },
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