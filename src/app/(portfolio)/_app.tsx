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
	const [image, setImage] = useState<StaticImageData | null>(null);
	const imagesValue = useMemo(
		() => ({
				images: images,
				clicked: image !== null,
				image: image,
				nextImage: ((): null | StaticImageData => {
					if (image === null) return null;
					const currentIndex: number = images.findIndex(img => img === image);
					if (currentIndex === -1) return null;
					const nextIndex: number = currentIndex + 1;
					if (nextIndex < 0 || nextIndex >= images.length) return null;
					return images[nextIndex];
				})(),
				previousImage: ((): null | StaticImageData => {
					if (image === null) return null;
					const currentIndex: number = images.findIndex(img => img === image);
					if (currentIndex === -1) return null;
					const previousIndex: number = currentIndex - 1;
					if (previousIndex < 0 || previousIndex >= images.length) return null;
					return images[previousIndex];
				})(),
				setImage: setImage,
				pushImage: (image: StaticImageData) => setImages((prevImages) => [...prevImages, image]),
				clearImages: () => setImages([]),
		}),
		[images, image]
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
