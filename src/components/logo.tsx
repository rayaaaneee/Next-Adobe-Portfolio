import { forwardRef } from "react";

import styles from "~/scss/header/logo.module.scss";

import { cn } from "@/lib/utils";
import ClassNameInterface from "@/utils/interface/classname";

export const LogoColors = {
    light: styles.light,
    black: styles.black,
    white: styles.white,
    theme: styles.theme,
} as const;

type LogoColors = typeof LogoColors[keyof typeof LogoColors];

interface LogoProps extends ClassNameInterface {
    color?: LogoColors,
    title?: string,
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({

    color = LogoColors.theme,
    className,
    id,
    title

}, ref) => {

    return (
        <div id={id} title={title} className={cn(
            styles.logo,
            color,
            "bg-center bg-no-repeat bg-contain transition-all duration-500",
            className
        )} ref={ref}></div>
    );
});

Logo.displayName = "Logo";

export default Logo;
