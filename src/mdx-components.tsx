import type { MDXComponents } from 'mdx/types';

import { 
    MdxAnchor, 
    MdxCode, 
    MdxHeadingFour, 
    MdxHeadingThree, 
    MdxHeadingTwo, 
    MdxImage, 
    MdxImageLine, 
    MdxList, 
    MdxListItem, 
    MdxNumberedList, 
    MdxParagraph, 
    MdxPre, 
    MdxQuote, 
    MdxSeparator, 
    MdxTable, 
    MdxTbody, 
    MdxTd, 
    MdxTh, 
    MdxThead,
    MdxTr
} from '@/components/mdx-page-flow/mdx-page-flow';

const unsupported = ({type}: {type: string}) =>
    { throw new Error(`MDX component of type "${type}" isn't currently supported by MDX.`) };

export const mdxComponents: MDXComponents = {
    ImgLine: MdxImageLine,
    Img: MdxImage,
    code: MdxCode,
    pre: MdxPre,
    blockquote: MdxQuote,
    ul: MdxList,
    ol: MdxNumberedList,
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
    // Custom component (remark plugin) -> Currently broken
    // ----
    //Spoiler: MdxSpoiler,
    // ----
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