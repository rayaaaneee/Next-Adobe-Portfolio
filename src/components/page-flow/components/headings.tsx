import { forwardRef, JSX } from "react";
import cn from "@/util/function/cn";

import { HeadingPropsInterface } from "../types/page-flow-interface";

import HeadingType from "../types/heading-type";

import { IconPosition } from "../types/icon-position";

import { Undefined } from "@/util/type/nullable";

import hash from "hash-sum";

const headingContainerBaseClassName = (active: boolean, hasIcon: boolean) => [
    "flex flex-row gap-3 items-center justify-center w-fit h-fit no-underline",
    "[&>*:not(h1)]:transition-transform [&>*:not(h1,h2,h3)]:duration-100 [&>*:not(h1,h2,h3)]:ease-in-out",
    ["mt-2 xl:mt-4"],
    {
        ["group"]: (active || hasIcon)
    },
    { [
        `after:content-['#'] after:self-start after:text-[1em] hover:after:underline after:no-underline after:opacity-0 after:transition-opacity after:duration-200
        hover:cursor-pointer hover:after:opacity-100`
    ]: active }
];
const headingBaseClassName = "font-poppins font-light hover:no-underline";
const iconContainerBaseClassName = "group-hover:scale-90";

const Heading = forwardRef<HTMLAnchorElement, HeadingPropsInterface & { type: HeadingType }>(
    ({ className, children, id, icon, isAnchorLink = false, containerClassName,
            onClick, href, iconPosition = IconPosition.left, iconScale = false, type }, ref) => {

    const iconElement = <div className={cn(iconScale && iconContainerBaseClassName)}>{icon}</div>;

    const textId: Undefined<string> = id ? id : (isAnchorLink ? `${type}${hash({ children, type })}` : undefined);

    const getClassName = (): string[] => {
        switch (type) {
            case HeadingType.h1:
                return [
                    "heading-one",
                    "text-xl sm:text-2xl lg:text-3xl xl:text-4xl",
                    "text-black dark:text-white font-normal w-fit"
                ];
            case HeadingType.h2:
                return [
                    "heading-two",
                    "text-lg sm:text-xl lg:text-2xl xl:text-3xl",
                    "text-gray-600 dark:text-gray-300 ml-4", 
                ];
            case HeadingType.h3:
                return [
                    "heading-three",
                    "text- sm:text-lg lg:text-xl xl:text-2xl ",
                    "xs:ml-4 sm:ml-5 md:ml-6 xl:ml-7",
                    "text-gray-500 dark:text-gray-400", 
                ];
            case HeadingType.h4:
                return [
                    "heading-four",
                    "text-sm sm:text-base lg:text-lg xl:text-xl",
                    "ml-6",
                    "text-gray-400 dark:text-gray-500", 
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

export const HeadingFour = forwardRef<HTMLAnchorElement, HeadingPropsInterface>(
    (props, ref) => {
        return <Heading ref={ref} type={HeadingType.h4} {...props} />;
});
HeadingFour.displayName = "HeadingFour";