import cn from '@/util/function/cn';

import { HeadingThree } from '@/components/page-flow/page-flow';

import { ChildrenType } from '@/util/interface/children';

import { IconPosition } from '@/components/page-flow/types/icon-position';

interface VerticalBorderSectionProps {
    text: string;
    icon: ChildrenType;
}

const VerticalBorderSection = ({ text, icon }: VerticalBorderSectionProps) => (
    <HeadingThree 
        icon={icon} 
        iconPosition={IconPosition.right}
        className={cn(
            "text-center h- dark:text-white",
        )} 
        containerClassName={cn(
            "flex justify-center items-center w-full !m-0",
            "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20"
        )}>
            {text}
    </HeadingThree>
);

export default VerticalBorderSection;
