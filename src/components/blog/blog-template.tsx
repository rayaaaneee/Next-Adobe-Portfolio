import cn from "@/utils/function/cn";

import ClassNameInterface from '@/utils/interface/classname';

import { HeadingOne } from '../page-flow';
import Separator from '../others/separator';
import ComingSoon from '../coming-soon';
import MainPart from "../others/main-part";

export interface BlogTemplateProps extends ClassNameInterface {
    id: string;
}
// <<div className={cn(
//     "absolute inset-0 w-2/3 min-h-full h-fit box-border mx-auto",
//     "bg-white/80 dark:bg-black/80 rounded-lg",
//     
//     className,
// )}>>

const BlogTemplate = ({ id, className }: BlogTemplateProps) => {
    return (
        <MainPart className={cn(
            "absolute inset-0 w-2/3 !mx-auto",
            "flex flex-col gap-5",
            "py-5 my-14",
            className,
        )}>       
            <HeadingOne containerClassName="w-full mx-auto !m-0">Blog</HeadingOne>
            <Separator className="!my-0" />
            <ComingSoon title={id} />
        </MainPart>
    )
}

export default BlogTemplate;
