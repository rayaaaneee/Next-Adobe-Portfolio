import { JSX, ReactNode, ReactElement } from "react";

export type ChildrenType =  ReactNode | ReactElement | JSX.Element | ChildrenType[] ;

interface ChildrenInterface {
    children: ChildrenType;
}

export interface OptionalChildrenInterface {
    children?: ChildrenType;
}

export default ChildrenInterface;