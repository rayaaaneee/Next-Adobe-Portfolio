"use client";

import useLanguage from "@/util/hook/use-language";

import { FaHeart } from "react-icons/fa6";

import VerticalBorderSection from "./vertical-border-section";

const BottomBorderSection = () => {

    const { t } = useLanguage();

    return (
        <VerticalBorderSection 
            text={t('home.thanks')}
            icon={<FaHeart className="text-red-400" />} 
        />
    )
}

export default BottomBorderSection;