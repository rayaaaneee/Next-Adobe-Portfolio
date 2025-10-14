import { ChildrenType } from "@/utils/interface/children";

export const baseImageProps = {
    width: 96,
    height: 96,
} as const;

type GridContent = {
    name: string;
    icon: ChildrenType;
    color: string; 
    link: string;
};

export default GridContent;