import { type OptionalChildrenInterface } from "@/util/interface/children";

import type ClassNameInterface from "@/util/interface/classname";

import type StyleInterface from "@/util/interface/style";
import { MouseEventHandler } from "react";

export interface PageFlowBaseInterface extends OptionalChildrenInterface, ClassNameInterface, StyleInterface {};

export interface HeadingWithHref {
    href: string;
    isAnchorLink?: false;
}

export interface HeadingWithoutHref {
    href?: undefined;
    isAnchorLink?: boolean;
}

export interface AnchorLinkButtonPropsInterface extends Omit<ButtonPropsInterface, 'onClick'> {
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    buttonClassName?: string;
}

export type HeadingPropsInterface = PageFlowBaseInterface & (HeadingWithHref | HeadingWithoutHref) & {
    containerClassName?: string,
    icon?: ChildrenType, // Expected to be an SVG icon
    iconPosition?: IconPosition,
    iconScale?: boolean,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
}

export type HeadingPropsInterface = PageFlowBaseInterface & (HeadingWithHref | HeadingWithoutHref) & {
    containerClassName?: string,
    icon?: ChildrenType, // Expected to be an SVG icon
    iconPosition?: IconPosition,
    iconScale?: boolean,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
}

export interface ParagraphPropsInterface extends PageFlowBaseInterface {
    alignment?: ParagraphAlignment,
    indent?: boolean
    innerHtml?: string
    stylized?: boolean
}

export interface ButtonPropsInterface extends PageFlowBaseInterface {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    hover?: boolean;
    background?: boolean;
}