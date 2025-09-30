import { Context, createContext } from "react";

export interface ThemeContextType {
    isDarkTheme: boolean;
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const themeContext: Context<ThemeContextType | null> =
    createContext<ThemeContextType | null>(null);

export default themeContext;