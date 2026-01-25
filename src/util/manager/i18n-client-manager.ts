// i18n-manager.ts
import CookieManager from './cookie-manager';

import Sentences from '@/util/type/sentences';
import Language, { isWithLanguage, isPartialWithLanguage, WithLanguage, PartialWithLanguage, WithLanguageable } from '@/util/type/language';
import DeepReadonly, { DeepReadonlyable } from '@/util/type/deep-readonly';

import availableLanguages from '@/asset/data/i18n/available';
import { languageKey } from '../type/language-key';
import ArrayKeyPath, { ArrayKeyPathValue } from '../type/array-key-path';

// Client I18n Manager provides internationalization support via hook.useLanguage()
export default class I18nClientManager {

    public static instance: I18nClientManager = new I18nClientManager();
    
    public readonly defaultLanguage: Language = Language.EN;

    public readonly supportedLanguages:  DeepReadonly<Array<[Language, Sentences]>> = 
        Object.entries(availableLanguages) as DeepReadonly<Array<[Language, Sentences]>>;

    public language: Language = this.defaultLanguage;

    protected readonly cookieName: string = 'i18n_language';

    protected cookieManager: CookieManager = CookieManager.getInstance();

    protected constructor() {

        const defaults = this.supportedLanguages.filter(([_, sentences]) => (sentences as Sentences).default === true);
       
        if (defaults.length > 1) {
            
            throw new Error("Multiple default languages found in available languages.");
        
        } else {

            if (defaults.length === 1) {
                const defaultLang = defaults[0][1];
                this.defaultLanguage = defaultLang.current;
            } else {
                throw new Error("No default language found in available languages.");
            }
            
        }
    }

    // Check if a language is supported
    public isSupported(language: string | Language): language is Language {
        return this.supportedLanguages.some(([name]) => name === language);
    }

    // Get system language (browser)
    protected _getSystemLanguage = (): string | Language => {
        return navigator.language.slice(0, 2).toLowerCase();
    }

    // Recursive function to get value by key path
    protected _getValueRecursive = (obj: unknown, remainingKeys: string[], key: string): string | unknown[] | WithLanguage<unknown> => {
        
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
    public setDocumentLanguage = (): void => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = this.language;
        }
    }

    // Set current language
    public setLanguage = (language: Language): void => {
        if (this.isSupported(language)) {
            this.language = language;
            this.setDocumentLanguage();
            this.cookieManager.setCookie(this.cookieName, language);
        }
    }

    // Manage language based on cookie or system language
    public manageLanguages = (): void => {
        if (
            (this.cookieManager.isCookie(this.cookieName)) &&
            (this.isSupported(this.cookieManager.getCookie(this.cookieName) as string))
        ) {
            this.language =
                this.cookieManager.getCookie(this.cookieName) as Language;
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
    protected _get = (key: string, language?: DeepReadonlyable<Language>): string | unknown[] | WithLanguage<unknown> => {
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
}