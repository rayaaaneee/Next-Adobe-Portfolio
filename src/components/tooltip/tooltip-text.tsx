"use client";

import useLanguage from "@/util/hook/use-language";

import { ChildrenType } from "@/util/interface/children";

import { languageKey } from "@/util/type/language-key";

type TooltipTextProps = {
    text?: languageKey;
    literalText?: ChildrenType;
}

const TooltipText = ({ text, literalText }: TooltipTextProps) => {

    const { t } = useLanguage();

    if (literalText !== undefined) return <>{literalText}</>;
    if (text !== undefined) return <>{t(text)}</>;
    return null;
}

export default TooltipText;