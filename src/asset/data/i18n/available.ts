// /asset/data/i18n/index.ts
import en from './en';
import fr from './fr';
import es from './es';
import Sentences from '@/util/type/sentences';

const availableLanguages = { en, fr, es };

export default availableLanguages as Record<string, Sentences>;