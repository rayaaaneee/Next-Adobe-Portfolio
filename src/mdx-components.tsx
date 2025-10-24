import type { MDXComponents } from 'mdx/types';

import { mdxAnchor, mdxCode, mdxHeadingOne, mdxHeadingThree, mdxHeadingTwo, mdxImage, mdxList, mdxParagraph, mdxPre, mdxQuote, mdxSeparator } from '@/components/others/mdx-page-flow';

export const mdxComponents: MDXComponents = {
    Image: mdxImage,
    code: mdxCode,
    pre: mdxPre,
    blockquote: mdxQuote,
    ul: mdxList,
    hr: mdxSeparator,
    h1: mdxHeadingOne,
    h2: mdxHeadingTwo,
    h3: mdxHeadingThree,
    p: mdxParagraph,
    a: mdxAnchor,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});