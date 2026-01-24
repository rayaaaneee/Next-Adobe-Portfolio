"use client";

import imageContext from "@/util/context/image-context";
import cn from "@/util/function/cn";
import Image, { ImageProps, StaticImageData } from "next/image";
import { MouseEventHandler, useContext, useEffect } from "react";

export interface ImageFlowProps extends ImageProps {
    src: StaticImageData;
    isInFlow?: boolean;
}

const ImageFlow = (props: ImageFlowProps) => {

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

export default ImageFlow;
