"use client";

import { StaticImageData } from "next/image";

import { useMemo, useState, useCallback } from "react";

import { useLanguageManager } from "@/util/hook/use-language";

import ThemeProvider from "@/components/theme-provider";

import languageContext, { I18nContextType } from "@/util/context/i18n-context";

import Language from "@/util/type/language";

import I18nClientManager from "@/util/manager/i18n-client-manager";

import ChildrenInterface from "@/util/interface/children";

import imageContext from "@/util/context/image-context";

const App = ({ children }: ChildrenInterface) => {

	// Initialize language by cookies or system settings
	useLanguageManager();

	// Handle language state
	const [lang, setLang] = useState<Language>(I18nClientManager.instance.language);
	const languageValue: I18nContextType = useMemo(
		() => ({
			t: I18nClientManager.instance.getValue.bind(I18nClientManager.instance),
			tArray: I18nClientManager.instance.getArrayValues.bind(I18nClientManager.instance),
			tLang: I18nClientManager.instance.getLanguageValues.bind(I18nClientManager.instance),
			tLanguageable: I18nClientManager.instance.getWithLanguageable.bind(I18nClientManager.instance),
			lang: lang,
			defaultLang: I18nClientManager.instance.defaultLanguage,
			setLang: (language: Language) => {
    		  	I18nClientManager.instance.setLanguage(language);
    		  	setLang(language);
    		},
			supportedLanguages: I18nClientManager.instance.supportedLanguages.map(([lang]) => lang),
		}),
		[lang]
	);

	const [images, setImages] = useState<StaticImageData[]>([]);
	const [image, setImage] = useState<StaticImageData | null>(null);

	const pushImage = useCallback((img: StaticImageData) => {
		setImages((prevImages) => [...prevImages, img]);
	}, [setImages]);

	const clearImages = useCallback(() => {
		setImages([]);
	}, [setImages]);

	const imagesValue = useMemo(
		() => {
			const nextImage = (() : null | StaticImageData => {
				if (image === null) return null;
				const currentIndex: number = images.findIndex(img => img === image);
				if (currentIndex === -1) return null;
				const nextIndex: number = currentIndex + 1;
				if (nextIndex < 0 || nextIndex >= images.length) return null;
				return images[nextIndex];
			})();

			const previousImage = (() : null | StaticImageData => {
				if (image === null) return null;
				const currentIndex: number = images.findIndex(img => img === image);
				if (currentIndex === -1) return null;
				const previousIndex: number = currentIndex - 1;
				if (previousIndex < 0 || previousIndex >= images.length) return null;
				return images[previousIndex];
			})();

			return {
				images,
				clicked: image !== null,
				image,
				nextImage,
				previousImage,
				setImage,
				pushImage,
				clearImages,
			};
		},
		[images, image, pushImage, clearImages, setImage]
	);
	
	return (
		<ThemeProvider>
			<imageContext.Provider value={imagesValue}>
				<languageContext.Provider value={languageValue}>
					{ children }
				</languageContext.Provider>
			</imageContext.Provider>
		</ThemeProvider>
	);
}

export default App;
