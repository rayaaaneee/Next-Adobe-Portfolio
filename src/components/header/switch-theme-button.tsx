import { cn } from "@/lib/utils";

import styles from "@/asset/scss/header/switch-theme.module.scss";

import themeContext from "@/utils/context/theme-context";
import useTryingContext from "@/utils/hook/use-try-context";

export interface SwitchThemeButtonProps {
    className?: string | null,
    s_size?: boolean,
    whiteIcons?: boolean,
    pinkMoon?: boolean
}

const SwitchTheme = ({ className, s_size = false, whiteIcons = false, pinkMoon = false }: SwitchThemeButtonProps) => {

	const { isDarkTheme, setIsDarkTheme } = useTryingContext(themeContext);

	const changeTheme = () => (setIsDarkTheme(!isDarkTheme));

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