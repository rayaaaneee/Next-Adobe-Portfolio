import cn from "@/utils/function/cn";

import { ChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";
import StyleInterface from "@/utils/interface/style";

export interface MainPartProps extends ClassNameInterface, ChildrenInterface, StyleInterface {};

const MainPart = ({ className, id, children, style }: MainPartProps) => {
    return (
        <main 
        id={id} 
        style={style}
        className={cn(
            "justify-self-center rounded-none md:rounded-md h-fit",
            "to-animate fade anim-delay-200 anim-duration-300",
            "bg-white/50 dark:bg-[rgb(0,0,0,0.8)] backdrop-blur-md",
            "box-border overflow-hidden",
            "w-[100vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-0 md:my-[5vw] lg:my-10",
            "[&>article]:mx-5 sm:[&>article]:mx-7 md:[&>article]:mx-10 xl:[&>article]:mx-20",
            className
        )}>
            { children }
        </main>
    )
}

export default MainPart;