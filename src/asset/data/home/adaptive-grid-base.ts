import { ChildrenType } from "@/utils/interface/children";
import { WithLanguage, WithLanguageable } from "@/utils/type/language";

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