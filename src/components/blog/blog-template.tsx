import { cn } from '@/lib/utils';

import ClassNameInterface from '@/utils/interface/classname';

import { HeadingOne } from '../page-flow';
import Separator from '../home/separator';
import ComingSoon from '../coming-soon';

export interface BlogTemplateProps extends ClassNameInterface {
    id: string;
}

const BlogTemplate = ({ id, className }: BlogTemplateProps) => {
    return (
        <div className={cn(
            "absolute inset-0 w-2/3 min-h-full h-fit box-border mx-auto py-5 my-14",
            "bg-white/80 dark:bg-black/80 rounded-lg",
            "flex flex-col gap-5",
            className,
        )}>
            <HeadingOne containerClassName="w-full mx-auto !m-0">Blog</HeadingOne>
            <Separator className="!my-0" />
            <ComingSoon title={id} />
        </div>
    )
}

export default BlogTemplate;
