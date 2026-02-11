import ChildrenInterface from "@/util/interface/children";
import { ArticleWrapper } from "./article-wrapper";
import { HeadingFour, HeadingOne, HeadingThree, HeadingTwo } from "@/components/page-flow/page-flow";

// Usage : # Heading 1
export const MdxHeadingOne = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{ children }</HeadingOne>
    </ArticleWrapper>
);

// Usage : ## Heading 2
export const MdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingTwo isAnchorLink containerClassName='ml-0' className="mdx-heading">{ children }</HeadingTwo>
    </ArticleWrapper>
);

// Usage : ### Heading 3
export const MdxHeadingThree = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingThree isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingThree>
    </ArticleWrapper>
);

// Usage : #### Heading 4
export const MdxHeadingFour = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingFour isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingFour>
    </ArticleWrapper>
);