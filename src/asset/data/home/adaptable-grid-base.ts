import { ChildrenType } from "@/utils/interface/children";

const imageBaseClassName = `h-24 w-24 pointer-events-none`;

const baseProps = {
    width: 96,
    height: 96,
};

export const baseImageProps = {
    ...baseProps,
    className: imageBaseClassName,
    alt: 'Image',
} as const;

const iconBaseClassName = `text-white ${imageBaseClassName}`;

export const baseIconProps = {
    ...baseProps,
    className: iconBaseClassName,
} as const;

type GridContent = {
    name: string;
    icon: ChildrenType;
    color: string; 
    link?: string;
};

export default GridContent;