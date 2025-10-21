import type { MDXComponents } from 'mdx/types';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph } from '@/components/page-flow';

export const mdxComponents: MDXComponents = {
    h1: HeadingOne,
    h2: HeadingTwo,
    h3: HeadingThree,
    p: Paragraph,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});
