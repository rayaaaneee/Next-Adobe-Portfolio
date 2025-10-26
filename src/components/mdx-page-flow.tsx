import Image from 'next/image';

import { BundledLanguage } from 'shiki';

import cn from '@/utils/function/cn';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip';
import Separator from '@/components/others/separator';

import CodeBlock from '@/components/blog/_components/code-block';

import ChildrenInterface from '@/utils/interface/children';
import ClassNameInterface from '@/utils/interface/classname';
import NextImageProps from '@/utils/types/next-image-props';

export const mdxImage = (props: NextImageProps) => (
    <Tooltip size={TooltipSize.md}
    className={cn(
        "img-container rounded-md mx-auto",
    )} disabled={props.alt === undefined} text={props.alt}>
        <Image {...props} className={cn(
            'cursor-zoom-in rounded-md',
            "border-4 border-white/40",
            "hover:scale-[1.01] transition-transform",
            props.className
        )} alt={props.alt} />
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
    <blockquote className={cn(
        'border-l-8 border-[blanchedalmond]/70 dark:border-pink-200/70',
        'pl-4 italic py-2',
        'flex items-center [&_*]:my-0',
        'bg-white/70 dark:bg-black/70 md:rounded-r-lg',
    )}>
        {children}
    </blockquote>
);

export const mdxList = ({ children }: ChildrenInterface) => (
    <ul className='list-disc [&>li]:ml-6 [&>li]:my-2'>
        {children}
    </ul>
);

export const mdxSeparator = () => (<Separator />);

export const mdxHeadingOne = ({ children }: ChildrenInterface) => (
    <HeadingOne isAnchorLink containerClassName='ml-0'>{children}</HeadingOne>
);

export const mdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <HeadingTwo isAnchorLink containerClassName='ml-0'>{children}</HeadingTwo>
);

export const mdxHeadingThree = ({ children }: ChildrenInterface) => (
    <HeadingThree isAnchorLink containerClassName='!ml-0'>{children}</HeadingThree>
);

export const mdxParagraph = ({ children }: ChildrenInterface) => (
    <Paragraph alignment={ParagraphAlignment.justify}>{children}</Paragraph>
);

export const mdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline' target='_blank'>
        {children}
    </a>
);