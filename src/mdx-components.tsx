import type { MDXComponents } from 'mdx/types';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph } from '@/components/page-flow';
 
const components: MDXComponents = {
    h1: HeadingOne,
    h2: HeadingTwo,
    h3: HeadingThree,
    p: Paragraph
}

export const useMDXComponents = (): MDXComponents => (components)
