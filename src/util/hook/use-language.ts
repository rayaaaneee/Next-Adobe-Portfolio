"use client";

import { useLayoutEffect } from "react";
import useTryingContext from "./use-trying-context";

import languageContext, { I18nContextType } from "../context/i18n-context";

import I18nManager from "../manager/i18n-manager";

const useLanguage = (): I18nContextType => (useTryingContext(languageContext));

export const useLanguageManager = () => {
    I18nManager.instance.manageLanguages();
	useLayoutEffect(() => {
		// Ensure document language is set on initial load (After SSR Hydration)
		I18nManager.instance.setDocumentLanguage();
	}, []);
};

export default useLanguage;