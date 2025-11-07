import frenchSentences from '@/asset/data/language/fr';

import type DeepReadonly from '@/util/type/deep-readonly';
import { WithLanguage } from './language';

type Sentences = DeepReadonly<typeof frenchSentences & {
    languages: WithLanguage<string>;
}>;

export default Sentences;