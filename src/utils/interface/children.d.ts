import { JSX } from "react";

export type ChildrenType =  JSX.Element | JSX.Element[] | string | string[] | number | number[] | boolean | null | undefined;

export interface ChildrenInterface {
    children: ChildrenType;
}