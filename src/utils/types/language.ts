enum Language {
    EN = 'en',
    FR = 'fr',
    ES = 'es'
}

export type WithLanguage<T> = {
    [K in Language]: T;
};

export default Language;