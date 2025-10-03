import ManageCookies from './manage-cookies';

import Sentences from '@/utils/types/language';
import englishSentences from '@/asset/data/language/en';
import spanishSentences from '@/asset/data/language/es';
import frenchSentences from '@/asset/data/language/fr';

// Considering structure of frenchSentences is the same for all languages

export const enum Language {
    EN = 'en',
    FR = 'fr',
    ES = 'es'
}

export default class ManageLanguages {

    static readonly cookieName: string = 'language';
    static readonly defaultLanguage = Language.EN;
    static readonly supportedLanguages:  Array<[Language, Sentences]> = [
        [Language.EN, englishSentences],
        [Language.FR, frenchSentences],
        [Language.ES, spanishSentences]
    ];

    static language: Language = ManageLanguages.defaultLanguage;


    private static _isSupported(language: string): boolean {
        return this.supportedLanguages.some(([name]) => name === language);
    }

    private static _getSystemLanguage = (): string => {
        return navigator.language;
    }

    private static _setLanguage = (language: Language) => {
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
        ManageLanguages._setLanguage(ManageLanguages.language);
    }

    static getSentences = (): Sentences => {
        let json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.language)?.[1] || null;
        if (json === null) {
            json = ManageLanguages.supportedLanguages.find(([name]) => name === ManageLanguages.defaultLanguage)![1];
        }
        return json;
    }
}