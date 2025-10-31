import cn from '@/utils/function/cn';

import { HeadingThree, IconPosition } from '@/components/page-flow';

import { ChildrenType } from '@/utils/interface/children';

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
