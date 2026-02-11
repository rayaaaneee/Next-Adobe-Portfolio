"use client";

import Image from "next/image";

import cn from "@/util/function/cn";

import { type MouseEventHandler, useContext, useEffect } from "react";

import { type ImageFlowProps } from "../../types/mdx-page-flow-interface";

import imageContext from "@/util/context/image-context";


export const ImageFlow = (props: ImageFlowProps) => {

    const { isInFlow = true } = props;

    if (typeof props.src === 'string') throw new Error("FlowImage only accepts StaticImageData as src.");

    const { pushImage, setImage } = useContext(imageContext);

    const onClick: MouseEventHandler<HTMLImageElement> = (event) => {
        void setImage(props.src);
        return props.onClick?.(event);
    };

    useEffect(() => {
        (() => (isInFlow && (pushImage(props.src))))();
    }, [isInFlow, pushImage, props.src]);

    return (
        <Image {...props} 
            alt={props.alt} 
            onClick={onClick} 
            className={cn("cursor-zoom-in", props.className)} 
        />
    );
}