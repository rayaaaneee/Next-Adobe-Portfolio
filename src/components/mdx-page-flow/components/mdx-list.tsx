import type ChildrenInterface from "@/util/interface/children";

import { ArticleWrapper } from "./article-wrapper";

import cn from "@/util/function/cn";
import { MdxParagraph } from "./mdx-paragraph";


/* Usage :

Title :
- List item 1
- List item 2

*/
export const MdxList = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <ul className='list-disc [&>li]:ml-8 [&>li]:my-2'>
            {children}
        </ul>
    </ArticleWrapper>
);

/* Usage :

Title :
1. First item
2. Second item

*/
export const MdxNumberedList = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <ol className={cn(
            'list-decimal [&>li]:ml-8 [&>li]:my-2',
            "marker:font-semibold marker:font-apple text-[1.2em]",
            "marker:text-[#887c59] dark:marker:text-[rgba(255,226,226,0.9)]",
        )}>
            {children}
        </ol>
    </ArticleWrapper>
);

export const MdxListItem = ({ children }: ChildrenInterface) => (
    <li>
        <MdxParagraph>
            { children }
        </MdxParagraph>
    </li>
);