import { CSSProperties } from "react";

import cn from "@/util/function/cn";

import ChildrenInterface, { ChildrenType } from "@/util/interface/children";
import ClassNameInterface from "@/util/interface/classname";
import StyleInterface from "@/util/interface/style";

export interface MainPartPropsFullWidth extends ClassNameInterface, ChildrenInterface, StyleInterface {
    fullWidth?: true;
    leftSidebar?: ChildrenType;
    leftSidebarClassName?: string;
    rightSidebar?: ChildrenType;
    rightSidebarClassName?: string;
    containerClassName?: string;
};

export interface MainPartPropsNotFullWidth extends ClassNameInterface, ChildrenInterface, StyleInterface {
    fullWidth?: false;
    leftSidebar?: never;
    leftSidebarClassName?: never;
    rightSidebar?: never;
    rightSidebarClassName?: never;
    containerClassName?: never;
}

export type MainPartCombinedProps = MainPartPropsFullWidth | MainPartPropsNotFullWidth;

const MainPart = ({ className, id, children, style, fullWidth = false, leftSidebarClassName, containerClassName, rightSidebarClassName, leftSidebar = <></>, rightSidebar = <></> }: MainPartCombinedProps) => {
    return (
        <main 
        id={id} 
        style={{
            ...style,
            "--alpha": "0.7",
            "--color": "rgb(255,255,255,var(--alpha))",
            "--dark-color": "rgb(0,0,0,calc(var(--alpha) * 1.15))",
        } as CSSProperties}
        className={cn(
            "relative justify-self-center rounded-none md:rounded-md h-fit mx-auto",
            "to-animate fade anim-delay-200 anim-duration-300",
            "bg-[var(--color)] dark:bg-[var(--dark-color)]",
            // "backdrop-blur-md",
            "box-border overflow-hidden",
            (fullWidth ?
                [
                    "w-full min-h-screen h-fit grid gap-5",

                    // Colonnes = anciens mx transformés en grid
                    "grid-cols-[1fr]",
                    "md:grid-cols-[17%_1fr_17%]",
                    "lg:grid-cols-[22%_1fr_22%]",
                    "xl:grid-cols-[28%_1fr_28%]",

                    // paddings verticaux conservés
                    "pb-0 md:pb-[5vw] lg:pb-10",
                    "pt-10 md:pt-[7vw] lg:pt-[4.5rem]"
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
            {fullWidth ? (
                <>
                    <div id="left-sidebar" className={cn("relative items-start justify-center hidden xl:flex", leftSidebarClassName)}>
                        { leftSidebar }
                    </div>
                    <div id="main-content" className={cn("col-start-2 w-full min-w-0", containerClassName)}>
                        { children }
                    </div>
                    <div id="right-sidebar" className={cn("relative items-start justify-center hidden xl:flex", rightSidebarClassName)}>
                        { rightSidebar }
                    </div>
                </>
            ) : <>{children}</>}
        </main>
    )
}

export default MainPart;