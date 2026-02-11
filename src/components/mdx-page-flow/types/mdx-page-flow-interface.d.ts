import { ImageProps, type StaticImageData } from "next/image";

import type ChildrenInterface from "@/util/interface/children";

import type ClassNameInterface from "@/util/interface/classname";

export interface UseWrapperInterface {
    useWrapper?: boolean;
}

export type ArticleWrapperInterface = ChildrenInterface & UseWrapperInterface & ClassNameInterface;

export interface MdxCodeProps extends ChildrenInterface, ClassNameInterface {} 

export interface ImageFlowProps extends ImageProps {
    src: StaticImageData;
    isInFlow?: boolean;
}

export interface TableInterface {
    tableId: string;
}