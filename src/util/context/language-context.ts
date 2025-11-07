import { Context, createContext, Dispatch, SetStateAction } from "react";
import Sentences from "@/util/type/sentences";

export interface LanguageContextType {
    language: Sentences;
    setLanguage: Dispatch<SetStateAction<Sentences>>;
}

const languageContext: Context<LanguageContextType | null> =
    createContext<LanguageContextType | null>(null);

export default languageContext;