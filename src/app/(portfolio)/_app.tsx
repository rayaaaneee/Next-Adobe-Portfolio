"use client";

import { useMemo, useState } from "react";

import ThemeProvider from "@/components/theme-provider";

import languageContext from "@/utils/context/language-context";

import ManageLanguages from "@/utils/manager/manage-language";

import ChildrenInterface from "@/utils/interface/children";

import Sentences from "@/utils/types/sentences";

import { useLanguageManager } from "@/utils/hook/use-language";

const App = ({ children }: ChildrenInterface) => {

	// Initialize language by cookies or system settings
	useLanguageManager();

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
