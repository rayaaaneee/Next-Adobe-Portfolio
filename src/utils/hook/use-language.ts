import { useLayoutEffect } from "react";
import useTryingContext from "./use-trying-context";

import languageContext, { LanguageContextType } from "../context/language-context";

import ManageLanguages from "../manager/manage-language";

const useLanguage = (): LanguageContextType => (useTryingContext(languageContext));

export const useLanguageManager = () => {
    ManageLanguages.manageLanguages();
	useLayoutEffect(() => {
		// Ensure document language is set on initial load (After SSR Hydration)
		ManageLanguages.setDocumentLanguage();
	}, []);
};

export default useLanguage;