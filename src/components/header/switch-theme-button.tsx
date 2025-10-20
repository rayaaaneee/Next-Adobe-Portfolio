"use client";

import cn from "@/utils/function/cn";

import { useTheme } from "next-themes";

import ClassNameInterface from "@/utils/interface/classname";

import styles from "~/scss/header/switch-theme.module.scss";

export interface SwitchThemeButtonProps extends ClassNameInterface {
    s_size?: boolean,
    whiteIcons?: boolean,
    pinkMoon?: boolean
}

const SwitchTheme = ({ className, id, s_size = false, whiteIcons = false, pinkMoon = false }: SwitchThemeButtonProps) => {


	const { theme, setTheme, systemTheme, } = useTheme();

  	const currentTheme = theme === "system" ? systemTheme : theme;

	const changeTheme = () => {
		setTheme(currentTheme === "dark" ? "light" : "dark");
	};

	const button = 
		(<button id={id}
			className={cn(
				styles.modeButton,
				{ [styles.white]: whiteIcons, [styles.pinkMoon]: pinkMoon },
				"h-[40px] w-[40px] bg-transparent bg-cover bg-no-repeat bg-center",
				"rounded-none cursor-pointer",
				"!transition-all duration-300",
				"outline-none focus:outline-none",
				className
			)}
			onClick={changeTheme}>	
		</button>);

	return s_size ? button : <div className={cn(
		"w-[70px] h-[70px] flex flex-col items-center justify-center"
	)}>{button}</div>;
}

export default SwitchTheme;