import Image from 'next/image';

import type { MDXComponents } from 'mdx/types';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from './components/tooltip';
import Separator from '@/components/others/separator';

import { ChildrenInterface } from '@/utils/interface/children';
import NextImageProps from '@/utils/types/next-image-props';

export const mdxComponents: MDXComponents = {
    Image: (props: NextImageProps) => (
        <Tooltip size={TooltipSize.md} disabled={props.alt === undefined} text={props.alt}>
            <Image {...props} />
        </Tooltip>),
    h1: ({ children }: ChildrenInterface) => <HeadingOne isAnchorLink containerClassName='ml-0'>{children}</HeadingOne>,
    h2: ({ children }: ChildrenInterface) => <HeadingTwo isAnchorLink containerClassName='ml-0'>{children}</HeadingTwo>,
    h3: ({ children }: ChildrenInterface) => <HeadingThree isAnchorLink containerClassName='!ml-0'>{children}</HeadingThree>,
    p: ({ children }: ChildrenInterface) => <Paragraph alignment={ParagraphAlignment.justify}>{children}</Paragraph>,
    a: ({ children, href }: ChildrenInterface & { href?: string }) => <a href={href} className='underline' target='_blank'>{children}</a>,
    hr: () => <Separator highMargin />,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});