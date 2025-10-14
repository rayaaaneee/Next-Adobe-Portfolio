import { cn } from '@/lib/utils';

import ClassNameInterface from '@/utils/interface/classname';

export interface SeparatorProps extends ClassNameInterface {
    lite?: boolean;
}

const Separator = ({ className, lite = false }: SeparatorProps) => {
    return (
        <div className={cn(
            `opacity-35 mx-auto rounded-full h-1 bg-gray-500 dark:bg-gray-200 my-4`,
            [lite ? "w-3/5" : "w-4/5"],
            className
        )}></div>
    )
}

export default Separator;
