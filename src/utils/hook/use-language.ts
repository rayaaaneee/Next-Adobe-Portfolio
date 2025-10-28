import useTryingContext from "./use-trying-context";
import languageContext, { LanguageContextType } from "../context/language-context";

export const useLanguage = (): LanguageContextType => (useTryingContext(languageContext));