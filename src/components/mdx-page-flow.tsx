import React, { type ReactNode, type ReactElement, Children } from 'react';

import { type BundledLanguage } from 'shiki';

import { CgDanger } from "react-icons/cg";
import { MdInfo } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

import cn from '@/util/function/cn';

import { 
    Paragraph, 
    HeadingOne, 
    HeadingTwo, 
    HeadingThree, 
    HeadingFour, 
    ParagraphAlignment 
} from '@/components/page-flow';

import Tooltip, { TooltipSize } from '@/components/tooltip/tooltip';

import Separator from '@/components/other/separator';

import ImageFlow from '@/components/mdx/image-flow';

import CodeBlock from '@/components/mdx/code-block/code-block';

import type TableInterface from '@/components/mdx/table/table-interface';

import MdxTableSorter from './mdx/table/table-sorter';
import MdxTableResizer from './mdx/table/table-resizer';
import MdxTableRounded from './mdx/table/table-rounded';

import type NextImageProps from '@/util/type/next-image-props';

import ChildrenInterface, { type ChildrenType } from '@/util/interface/children';
import type ClassNameInterface from '@/util/interface/classname';

import getFirstChild, { removeFromFirstChild } from '@/util/function/get-first-child';

import hash from 'hash-sum';

const ArticleWrapper = ({ children, className, use = true }: ChildrenInterface & ClassNameInterface & { use?: boolean }) => 
    (
        use ? (
            <article className={cn(className)}>
                {children}
            </article>) 
            : 
            children
    )

// Usage : <Image src="..." alt="..." width={...} height={...} className="..." />
export const MdxImage = (props: NextImageProps) => (
    <ArticleWrapper className='max-size'>
        <Tooltip 
            size={TooltipSize.md}
            className={cn(
                "img-container rounded-md mx-auto mt-6 mb-3",
            )}
            disabled={props.alt === undefined} 
            literalText={props.alt}
        >
            <ImageFlow {...props} className={cn(
                'md:rounded-md object-contain h-fit box-border',
                "border-y-4 md:border-4 border-white/40",
                "md:hover:scale-[1.01] transition-transform",
                props.className
            )} alt={props.alt} />
        </Tooltip>
    </ArticleWrapper>
);

/* Usage :
language is mandatory, (lines) is optional to show line numbers, and file name is optional
```language(lines)[file:/...]]
    //[code content] 
```
*/
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

/* For code block */
export const MdxPre = ({ children }: { children: ChildrenType[] }) => (<>{children}</>);

