import type ClassNameInterface from "@/util/interface/classname";
import type { languageKey } from "@/util/type/language-key";

export interface ComingSoonProps extends ClassNameInterface {
    title?: languageKey;
    text?: languageKey;
    button?: boolean;
    link?: string;
    buttonText?: languageKey;
}
