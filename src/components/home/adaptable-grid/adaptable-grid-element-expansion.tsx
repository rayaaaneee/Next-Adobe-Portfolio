import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

import { HeadingOne, Paragraph, ParagraphAlignment } from "@/components/page-flow";

import { AdaptableGridElementData } from "./adaptable-grid";

export interface AdaptableGridElementExpansionProps {
    element: AdaptableGridElementData;
    isClicked: boolean;
    onClose?: MouseEventHandler<HTMLSpanElement>;
}

const AdaptableGridElementExpansion = ({ element, isClicked, onClose }: AdaptableGridElementExpansionProps) => {
    return (
        <div className={cn(
            "h-full flex flex-col overflow-hidden transition-[width] duration-[275] ease-in-out [&_*]:text-white",
            [isClicked ? "w-full" : "w-0"]
        )}>
            <span 
                onClick={onClose}
                className={cn(
                    "absolute top-4 right-4 w-7 h-7 bg-white hover:bg-red-600 rounded-full transition-[opacity,background-color] duration-300",
                    [isClicked ? "opacity-80 hover:opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"]
                )}>    
            </span>
            <HeadingOne href={element.link} className="text-nowrap">Consult <u>{element.name}</u></HeadingOne>
            {/* <Paragraph alignment={ParagraphAlignment.justify} innerHtml={element.description}>{undefined}</Paragraph> */}
        </div>
    )
}

export default AdaptableGridElementExpansion;