/* Quote component with customizable type and icon */
// > [type=info,icon=true] // Optional
// > MdxQuote content...
// > MdxQuote content...
// TODO : ne prend pas en charge les elements complexes (Heading, Table, Separator, Anchor etc.) 
// dans le contenu.
// Actuellement seul les elements simples (Paragraph, Bold, Italic) sont supportés
// Necessitera de bidouiller le parsing (déjà sincèrement chaotique) pour supporter les elements complexes 
// tout en gardant la possibilité de définir le header de la quote
export const MdxQuote = ({ children }: { children: ReactNode[] }) => {

    // Clear array for unused vars
    const content = children.filter(children => {
        if (typeof children === "string" && children === "\n") return false
        else return true;
    });

    enum QuoteType {
        info = 'border-[blanchedalmond]/70 dark:border-pink-200/70',
        warning = 'border-yellow-400/70 dark:border-yellow-600/70',
        danger = 'border-red-400/70 dark:border-red-600/70',
        tip = 'border-green-400/70 dark:border-green-600/70',
    }

    const QuoteIcon: Record<keyof typeof QuoteType, ReactElement> = {
        info: <MdInfo className='text-3xl text-slate-600 dark:text-pink-200/70' />,
        warning: <IoWarning className='text-3xl text-yellow-400/70 dark:text-yellow-600/70' />,
        danger: <CgDanger className='text-3xl text-red-400/70 dark:text-red-600/70' />,
        tip: <FaLightbulb className='text-3xl text-green-400/70 dark:text-green-600/70' />,
    }

    type ParsedType = {
        type: keyof typeof QuoteType,
        icon: boolean,
        content: ReactNode,
    }

    const defaultValues: Omit<ParsedType, 'content'> = {
        type: 'info',
        icon: true,
    }

    const parseQuote = (children: ReactNode): ParsedType => {

        // if (debug) debugger; 
        children = Children.toArray(children);

        let type: ParsedType["type"] = defaultValues.type;
        let icon: ParsedType["icon"] = defaultValues.icon;

        const getDefaultValues = () => {
            const tmp = children;
            return ({ type, icon, content: tmp });
        }

        let firstLine = getFirstChild(children);
        
        if (firstLine.includes("\n")) {
            
            firstLine = firstLine.split("\n")[0];
            
        }
        
        let header: string;
        if (firstLine.trim().startsWith("[")) {
            // There's a header
            header = firstLine;
        } else {
            // There's no header defined
            return getDefaultValues();
        }

        const match = header.clean().removeAll(" ").match(/^\[(.*?)\]$/);

        if (!match) return getDefaultValues();

        children = removeFromFirstChild(header, children);

        // Parse params
        const params = match[1].split(",").map(p => p.trim()).filter(Boolean);

        for (const param of params) {

            if (param.startsWith("type=")) {

                const val = param.slice(5);

                if (!(val in QuoteType)) {
                    throw new Error(`Invalid type "${val}"`);
                }

                type = val as keyof typeof QuoteType;

            } else if (param.startsWith("icon=")) {

                const val = param.slice(5);

                if (val === "true") icon = true;
                else if (val === "false") icon = false;
                else throw new Error(`Invalid icon "${val}"`);

            } else {
                throw new Error(`Invalid parameter "${param}"`);
            }
        }
        
        return { type, icon, content: children };
    };


    const parsed: ParsedType = parseQuote(content);

    return (
        <ArticleWrapper className='max-size'>
            <blockquote className={cn(
                QuoteType[parsed.type],
                'border-l-8 text-lg',
                'pl-4 py-2 mt-6',
                'flex items-center gap-4 [&_*]:my-0 box-border',
                'bg-white/70 dark:bg-black/70 w-[113%] sm:w-full justify-self-center sm:justify-self-start sm:rounded-r-lg',
            )}>
                { parsed.icon && (
                    <div className='quote-icon text-2xl flex-shrink-0'>
                        {QuoteIcon[parsed.type]}
                    </div>
                ) }
                <div className='quote-content text-justify mr-4'>
                    { parsed.content }
                </div>
            </blockquote>
        </ArticleWrapper>
    );
};

/* Usage :

Title :
- List item 1
- List item 2

*/
export const MdxList = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <ul className='list-disc [&>li]:ml-8 [&>li]:my-2'>
            {children}
        </ul>
    </ArticleWrapper>
);

export const MdxListItem = ({ children }: ChildrenInterface) => (
    <li>
        <MdxParagraph>
            {children}
        </MdxParagraph>
    </li>
);


// Usage : ---
export const MdxSeparator = () => (<ArticleWrapper><Separator/></ArticleWrapper>);

// Usage : # Heading 1
export const MdxHeadingOne = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{ children }</HeadingOne>
    </ArticleWrapper>
);

// Usage : ## Heading 2
export const MdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingTwo isAnchorLink containerClassName='ml-0' className="mdx-heading">{ children }</HeadingTwo>
    </ArticleWrapper>
);

// Usage : ### Heading 3
export const MdxHeadingThree = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingThree isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingThree>
    </ArticleWrapper>
);

// Usage : #### Heading 4
export const MdxHeadingFour = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <HeadingFour isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingFour>
    </ArticleWrapper>
);

// Usage: My paragraph...
export const MdxParagraph = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <Paragraph alignment={ParagraphAlignment.justify}>{ children }</Paragraph>
    </ArticleWrapper>
);

// Usage : [My link](https://example.com) 
export const MdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline underline-offset-2' target='_blank'>
        { children }
    </a>
);

// Placeholder for Spoiler component — left empty for later implementation
export const MdxSpoiler = (props: ChildrenInterface & { title?: string, node?: unknown }) => {
    // Prefer explicit title prop (set by the remark plugin via hProperties.title)
    const title = props.title || undefined;
    return (
        <details className='mdx-spoiler'>
            <summary className='cursor-pointer underline underline-offset-2'>
                { title || 'Spoiler' }
            </summary>
            <div className='mt-2'>
                { props.children }
            </div>
        </details>
    );
};

