import cvInfoJson from './cv-info.json';

import type DeepReadonly from '@/utils/types/deep-readonly';

export type cvInfoType = typeof cvInfoJson;

const cvInfo: DeepReadonly<cvInfoType> = cvInfoJson;

export default cvInfo;