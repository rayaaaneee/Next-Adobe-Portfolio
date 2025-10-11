import Image from "next/image";
import { forwardRef, RefAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "~/scss/header/logo.module.scss";

import ClassNameInterface from "@/utils/interface/classname";

import whiteLogo from "~/img/favicon/favicon-dark-theme.png";
import blackLogo from "~/img/favicon/favicon-black.png";
import lightLogo from "~/img/favicon/favicon-light-theme.png";

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
    asImage?: boolean,
}

const Logo = forwardRef<HTMLDivElement | HTMLImageElement, LogoProps>(({

    color = LogoColors.theme,
    className,
    id,
    title,
    asImage = false,

}, ref) => {

    return (
        <>
            {
                asImage ? (
                    <Image
                        ref={ref as RefAttributes<HTMLImageElement>['ref']}
                        src={color === LogoColors.light ? lightLogo : color === LogoColors.black ? blackLogo : whiteLogo}
                        alt={"Logo Pf"}
                        className={className}
                        width={120}
                        height={40}
                    />
                ) : (
                    <div id={id} title={title} className={
                        cn(
                            styles.logo,
                            color,
                            "bg-center min-w-0 bg-no-repeat bg-contain transition-all duration-500",
                            className
                        )
                    } ref={ref}></div>
                )
            }
        </>
    );
});
Logo.displayName = "Logo";

export default Logo;
