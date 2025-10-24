import cn from "@/utils/function/cn";

import ClassNameInterface from '@/utils/interface/classname';

export interface SeparatorProps extends ClassNameInterface {
    lite?: boolean;
    highMargin?: boolean;
}

const Separator = ({ className, lite = false, highMargin = false }: SeparatorProps) => {
    return (
        <div className={cn(
            "separator",
            `opacity-35 mx-auto rounded-full h-1 bg-gray-500 dark:bg-gray-200`,
            [highMargin ?
                (["my-4 xl:my-8"])
             : 
                (["my-2 xl:my-4"]),
            ],
            [lite ? "w-3/5" : "w-4/5"],
            className
        )}></div>
    )
}

export default Separator;
