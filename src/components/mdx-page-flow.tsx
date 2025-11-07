import Image from 'next/image';

import { BundledLanguage } from 'shiki';

import cn from '@/util/function/cn';

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip';
import Separator from '@/components/others/separator';

import CodeBlock from '@/components/blog/_components/code-block';

import ChildrenInterface from '@/util/interface/children';
import ClassNameInterface from '@/util/interface/classname';
import NextImageProps from '@/util/type/next-image-props';

import FlowImage from './flow-image';

export const MdxImage = (props: NextImageProps) => (
    <article className='max-size'>
        <Tooltip 
            size={TooltipSize.md}
            className={cn(
                "img-container rounded-md mx-auto",
            )} 
            disabled={props.alt === undefined} 
            text={props.alt}
        >
            <FlowImage {...props} className={cn(
                'md:rounded-md object-contain h-fit box-border',
                "border-y-4 md:border-4 border-white/40",
                "md:hover:scale-[1.01] transition-transform",
                props.className
            )} alt={props.alt} />
        </Tooltip>
    </article>
);

/* Use : ```[file:/[]...]]language(lines) */
export interface mdxCodeProps extends ChildrenInterface, ClassNameInterface {} 
export const MdxCode = ({ children, className }: mdxCodeProps) => {

    const fileRegex = /\[file:\/?([^\]]+)\]/;
    
    const lang: BundledLanguage | undefined = className?.remove('language-')
        .remove('(lines)')
        .remove(fileRegex) as BundledLanguage;
    const showLineNumbers: boolean = className?.includes('(lines)') || false;
    const filename: string | undefined = className?.match(fileRegex)?.[1] || undefined;

    return (
        <CodeBlock
            lang={lang}
            showLineNumbers={showLineNumbers}
            filename={filename}
        >
            { children }
        </CodeBlock>
    );
}

export const MdxPre = ({ children }: ChildrenInterface) => (<>{children}</>);

export const MdxQuote = ({ children }: ChildrenInterface) => (
    <article className='max-size'>
        <blockquote className={cn(
            'border-l-8 border-[blanchedalmond]/70 dark:border-pink-200/70',
            'pl-4 italic py-2',
            'flex items-center [&_*]:my-0 box-border',
            'bg-white/70 dark:bg-black/70 w-[113%] xs:w-[108%] sm:w-full justify-self-center sm:justify-self-start sm:rounded-r-lg',
        )}>
            { children }
        </blockquote>
    </article>
);

export const MdxList = ({ children }: ChildrenInterface) => (
    <article>
        <ul className='list-disc [&>li]:ml-6 [&>li]:my-2'>
            {children}
        </ul>
    </article>
);

export const MdxSeparator = () => (<article><Separator/></article>);

export const MdxHeadingOne = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{ children }</HeadingOne>
    </article>
);

export const MdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingTwo isAnchorLink containerClassName='ml-0'>{ children }</HeadingTwo>
    </article>
);

export const MdxHeadingThree = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingThree isAnchorLink containerClassName='!ml-0'>{ children }</HeadingThree>
    </article>
);

export const MdxParagraph = ({ children }: ChildrenInterface) => (
    <article>
        <Paragraph alignment={ParagraphAlignment.justify}>{ children }</Paragraph>
    </article>
);

export const MdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline underline-offset-2' target='_blank'>
        { children }
    </a>
);