/*
Table components :

Usage :

    Col1 | Col2 | Col3
    -----|------|-----
    Data1 | Data2 | Data3
    Data4 | Data5 | Data6

*/
export const MdxTable = (props: ChildrenInterface) => {
    const id = `mdx-table-${hash(props).slice(0,8)}`;

    const ClientComponents: React.FC<TableInterface>[] = [
        MdxTableRounded,
        MdxTableSorter,
        MdxTableResizer
    ];

    return (
        <ArticleWrapper>
            <div className={cn(
                'w-full mt-6 overflow-x-auto',
                'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-400',
                'scrollbar-track-transparent'
            )}>
                <table id={id} className={cn(
                    'box-border w-full max-size',
                    'rounded-2xl table-auto border-collapse'
                )}>
                    { props.children }
                </table>
            </div>
            { ClientComponents.map((ClientComponent, index) => (
                <ClientComponent key={index} tableId={id} />
            )) }
        </ArticleWrapper>
    );
}

export const MdxThead = (props: ChildrenInterface) => {
    return (
        <thead 
            className={cn(
                'font-apple',
                'bg-[#f0efed]/60 border dark:bg-[#383836]/60',
                'border-[#686766] dark:border-[#383836]/60',
                'rounded-md overflow-hidden'
            )}>
            { props.children }
        </thead>
    );
};

export const MdxTbody = (props: ChildrenInterface) => {
    return (
        <tbody className={cn(
            'font-apple',
            'bg-[#FFFFFF]/60 border dark:bg-[#191919]/60',
            'border-[#e6e5e3] dark:border-[#383836]/60',
            'rounded-md overflow-hidden'
        )}>
            { props.children }
        </tbody>
    );
};

export const MdxTr = (props: ChildrenInterface) => {
    return (
        <tr className={cn(
            'group transition-colors',
            'border border-[#e6e5e3] dark:border-[#383836]/60',
            'hover:bg-[#F7F7F6] dark:hover:bg-white/10'
        )}>
            { props.children }
        </tr>
    );
};

export const MdxTh = ({ children }: ChildrenInterface) => {
    return (
        <th className={cn(
            'px-4 py-3',
            'text-left align-middle text-md font-medium',
            'text-[#37352F] dark:text-[rgba(255,255,255,0.9)]',
            'border border-[#e6e5e3] dark:border-[#383836]',
            'first:rounded-tl-md last:rounded-tr-md'
        )}>
            <div className={cn('select-none break-words inline-flex items-center gap-2')}>{ children }</div>
        </th>
    );
};


export const MdxTd = ({ children }: ChildrenInterface) => {

    type BooleanString = 'true' | 'false';

    enum _Severity {
        VERY_HIGH = 'Very High',
        HIGH = 'High',
        MEDIUM = 'Medium',
        LOW = 'Low',
    }

    const getBooleanString = (child: ReactNode): BooleanString | null => {
        if (typeof child === 'string') {
            const s = child.clean();
            if (s === 'true' || s === 'false') return s as BooleanString;
            else return null;
        }
        return null;
    }

    const isBooleanString = (child: ReactNode): child is BooleanString => 
        (getBooleanString(child) !== null);

    const isNumberString = (child: ReactNode): child is string => {
        if (typeof child === 'string') {
            const s = child.clean();
            return !Number.isNaN(Number(s));
        }
        return false;
    }

    const renderChild = (child: ReactNode): ReactNode => {
        const boolStr = getBooleanString(child);
        switch (boolStr) {
            case 'true':
                return <ImCheckmark className='text-green-500 text-2xl' />;
            case 'false':
                return <ImCross className='text-red-500 text-xl' />;
            default:
                return child;
        }
    };

    const getType = (children: ReactNode): 'boolean' | 'number' | 'text' => {
        if (isBooleanString(children)) return 'boolean';
        else if (isNumberString(children)) return 'number';
        else return 'text';
    };

    const containerClassName = `py-0.5 ${isBooleanString(children) ? 'flex justify-center' : 'break-words'}`;

    return (
        <td 
            className={cn(
                "px-4 py-2",
                "text-md text-[#37352F] dark:text-[rgba(255,255,255,0.9)]",
                "align-middle",
                "border border-[#e6e5e3] dark:border-[rgba(255,255,255,0.03)]"
            )}
            data-type={ getType(children) }
            data-value={ isBooleanString(children) ? children : undefined }
        >
            <div className={containerClassName}>
                { renderChild(children) }
            </div>
        </td>
    );
};