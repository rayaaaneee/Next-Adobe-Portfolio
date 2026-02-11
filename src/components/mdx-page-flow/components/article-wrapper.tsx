import cn from "@/util/function/cn";

import { type ArticleWrapperInterface } from "../types/mdx-page-flow-interface";

export const ArticleWrapper = ({ children, className, useWrapper = true, id }: ArticleWrapperInterface) => (
    useWrapper ? (
        <article className={cn(className)} id={id}>
            {children}
        </article>) 
        : 
        children
);