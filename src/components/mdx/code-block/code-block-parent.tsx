import { ArticleWrapper } from "@/components/mdx-page-flow";

import type ChildrenInterface from "@/util/interface/children";
import { type IdInterface } from "@/util/interface/classname";

const CodeBlockParent = ({ children, id }: ChildrenInterface & IdInterface) => (
    <ArticleWrapper id={id} className='relative code-block max-size'>
        {children}
    </ArticleWrapper>
);

export default CodeBlockParent;