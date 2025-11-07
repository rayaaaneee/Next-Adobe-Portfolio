import { Context, createContext, Dispatch, SetStateAction } from "react";

export interface ThemeContextType {
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const themeContext: Context<ThemeContextType | null> =
    createContext<ThemeContextType | null>(null);

export default themeContext;