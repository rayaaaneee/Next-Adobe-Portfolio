import { cn } from "@/lib/utils";

import { ChildrenInterface, ChildrenType } from "@/utils/interface/children";
import { Undefined } from "@/utils/types/nullable";
import ClassNameInterface from "@/utils/interface/classname";

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
}

export const HeadingOne = ({ className, children, id, icon, isAnchorLink = false }: HeadingPropsInterface) => (
    <a
        href={anchorLink(isAnchorLink, id)}
        id={id} 
        className={cn(
            "text-4xl",
            headingContainerBaseClassName(isAnchorLink), 
            className
        )}>
        {icon}
        <h1 id={id} className={cn(headingBaseClassName, className)}>
            {children}
        </h1>
    </a>
);

export const HeadingTwo = ({ className, children, id, icon, isAnchorLink = false }: HeadingPropsInterface) => (
    <a 
        href={anchorLink(isAnchorLink, id)} 
        id={id} 
        className={cn(
            "text-gray-600 text-3xl ml-4", 
            headingContainerBaseClassName(isAnchorLink), 
            className
        )}>
        {icon}
        <h2 id={id} className={cn(headingBaseClassName, className)}>
            {children}
        </h2>
    </a>
);

export const HeadingThree = ({ className, children, id, icon, isAnchorLink = false }: HeadingPropsInterface) => (
    <a
        href={anchorLink(isAnchorLink, id)}
        id={id} 
        className={cn(
            "text-gray-500 text-2xl ml-7", 
            headingContainerBaseClassName(isAnchorLink), 
            className
        )}>
        { icon }
        <h3 id={id} className={cn(headingBaseClassName, className)}>
            {children}
        </h3>
    </a>
);

export enum ParagraphAlignment {
    left = "text-left",
    center = "text-center",
    right = "text-right",
    justify = "text-justify"
}

export interface ParagraphPropsInterface extends PageFlowBaseInterface {
    alignment?: ParagraphAlignment,
    indent?: boolean,
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