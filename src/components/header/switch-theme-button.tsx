"use client";

import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";

import ClassNameInterface from "@/utils/interface/classname";

import styles from "@/asset/scss/header/switch-theme.module.scss";

export interface SwitchThemeButtonProps extends ClassNameInterface {
    s_size?: boolean,
    whiteIcons?: boolean,
    pinkMoon?: boolean
}

const SwitchTheme = ({ className, s_size = false, whiteIcons = false, pinkMoon = false }: SwitchThemeButtonProps) => {


	const { theme, setTheme, systemTheme, } = useTheme();

  	const currentTheme = theme === "system" ? systemTheme : theme;

	const changeTheme = () => {
		setTheme(currentTheme === "dark" ? "light" : "dark");
	};

	const button = 
		(<button
			className={cn(
				styles.modeButton,
				{ [styles.white]: whiteIcons, [styles.pinkMoon]: pinkMoon },
				"h-[40px] w-[40px] bg-transparent rounded-none cursor-pointer bg-cover bg-no-repeat bg-center transition-all duration-300",
				"",
				className
			)}
			onClick={changeTheme}>	
		</button>);

	return s_size ? button : <div className={cn(
		"w-[70px] h-[70px] flex flex-col items-center justify-center"
	)}>{button}</div>;
}

export default SwitchTheme;