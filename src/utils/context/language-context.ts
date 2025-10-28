import { Context, createContext } from "react";
import Sentences from "../types/sentences";

export interface LanguageContextType {
    language: Sentences;
    setLanguage: React.Dispatch<React.SetStateAction<Sentences>>;
}

const languageContext: Context<LanguageContextType | null> =
    createContext<LanguageContextType | null>(null);

export default languageContext;