import { BundledLanguage } from 'shiki';

import cn from '@/util/function/cn';

import { HeadingFour, HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment } from '@/components/page-flow';
import Tooltip, { TooltipSize } from '@/components/tooltip';
import Separator from '@/components/other/separator';

import CodeBlock from '@/components/blog/_components/code-block';

import ChildrenInterface from '@/util/interface/children';
import ClassNameInterface from '@/util/interface/classname';
import NextImageProps from '@/util/type/next-image-props';

import FlowImage from './flow-image';
import { ReactElement } from 'react';

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

export const MdxQuote = ({ children }: ChildrenInterface) => {

    enum QuoteType {
        info = 'border-[blanchedalmond]/70 dark:border-pink-200/70',
        warning = 'border-yellow-400/70 dark:border-yellow-600/70',
        danger = 'border-red-400/70 dark:border-red-600/70',
        tip = 'border-green-400/70 dark:border-green-600/70',
    }

    enum QuoteIcon {
        info = 'ℹ️',
        warning = '⚠️',
        danger = '❌',
        tip = '💡',
    }

    type ParsedType = {
        type: keyof typeof QuoteType,
        icon: boolean,
        content: string,
    }

    const parseQuoteHeader = (): ParsedType => {
        // Find the first string child (usually the header line)
        let header = '';
        let content = '';

        const childrenTyped = children as (string | ReactElement & { props : { children: string | (ReactElement & { props : { children: string } }) } })[];
        if (Array.isArray(childrenTyped)) {
            for (const c of childrenTyped) {
                if (typeof c !== 'string' && (c.props.children as string).trim().startsWith('[')) {
                    header = (c.props.children as string).trim().split('\n')[0];
                    content = (c.props.children as string).trim().split('\n')[1];
                    break;
                }
            }
        } else if (typeof children === 'string' && children.trim().startsWith('[')) {
            header = children.trim().split('\n')[0];
        }
        
        console.log('Content after header:', content);
        console.log('Quote header:', header);

        // Default values
        let type: keyof typeof QuoteType = 'info';
        let icon: boolean = true;

        // If header is present, parse it
        if (header) {
            // Accept [type=...], [icon=...], [type=...,icon=...], [icon=...,type=...], []
            // Regex: [type=TYPE,icon=ICON] or [icon=ICON,type=TYPE] or [type=TYPE] or [icon=ICON] or []
            const regex = /^\[(.*?)\]$/;
            const match = header.match(regex);
            if (match) {
                const params = match[1].split(',').map(s => s.trim()).filter(Boolean);
                for (const param of params) {
                    if (param.startsWith('type=')) {
                        const val = param.slice(5);
                        if (!val) throw new Error('Invalid type: empty value');
                        if (!(val in QuoteType)) throw new Error(`Invalid type value: "${val}". Allowed values are: ${Object.keys(QuoteType).join(', ')}`);
                        type = val as keyof typeof QuoteType;
                    } else if (param.startsWith('icon=')) {
                        const val = param.slice(5);
                        if (!val) throw new Error('Invalid icon: empty value');
                        if (val === 'false') icon = false;
                        else if (val === 'true') icon = true;
                        else throw new Error(`Invalid icon value: "${val}". Allowed values are: true, false`);
                    } else if (param.length > 0) {
                        throw new Error(`Invalid parameter: "${param}". Allowed: type=..., icon=...`);
                    }
                }
            }
        } else {
            throw new Error("Header for quote block cannot be parsed.");
        }
        return { type, icon, content };
    }

    let parsed: ParsedType;
    try {
        parsed = parseQuoteHeader();
    } catch (e) {
        // Optionally, you can render an error block or rethrow
        throw e;
    }

    return (
        <article className='max-size'>
            <blockquote className={cn(
                QuoteType[parsed.type],
                'border-l-8 text-lg',
                'pl-4 italic py-2 my-6',
                'flex items-center gap-4 [&_*]:my-0 box-border',
                'bg-white/70 dark:bg-black/70 w-[113%] xs:w-[108%] sm:w-full justify-self-center sm:justify-self-start sm:rounded-r-lg',
            )}>
                { parsed.icon && (
                    <div className='quote-icon not-italic'>
                        {QuoteIcon[parsed.type]}
                    </div>
                ) }
                { parsed.content }
            </blockquote>
        </article>
    );
};

export const MdxList = ({ children }: ChildrenInterface) => (
    <article>
        <ul className='list-disc [&>li]:ml-8 [&>li]:my-2'>
            {children}
        </ul>
    </article>
);

export const MdxListItem = ({ children }: ChildrenInterface) => (
    <li>
        <MdxParagraph>
            {children}
        </MdxParagraph>
    </li>
);

export const MdxSeparator = () => (<article><Separator/></article>);

export const MdxHeadingOne = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{ children }</HeadingOne>
    </article>
);

export const MdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingTwo isAnchorLink containerClassName='ml-0' className="mdx-heading">{ children }</HeadingTwo>
    </article>
);

export const MdxHeadingThree = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingThree isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingThree>
    </article>
);

export const MdxHeadingFour = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingFour isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingFour>
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