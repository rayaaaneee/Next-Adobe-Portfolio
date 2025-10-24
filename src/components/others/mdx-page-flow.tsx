import Image from 'next/image';

import { BundledLanguage } from 'shiki';

import cn from '@/utils/function/cn';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip';
import Separator from '@/components/others/separator';

import CodeBlock from '@/components/blog/code-block';

import ChildrenInterface from '@/utils/interface/children';
import ClassNameInterface from '@/utils/interface/classname';
import NextImageProps from '@/utils/types/next-image-props';

export const mdxImage = (props: NextImageProps) => (
    <Tooltip size={TooltipSize.md} className="img-container" disabled={props.alt === undefined} text={props.alt}>
        <Image {...props} className={cn('cursor-zoom-in', props.className)} alt={props.alt} />
    </Tooltip>
);

export interface mdxCodeProps extends ChildrenInterface, ClassNameInterface {} 
export const mdxCode = ({ children, className }: mdxCodeProps) => (
    <CodeBlock
        lang={className?.remove('language-').remove('(lines)') as BundledLanguage || undefined}
        showLineNumbers={className?.includes('(lines)')}
    >
        {children}
    </CodeBlock>
);

export const mdxPre = ({ children }: ChildrenInterface) => (<>{children}</>);

export const mdxQuote = ({ children }: ChildrenInterface) => (
    <article>
        <blockquote className={cn(
            'border-l-8 border-[blanchedalmond]/70 dark:border-pink-200/70',
            'pl-4 italic py-2',
            'flex items-center [&_*]:my-0',
            'bg-white/70 dark:bg-black/70 rounded-r-lg',
        )}>
            {children}
        </blockquote>
    </article>
);

export const mdxList = ({ children }: ChildrenInterface) => (
    <article>
        <ul className='list-disc [&>li]:ml-6 [&>li]:my-2'>
            {children}
        </ul>
    </article>
);

export const mdxSeparator = () => (<Separator highMargin />);

export const mdxHeadingOne = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{children}</HeadingOne>
    </article>
);

export const mdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingTwo isAnchorLink containerClassName='ml-0'>{children}</HeadingTwo>
    </article>
);

export const mdxHeadingThree = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingThree isAnchorLink containerClassName='!ml-0'>{children}</HeadingThree>
    </article>
);

export const mdxParagraph = ({ children }: ChildrenInterface) => (
    <article>
        <Paragraph alignment={ParagraphAlignment.justify}>{children}</Paragraph>
    </article>
);

export const mdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline' target='_blank'>
        {children}
    </a>
);