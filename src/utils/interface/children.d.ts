import { JSX, ReactNode, ReactElement } from "react";

export type ChildrenType =  ReactNode | ReactElement | JSX.Element | ChildrenType[] ;

export interface ChildrenInterface {
    children: ChildrenType;
}