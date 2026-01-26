import type { MDXComponents } from 'mdx/types';

import { 
    MdxAnchor, 
    MdxCode, 
    MdxHeadingFour, 
    MdxHeadingThree, 
    MdxHeadingTwo, 
    MdxImage, 
    MdxList, 
    MdxListItem, 
    MdxParagraph, 
    MdxPre, 
    MdxQuote, 
    MdxSeparator, 
    MdxSpoiler, 
    MdxTable, 
    MdxTbody, 
    MdxTd, 
    MdxTh, 
    MdxThead,
    MdxTr
} from '@/components/mdx-page-flow';

const unsupported = ({type}: {type: string}) =>
    { throw new Error(`MDX component of type "${type}" is not supported in blog posts.`) };

export const mdxComponents: MDXComponents = {
    Image: MdxImage,
    code: MdxCode,
    pre: MdxPre,
    blockquote: MdxQuote,
    ul: MdxList,
    li: MdxListItem,
    hr: MdxSeparator,
    h1: MdxHeadingTwo,
    h2: MdxHeadingThree,
    h3: MdxHeadingFour,
    h4: () => unsupported({type: 'h4'}),
    h5: () => unsupported({type: 'h5'}),
    h6: () => unsupported({type: 'h6'}),
    p: MdxParagraph,
    a: MdxAnchor,
    // Custom components (remark plugins)
    Spoiler: MdxSpoiler,
    table: MdxTable,
    thead: MdxThead,
    tbody: MdxTbody,
    tr: MdxTr,
    th: MdxTh,
    td: MdxTd,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});