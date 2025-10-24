import Image from 'next/image';

import type { MDXComponents } from 'mdx/types';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip';
import Separator from '@/components/others/separator';

import CodeBlock from '@/components/blog/code-block';

import { ChildrenInterface, ChildrenType } from '@/utils/interface/children';
import NextImageProps from '@/utils/types/next-image-props';
import { BundledLanguage } from 'shiki';
import cn from './utils/function/cn';

export const mdxComponents: MDXComponents = {
    Image: (props: NextImageProps) => (
        <Tooltip size={TooltipSize.md} className="img-container" disabled={props.alt === undefined} text={props.alt}>
            <Image {...props} className={cn('cursor-zoom-in', props.className)} alt={props.alt} />
        </Tooltip>
    ),
    code: ({ children, className }: { children: ChildrenType; className?: string }) => (
        <CodeBlock
            lang={className?.remove('language-').remove('(lines)') as BundledLanguage || undefined}
            showLineNumbers={className?.includes('(lines)')}
        >
            {children}
        </CodeBlock>
    ),
    pre: ({ children }: ChildrenInterface) => (<>{children}</>),
    ul: ({ children }: ChildrenInterface) => (
        <article>
            <ul className='list-disc [&>li]:ml-6 [&>li]:my-2'>
                {children}
            </ul>
        </article>
    ),
    hr: () => <Separator highMargin />,
    h1: ({ children }: ChildrenInterface) => <article><HeadingOne isAnchorLink containerClassName='ml-0'>{children}</HeadingOne></article>,
    h2: ({ children }: ChildrenInterface) => <article><HeadingTwo isAnchorLink containerClassName='ml-0'>{children}</HeadingTwo></article>,
    h3: ({ children }: ChildrenInterface) => <article><HeadingThree isAnchorLink containerClassName='!ml-0'>{children}</HeadingThree></article>,
    p: ({ children }: ChildrenInterface) => <article><Paragraph alignment={ParagraphAlignment.justify}>{children}</Paragraph></article>,
    a: ({ children, href }: ChildrenInterface & { href?: string }) => <a href={href} className='underline' target='_blank'>{children}</a>,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
    ...mdxComponents,
    ...components,
});