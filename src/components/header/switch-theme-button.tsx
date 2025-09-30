import themeContext from "@/utils/context/theme-context";
import useTryingContext from "@/utils/hook/use-try-context";

export interface SwitchThemeButtonProps {
    className?: string | null,
    s_size?: boolean,
    whiteIcons?: boolean,
    pinkMoon?: boolean
}

const SwitchThemeButton = ({ className, s_size = false, whiteIcons = false, pinkMoon = false }: SwitchThemeButtonProps) => {

	const { isDarkTheme, setIsDarkTheme } = useTryingContext(themeContext);

	const changeTheme = () => (setIsDarkTheme(!isDarkTheme));

	const button = 
		(<button 
			className={`mode-button ${whiteIcons && 'white'} ${pinkMoon && 'pink-moon'} ${className}`} 
			onClick={changeTheme}>	
		</button>);

	if (s_size) {
		return button;
	}

	return s_size ? button : <div className={`theme-form`}>{button}</div>;
}

export default SwitchThemeButton;