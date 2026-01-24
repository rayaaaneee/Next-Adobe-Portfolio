"use client";

import { Context, createContext } from "react";

import Language from "../type/language";
import I18nClientManager from "../manager/i18n-client-manager";

export interface I18nContextType {
  // t() returns string
  t: I18nClientManager['getValue'];

  // tArray() returns the exact type based on the key provided
  tArray: I18nClientManager['getArrayValues'];

  // tLang() returns language values
  tLang: I18nClientManager['getLanguageValues'];

  // tLanguageable() returns value based on WithLanguageable<T>
  tLanguageable: I18nClientManager['getWithLanguageable'];

  // Current language
  lang: I18nClientManager['language'];

  // Default language
  defaultLang: I18nClientManager['defaultLanguage'];

  // Lang setter
  setLang: I18nClientManager['setLanguage'];

  // Supported languages list
  supportedLanguages: Language[];
}


const languageContext: Context<I18nContextType | null> =
    createContext<I18nContextType | null>(null);

export default languageContext;