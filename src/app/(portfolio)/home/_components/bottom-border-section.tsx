"use client";

import useLanguage from "@/utils/hook/use-language";

import { FaHeart } from "react-icons/fa6";

import VerticalBorderSection from "./vertical-border-section";

const BottomBorderSection = () => {

    const { language } = useLanguage();

    return (
        <VerticalBorderSection 
            text={language.home.thanks}
            icon={<FaHeart className="text-red-400" />} 
        />
    )
}

export default BottomBorderSection;