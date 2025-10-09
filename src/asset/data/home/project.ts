import type DeepReadonly from '@/utils/types/deep-readonly';
import type { AdaptableGridElementData } from '@/components/home/adaptable-grid';

const projects = [
] as AdaptableGridElementData[];

export type Project = DeepReadonly<typeof projects>;

export default projects as Project;