"use client";

import { Context, createContext } from "react";

import Language from "../type/language";
import I18nManager from "../manager/i18n-manager";

export interface I18nContextType {
  // t() returns string
  t: I18nManager['getValue'];

  // tArray() returns the exact type based on the key provided
  tArray: I18nManager['getArrayValues'];

  // tLang() returns language values
  tLang: I18nManager['getLanguageValues'];

  // tLanguageable() returns value based on WithLanguageable<T>
  tLanguageable: I18nManager['getWithLanguageable'];

  // Current language
  lang: I18nManager['language'];

  // Default language
  defaultLang: I18nManager['defaultLanguage'];

  // Lang setter
  setLang: I18nManager['setLanguage'];

  // Supported languages list
  supportedLanguages: Language[];
}


const languageContext: Context<I18nContextType | null> =
    createContext<I18nContextType | null>(null);

export default languageContext;