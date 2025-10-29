"use client";

import { useLayoutEffect, useMemo, useState } from "react";

import ThemeProvider from "@/components/theme-provider";

import languageContext from "@/utils/context/language-context";

import ManageLanguages from "@/utils/manager/manage-language";

import ChildrenInterface from "@/utils/interface/children";

import Sentences from "@/utils/types/sentences";

const App = ({ children }: ChildrenInterface) => {

	// Initialize language by cookies or system settings
	ManageLanguages.manageLanguages();
	useLayoutEffect(() => {
		// Ensure document language is set on initial load (After SSR Hydration)
		ManageLanguages.setDocumentLanguage();
	}, []);

	// Handle language state
	const [language, setLanguage] = useState<Sentences>(ManageLanguages.getSentences());
	const languageValue = useMemo(
		() => ({ language, setLanguage }), 
		[language]
	);
	
	return (
		<ThemeProvider>
			<languageContext.Provider value={languageValue}>
				{ children }
			</languageContext.Provider>
		</ThemeProvider>
	);
}

export default App;
