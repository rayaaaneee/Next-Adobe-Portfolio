import type NextImageProps from "@/util/type/next-image-props";

import cn from "@/util/function/cn";

import { ArticleWrapper } from "./article-wrapper";

import Tooltip, { TooltipSize } from "@/components/tooltip/tooltip";

import { type UseWrapperInterface } from "../types/mdx-page-flow-interface";

import type ArrayType from "@/util/type/array-type";
import { ImageFlow } from "./image/image-flow";

// Usage : <Image src="..." alt="..." width={...} height={...} className="..." />
export const MdxImage = ({useWrapper, containerClassName, ...props}: NextImageProps & UseWrapperInterface & {
    containerClassName?: string;
}) => (
    <ArticleWrapper useWrapper={useWrapper} className='max-size'>
        <Tooltip 
            size={TooltipSize.md}
            className={cn(
                "img-container rounded-md mx-auto mt-6 mb-3",
                containerClassName
            )}
            disabled={props.alt === undefined} 
            literalText={props.alt}
        >
            <ImageFlow {...props} className={cn(
                'md:rounded-md object-contain h-fit box-border',
                "border-y-4 md:border-4 border-white/40",
                "md:hover:scale-[1.01] transition-transform",
                props.className
            )} alt={props.alt} />
        </Tooltip>
    </ArticleWrapper>
);

export const MdxImageLine = ({ images }: { images: ArrayType<NextImageProps, 2> }) => (
    <ArticleWrapper className="max-size flex flex-row gap-4 h-fit justify-center items-center">
        {images.map((imageProps, index) => (
            <MdxImage
                key={index}
                {...imageProps}
                useWrapper={false}
                className={cn(
                    "max-h-full w-auto max-w-full object-contain",
                    "md:rounded-md box-border border-y-4 md:border-4 border-white/40 md:hover:scale-[1.01] transition-transform",
                    imageProps.className
                )}
            />
        ))}
    </ArticleWrapper>
);

