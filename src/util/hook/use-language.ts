"use client";

import { useLayoutEffect, useState } from "react";
import useTryingContext from "./use-trying-context";

import languageContext, { type I18nContextType } from "../context/i18n-context";

import I18nClientManager from "../manager/i18n-client-manager";

const useLanguage = (): I18nContextType => (useTryingContext(languageContext));

/**
 * Initialises i18n on the client.
 * `manageLanguages()` is called inside `useLayoutEffect` (not during render)
 * so the SSR and first client render both use `defaultLanguage`,
 * avoiding any hydration mismatch.  
 * Returns `true` once the real language has been resolved.
 */
export const useLanguageManager = (onReady?: (resolvedLanguage: typeof I18nClientManager.instance.language) => void): boolean => {
	const [isReady, setIsReady] = useState(false);

	useLayoutEffect(() => {
		I18nClientManager.instance.manageLanguages();
		I18nClientManager.instance.setDocumentLanguage();
		onReady?.(I18nClientManager.instance.language);
		setIsReady(true);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isReady;
};

export default useLanguage;