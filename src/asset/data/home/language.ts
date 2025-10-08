import languageJson from './language.json';

import DeepReadonly from '@/utils/types/deep-readonly';

type Languages = DeepReadonly<typeof languageJson>;

type LanguageCode = keyof Languages;

export default Languages;
