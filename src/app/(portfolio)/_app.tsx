"use client";

import { StaticImageData } from "next/image";

import { useMemo, useState } from "react";

import { useLanguageManager } from "@/util/hook/use-language";

import ThemeProvider from "@/components/theme-provider";

import languageContext from "@/util/context/language-context";

import ManageLanguages from "@/util/manager/manage-language";

import ChildrenInterface from "@/util/interface/children";

import Sentences from "@/util/type/sentences";

import imageContext from "@/util/context/image-context";

const App = ({ children }: ChildrenInterface) => {

	// Initialize language by cookies or system settings
	useLanguageManager();

	// Handle language state
	const [language, setLanguage] = useState<Sentences>(ManageLanguages.getSentences());
	const languageValue = useMemo(
		() => ({ language, setLanguage }), 
		[language]
	);

	const [images, setImages] = useState<StaticImageData[]>([]);
	const [imageClicked, setImageClicked] = useState<StaticImageData | null>(null);
	const imagesValue = useMemo(
		() => ({
				clicked: imageClicked !== null,
				imageClicked: imageClicked,
				loadNextImage: () => {
					if (imageClicked === null) return;
					const currentIndex: number = images.findIndex(img => img === imageClicked);
					const nextIndex: number = (currentIndex + 1) % images.length;
					setImageClicked(images[nextIndex]);
				},
				loadPreviousImage: () => {
					if (imageClicked === null) return;
					const currentIndex: number = images.findIndex(img => img === imageClicked);
					const previousIndex: number = (currentIndex - 1 + images.length) % images.length;
					setImageClicked(images[previousIndex]);
				},
				setImageClicked: setImageClicked,
				images: images,
				pushImage: (image: StaticImageData) => setImages((prevImages) => [...prevImages, image]),
				clearImages: () => setImages([]),
		}),
		[images, imageClicked]
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
