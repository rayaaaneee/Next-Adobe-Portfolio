"use client";

import { useEffect, useMemo, useState } from "react";

import useConditionalEffect from "@/utils/hook/use-conditionnal-effect";

import languageContext from "@/utils/context/language-context";
import themeContext from "@/utils/context/theme-context";

import ChildrenInterface from "@/utils/interface/children-interface";
import ManageLanguages, { Sentences } from "@/utils/manager/manage-language";
import ManageThemes from "@/utils/manager/manage-theme";

const App = ({ children }: ChildrenInterface) => {

	useEffect(() => {
		document.body.scrollTop = 0;
		ManageThemes.manageThemes();
		ManageLanguages.manageLanguages();
	}, []);

	// Gérer l'accessibilité du thème (hors index)
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(ManageThemes.isDarkTheme);
	const themeValue = useMemo(
		() => ({ isDarkTheme, setIsDarkTheme }),
		[isDarkTheme]
	);

	// Si le State accessible de partout (hors index) est modifié, on met à jour le thème
	useConditionalEffect(() => {
		  ManageThemes.toggleThemes();
	}, [isDarkTheme]);

	// Gérer le langage
	const [language, setLanguage] = useState<Sentences>(ManageLanguages.getSentences());
	const languageValue = useMemo(
		() => ({ language, setLanguage }), 
		[language]
	);
	
	return (
		<>
			<languageContext.Provider value={languageValue}>
				<themeContext.Provider value={themeValue} >
					{ children }
				</themeContext.Provider>
			</languageContext.Provider>
  		</>
	);
}

export default App;
