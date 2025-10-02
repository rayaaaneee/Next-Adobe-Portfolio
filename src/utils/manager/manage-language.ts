import ManageCookies from './manage-cookies';

import englishSentences from '@/asset/data/language/en';
import spanishSentences from '@/asset/data/language/es';
import frenchSentences from '@/asset/data/language/fr';

// Considering structure of frenchSentences is the same for all languages
export type Sentences = typeof frenchSentences;

export const enum Language {
    EN = 'en',
    FR = 'fr',
    ES = 'es'
}

export default class ManageLanguages {

    static readonly cookieName: string = 'language';
    static readonly defaultLanguage = Language.EN;

    static language: Language = ManageLanguages.defaultLanguage;

    static readonly supportedLanguages:  Array<[Language, Sentences]> = [
        [Language.EN, englishSentences],
        [Language.FR, frenchSentences],
        [Language.ES, spanishSentences]
    ];

    static isSupported(language: string): boolean {
        return this.supportedLanguages.some(([name]) => name === language);
    }

    static getSystemLanguage = (): string => {
        return navigator.language;
    }

    static manageLanguages = () => {
        if (ManageCookies.isCookie(ManageLanguages.cookieName) &&
                ManageLanguages.isSupported(ManageCookies.getCookie(ManageLanguages.cookieName) as string)) {
            ManageLanguages.language =
                ManageCookies.getCookie(ManageLanguages.cookieName) as Language;
        } else {
            if (ManageLanguages.isSupported(ManageLanguages.language)) {
                ManageLanguages.language = ManageLanguages.getSystemLanguage() as Language;
            } else {
                ManageLanguages.language = ManageLanguages.defaultLanguage;
            }
        }
        ManageLanguages.setLanguage(ManageLanguages.language);
    }

    static setLanguage = (language: Language) => {
        if (ManageLanguages.isSupported(language)) {
            ManageLanguages.language = language;
            ManageCookies.setCookie(ManageLanguages.cookieName, language);
        }
    }

    static removeLanguage = () => {
        ManageCookies.removeCookie(ManageLanguages.cookieName);
    }

    static getLanguage = () => {
        return ManageLanguages.language;
    }

    static getSentences = (): Sentences => {
        let json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.language)?.[1] || null;
        if (json === null) {
            json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.defaultLanguage)![1];
        }
        return json;
    }
}