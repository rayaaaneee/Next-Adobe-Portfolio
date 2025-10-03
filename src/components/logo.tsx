import { forwardRef } from "react";

import styles from "@/asset/scss/header/logo.module.scss";

import { cn } from "@/lib/utils";

export const LogoColors = {
    light: styles.light,
    black: styles.black,
    white: styles.white,
    theme: styles.theme,
} as const;

type LogoColors = typeof LogoColors[keyof typeof LogoColors];

interface LogoProps {
    color?: LogoColors,
    className?: string | null,
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({

    color = LogoColors.theme,
    className = null,

}, ref) => {

    return (
        <div className={cn(
            styles.logo,
            color,
            "bg-center bg-no-repeat bg-contain transition-all duration-500",
            className
        )} ref={ref}></div>
    );
});

Logo.displayName = "Logo";

export default Logo;
