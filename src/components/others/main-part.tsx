import { CSSProperties } from "react";

import cn from "@/utils/function/cn";

import ChildrenInterface from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";
import StyleInterface from "@/utils/interface/style";

export interface MainPartProps extends ClassNameInterface, ChildrenInterface, StyleInterface {
    fullWidth?: boolean;
};

const MainPart = ({ className, id, children, style, fullWidth = false }: MainPartProps) => {
    return (
        <main 
        id={id} 
        style={{
            ...style,
            "--color": "rgb(255,255,255,0.5)",
            "--dark-color": "rgb(0,0,0,0.8)",
        } as CSSProperties}
        className={cn(
            "justify-self-center rounded-none md:rounded-md h-fit mx-auto",
            "to-animate fade anim-delay-200 anim-duration-300",
            "bg-[var(--color)] dark:bg-[var(--dark-color)] backdrop-blur-md",
            "box-border overflow-hidden",
            (fullWidth ?
                [
                    "w-full min-h-screen h-fit",
                    "py-0 md:py-[5vw] lg:py-10",
                    "[&>article]:mx-5 sm:[&>article]:mx-[10%] md:[&>article]:mx-[17%] lg:[&>article]:mx-[22%] xl:[&>article]:mx-[28%]"
                ]
            :
                [
                    "w-[100vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
                    "my-0 md:my-[5vw] lg:my-10",
                    "[&>article]:mx-5 sm:[&>article]:mx-7 md:[&>article]:mx-10 xl:[&>article]:mx-20",
                ]
            ),
            className
        )}>
            { children }
        </main>
    )
}

export default MainPart;