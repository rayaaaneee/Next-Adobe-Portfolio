import { Context, createContext, Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";

export interface ImageContextType {
    clicked: boolean;
    images: StaticImageData[];
    nextImage: StaticImageData | null;
    previousImage: StaticImageData | null;
    image: StaticImageData | null;
    pushImage: (image: StaticImageData) => void;
    clearImages: () => void;
    setImage: Dispatch<SetStateAction<StaticImageData | null>>;
}

const imageContext: Context<ImageContextType> =
    createContext<ImageContextType>({
        clicked: false,
        images: [],
        nextImage: null,
        previousImage: null,
        image: null,
        pushImage: () => {},
        clearImages: () => {},
        setImage: () => {},
    });

export default imageContext;