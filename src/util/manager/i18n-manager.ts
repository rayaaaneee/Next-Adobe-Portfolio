import CookieManager from './cookie-manager';

import Sentences from '@/util/type/sentences';
import Language, { isWithLanguage, isPartialWithLanguage, WithLanguage, PartialWithLanguage, WithLanguageable } from '@/util/type/language';
import DeepReadonly, { DeepReadonlyable } from '@/util/type/deep-readonly';

import englishSentences from '@/asset/data/language/en';
import spanishSentences from '@/asset/data/language/es';
import frenchSentences from '@/asset/data/language/fr';
import { languageKey } from '../type/language-key';
import ArrayKeyPath, { ArrayKeyPathValue } from '../type/array-key-path';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';


// Considering structure of frenchSentences is the same for all languages

const English: Sentences = englishSentences as Sentences;
const French: Sentences = frenchSentences as Sentences;
const Spanish: Sentences = spanishSentences as Sentences;

// Default rule : if static method, made for server components
// if public method, made for client components (hook/use-language.tsx)
export default class I18nManager {

    public static instance: I18nManager = new I18nManager();

    public static readonly cookieName: string = 'i18n_language';

    public readonly defaultLanguage: Language = Language.EN;

    private cookieManager: CookieManager = CookieManager.getInstance();
    
    readonly supportedLanguages:  DeepReadonly<Array<[Language, Sentences]>> = 
        ([English, French, Spanish].map((sentences) => [sentences.current, sentences]));

    public language: Language = this.defaultLanguage;

    private constructor() {}

    // Check if a language is supported
    public isSupported(language: string | Language): language is Language {
        return this.supportedLanguages.some(([name]) => name === language);
    }

    // Get system language (browser)
    private _getSystemLanguage = (): string | Language => {
        return navigator.language.slice(0, 2).toLowerCase();
    }

    // Recursive function to get value by key path
    private _getValueRecursive = (obj: unknown, remainingKeys: string[], key: string): string | unknown[] | WithLanguage<unknown> => {
        
        if (typeof obj !== 'object' || obj === null) {
            throw new Error(`Key "${key}" not found in language sentences.`);
        }

        const currentKey = remainingKeys.shift();
        if (!currentKey || !(currentKey in obj)) {
            throw new Error(`Key "${key}" not found in language sentences.`);
        }

        const next = (obj as Record<string, unknown>)[currentKey];

        if (remainingKeys.length === 0) {
            if (typeof next === 'string' || Array.isArray(next) || isWithLanguage(next)) return next;
            throw new Error(`Key "${key}" does not resolve to a string or array.`);
        }

        return this._getValueRecursive(next, remainingKeys, key);
    };

    // Set document language attribute
    public setDocumentLanguage = () => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = this.language;
        }
    }

    // Set current language
    public setLanguage = (language: Language) => {
        if (this.isSupported(language)) {
            this.language = language;
            this.setDocumentLanguage();
            this.cookieManager.setCookie(I18nManager.cookieName, language);
        }
    }

    // Manage language based on cookie or system language
    public manageLanguages = () => {
        if (
            (this.cookieManager.isCookie(I18nManager.cookieName)) &&
            (this.isSupported(this.cookieManager.getCookie(I18nManager.cookieName) as string))
        ) {
            this.language =
                this.cookieManager.getCookie(I18nManager.cookieName) as Language;
        } else {
            const systemLanguage = this._getSystemLanguage();
            if (this.isSupported(systemLanguage)) {
                this.language = systemLanguage as Language;
            } else {
                this.language = this.defaultLanguage;
            }
        }
        this.setLanguage(this.language);
    }

    // Get sentences for a specific or current language
    public getSentences = (language?: DeepReadonlyable<Language>): Sentences => {
        if (language) return this.supportedLanguages.find(([name]) => name === language)![1]!;

        let json = this.supportedLanguages.find(([name]) => name === this.language)?.[1] || null;
        if (json === null) {
            json = this.supportedLanguages.find(([name]) => name === this.defaultLanguage)![1];
        }
        
        return json;
    }

    // Get value by key (refactored to handle WithLanguage, PartialWithLanguage, and string keys)
    private _get = (key: string, language?: DeepReadonlyable<Language>): string | unknown[] | WithLanguage<unknown> => {
        const keys = key.split('.');
        const sentences = this.getSentences(language);
        return this._getValueRecursive(sentences, keys, key);
    }

    // Public method to get string value by key
    public getValue = (key: DeepReadonlyable<languageKey | WithLanguage<string> | PartialWithLanguage<string>>, language?: DeepReadonlyable<Language>): string => {
        if (isWithLanguage(key)) {
            // Handle the case where key is a WithLanguage<string>
            return key[language || this.language]
        } else if (isPartialWithLanguage(key)) {
            // Handle the case where key is a PartialWithLanguage<string>
            return key[language || this.language] || key.default;
        } else if (typeof key !== 'string') {
            throw new Error(`Invalid key type provided.`);
        }
        return this._get(key, language) as string;
    }

    // Public method to get array value (with types) by key
    public getArrayValues = <K extends ArrayKeyPath<Sentences>>(
        key: K,
        language?: DeepReadonlyable<Language>
    ): ArrayKeyPathValue<Sentences, K> => 
        (this._get(key, language) as ArrayKeyPathValue<Sentences, K>);

    // Public method to get WithLanguage<string> value
    public getLanguageValues = (language?: DeepReadonlyable<Language>): WithLanguage<string> => 
        (this.getSentences(language).languages);  

    // Public method to get WithLanguageable<T> value
    public getWithLanguageable = <T>(obj: DeepReadonlyable<WithLanguageable<T>>, language?: DeepReadonlyable<Language>): T => {
        if (isWithLanguage(obj)) {
            return obj[language || this.language] as T;
        } else {
            return obj as T;
        }
    }

    // Static method to resolve language from cookies (for server components)
    public static resolveCookie = (data: Parameters<I18nManager["getValue"]>[0], cookies: ReadonlyRequestCookies): string => {

        let lang: Language = I18nManager.instance.defaultLanguage;

        const cookieVal = cookies.get(I18nManager.cookieName)?.value;
        if (cookieVal && I18nManager.instance.isSupported(cookieVal)) {
            lang = cookieVal satisfies Language;
        }

        return I18nManager.instance.getValue(data, lang);
    }
}