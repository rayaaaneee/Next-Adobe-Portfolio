import type ChildrenInterface from "@/util/interface/children";

import { type IdInterface } from "@/util/interface/classname";

import { ArticleWrapper } from "../article-wrapper";

const CodeBlockParent = ({ children, id }: ChildrenInterface & IdInterface) => (
    <ArticleWrapper id={id} className='relative code-block max-size'>
        {children}
    </ArticleWrapper>
);

export default CodeBlockParent;