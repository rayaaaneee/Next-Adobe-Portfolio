import { Context, createContext, Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";

export interface ImageContextType {
    images: StaticImageData[];
    pushImage: (image: StaticImageData) => void;
    loadNextImage: () => void;
    loadPreviousImage: () => void;
    clearImages: () => void;
    imageClicked: StaticImageData | null;
    clicked: boolean;
    setImageClicked: Dispatch<SetStateAction<StaticImageData | null>>;
}

const imageContext: Context<ImageContextType> =
    createContext<ImageContextType>({
        images: [],
        pushImage: () => {},
        loadNextImage: () => {},
        loadPreviousImage: () => {},
        clearImages: () => {},
        imageClicked: null,
        clicked: false,
        setImageClicked: () => {},
    });

export default imageContext;