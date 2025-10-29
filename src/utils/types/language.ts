enum Language {
    EN = 'en',
    FR = 'fr',
    ES = 'es'
}

export type WithLanguage<T> = {
    [K in Language]: T;
};

export type WithLanguageable<T> = WithLanguage<T> | T;

export type PartialWithLanguage<T> = {
    [K in Language]?: T;
};

export const isWithLanguage = <T>(obj: unknown): obj is WithLanguage<T> => {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    const record = obj as Record<string, unknown>;
    return Object.values(Language).every(lang => lang in record);
};

export default Language;