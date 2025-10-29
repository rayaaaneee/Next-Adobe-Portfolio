import type { MDXComponents } from 'mdx/types';

import { MdxAnchor, MdxCode, MdxHeadingOne, MdxHeadingThree, MdxHeadingTwo, MdxImage, MdxList, MdxParagraph, MdxPre, MdxQuote, MdxSeparator } from '@/components/mdx-page-flow';

export const mdxComponents: MDXComponents = {
    Image: MdxImage,
    code: MdxCode,
    pre: MdxPre,
    blockquote: MdxQuote,
    ul: MdxList,
    hr: MdxSeparator,
    h1: MdxHeadingOne,
    h2: MdxHeadingTwo,
    h3: MdxHeadingThree,
    p: MdxParagraph,
    a: MdxAnchor,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});