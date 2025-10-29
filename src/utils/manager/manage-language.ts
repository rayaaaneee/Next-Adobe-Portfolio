import ManageCookies from './manage-cookies';

import Sentences from '@/utils/types/sentences';

import englishSentences from '@/asset/data/language/en';
import spanishSentences from '@/asset/data/language/es';
import frenchSentences from '@/asset/data/language/fr';
import { DeepReadonliable } from '../types/deep-readonly';
import Language from '../types/language';

// Considering structure of frenchSentences is the same for all languages

const English: Sentences = englishSentences as Sentences;
const French: Sentences = frenchSentences as Sentences;
const Spanish: Sentences = spanishSentences as Sentences;

export default class ManageLanguages {

    static readonly cookieName: string = 'language';
    static readonly defaultLanguage = Language.EN;
    static readonly supportedLanguages:  Array<[Language, Sentences]> = 
        ([English, French, Spanish].map((sentences) => [sentences.current, sentences]));

    static language: Language = ManageLanguages.defaultLanguage;


    private static _isSupported(language: string): boolean {
        return this.supportedLanguages.some(([name]) => name === language);
    }

    private static _getSystemLanguage = (): string => {
        return navigator.language;
    }

    static setLanguage = (language: Language) => {
        if (ManageLanguages._isSupported(language)) {
            ManageLanguages.language = language;
            ManageCookies.setCookie(ManageLanguages.cookieName, language);
        }
    }

    static manageLanguages = () => {
        if (ManageCookies.isCookie(ManageLanguages.cookieName) &&
                ManageLanguages._isSupported(ManageCookies.getCookie(ManageLanguages.cookieName) as string)) {
            ManageLanguages.language =
                ManageCookies.getCookie(ManageLanguages.cookieName) as Language;
        } else {
            if (ManageLanguages._isSupported(ManageLanguages.language)) {
                ManageLanguages.language = ManageLanguages._getSystemLanguage() as Language;
            } else {
                ManageLanguages.language = ManageLanguages.defaultLanguage;
            }
        }
        ManageLanguages.setLanguage(ManageLanguages.language);
    }

    static getSentences = (language?: DeepReadonliable<Language>): Sentences => {
        // If a language is provided (necessary supported), return its sentences
        if (language) return ManageLanguages.supportedLanguages.find(([name]) => name === language)![1]!;

        let json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.language)?.[1] || null;
        if (json === null) {
            json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.defaultLanguage)![1];
        }
        
        return json;
    }
}