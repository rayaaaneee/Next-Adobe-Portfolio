import type { MDXComponents } from 'mdx/types';

import { MdxAnchor, MdxCode, MdxHeadingFour, MdxHeadingThree, MdxHeadingTwo, MdxImage, MdxList, MdxListItem, MdxParagraph, MdxPre, MdxQuote, MdxSeparator } from '@/components/mdx-page-flow';

import ComingSoon from './components/coming-soon';

const unsupported = ({type}: {type: string}) =>
    { throw new Error(`MDX component of type "${type}" is not supported in blog posts.`) };

export const mdxComponents: MDXComponents = {
    Image: MdxImage,
    ComingSoon: () => <ComingSoon button={false} title="Blog" />,
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
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});