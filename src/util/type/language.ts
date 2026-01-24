enum Language {
    EN = 'en',
    FR = 'fr',
    ES = 'es'
}

export const toLanguage = (lang: keyof typeof Language): Language => {
    return Language[lang];
};

export type WithLanguage<T = string> = {
    [K in Language]: T;
};

export type WithLanguageable<T = string> = WithLanguage<T> | T;

export type PartialWithLanguage<T> = {
    [K in Language]?: T;
} & { default: T };

export const isWithLanguage = <T>(obj: unknown): obj is WithLanguage<T> => {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    const record = obj as Record<string, unknown>;
    return Object.values(Language).every(lang => lang in record);
};

export const isPartialWithLanguage = <T>(obj: unknown): obj is PartialWithLanguage<T> => {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    const record = obj as Record<string, unknown>;
    return 'default' in record;
}

export default Language;