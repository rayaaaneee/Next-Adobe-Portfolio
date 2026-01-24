"use client";

import { useLayoutEffect } from "react";
import useTryingContext from "./use-trying-context";

import languageContext, { I18nContextType } from "../context/i18n-context";

import I18nClientManager from "../manager/i18n-client-manager";

const useLanguage = (): I18nContextType => (useTryingContext(languageContext));

export const useLanguageManager = () => {
    I18nClientManager.instance.manageLanguages();
	useLayoutEffect(() => {
		// Ensure document language is set on initial load (After SSR Hydration)
		I18nClientManager.instance.setDocumentLanguage();
	}, []);
};

export default useLanguage;