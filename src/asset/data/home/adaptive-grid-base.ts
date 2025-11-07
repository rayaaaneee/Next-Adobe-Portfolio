import { ChildrenType } from "@/util/interface/children";
import { WithLanguageable } from "@/util/type/language";

export const baseImageProps = {
    width: 96,
    height: 96,
} as const;

type GridContent = {
    name: WithLanguageable<string>;
    icon: ChildrenType;
    color: string; 
    link?: string;
};

export default GridContent;