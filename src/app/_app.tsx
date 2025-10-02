"use client";

import { useMemo, useState } from "react";

import languageContext from "@/utils/context/language-context";

import ChildrenInterface from "@/utils/interface/children-interface";
import ManageLanguages, { Sentences } from "@/utils/manager/manage-language";
import { ThemeProvider } from "next-themes";

const App = ({ children }: ChildrenInterface) => {

	ManageLanguages.manageLanguages();

	// Gérer le langage
	const [language, setLanguage] = useState<Sentences>(ManageLanguages.getSentences());
	const languageValue = useMemo(
		() => ({ language, setLanguage }), 
		[language]
	);
	
	return (
		<>
			<languageContext.Provider value={languageValue}>
				{ children }
			</languageContext.Provider>
		</>
	);
}

export default App;
