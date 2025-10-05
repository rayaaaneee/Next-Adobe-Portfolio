import { cn } from "@/lib/utils"
import { ChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";

export interface PageFlowBaseInterface extends ChildrenInterface, ClassNameInterface {}

export const HeadingOne = ({ className, children, id }: PageFlowBaseInterface) => (
    <h1 id={id} className={cn("text-4xl font-poppins font-light", className)}>
        {children}
    </h1>
);

export const HeadingTwo = ({ className, children, id }: PageFlowBaseInterface) => (
    <h2 id={id} className={cn("text-3xl text-gray-600 font-poppins font-light mt-4", className)}>
        {children}
    </h2>
);

export const HeadingThree = ({ className, children, id }: PageFlowBaseInterface) => (
    <h3 id={id} className={cn("text-2xl text-gray-500 font-poppins font-light mt-4", className)}>
        {children}
    </h3>
);

export const Paragraph = ({ className, children, id }: PageFlowBaseInterface) => (
    <p id={id} className={cn("text-xl text-gray-800 dark:text-gray-300 font-normal mt-2", className)}>
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