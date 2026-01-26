import { Children, createElement, Fragment, isValidElement, ReactElement } from 'react';

import { BundledLanguage } from 'shiki';

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

import CodeBlock from '@/components/blog/_components/code-block';

import ChildrenInterface from '@/util/interface/children';
import ClassNameInterface from '@/util/interface/classname';

import NextImageProps from '@/util/type/next-image-props';
import { ChildrenType } from '@/util/interface/children';

import ImageFlow from './image-flow';

// Usage : <Image src="..." alt="..." width={...} height={...} className="..." />
export const MdxImage = (props: NextImageProps) => (
    <article className='max-size'>
        <Tooltip 
            size={TooltipSize.md}
            className={cn(
                "img-container rounded-md mx-auto",
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
    </article>
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
export const MdxPre = ({ children }: ChildrenInterface) => (<>{children}</>);

/* Quote component with customizable type and icon 
> [type=info,icon=true] // Optional
> MdxQuote content...
> MdxQuote content...
*/
import { CgDanger } from "react-icons/cg";
import { MdInfo } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { IconType } from 'react-icons/lib';

export const MdxQuote = ({ children }: ChildrenInterface) => {

    enum QuoteType {
        info = 'border-[blanchedalmond]/70 dark:border-pink-200/70',
        warning = 'border-yellow-400/70 dark:border-yellow-600/70',
        danger = 'border-red-400/70 dark:border-red-600/70',
        tip = 'border-green-400/70 dark:border-green-600/70',
    }

    const QuoteIcon: {
        [key in keyof typeof QuoteType]: ReactElement<IconType>;
    } = {
        info: <MdInfo className='text-3xl text-slate-600 dark:text-pink-200/70' />,
        warning: <IoWarning className='text-3xl text-yellow-400/70 dark:text-yellow-600/70' />,
        danger: <CgDanger className='text-3xl text-red-400/70 dark:text-red-600/70' />,
        tip: <FaLightbulb className='text-3xl text-green-400/70 dark:text-green-600/70' />,
    }

    type ParsedType = {
        type: keyof typeof QuoteType,
        icon: boolean,
        content: ChildrenType[],
    }

    const defaultValues: Omit<ParsedType, 'content'> = {
        type: 'info',
        icon: true,
    }

    const parseQuoteHeader = (): ParsedType => {
        // Find the first string child (usually the header line)
        let header: string | null = null;
        let content: ChildrenType[] = [];

        const childrenTyped = children as (string | ReactElement & { props : { children: string | (ReactElement & { props : { children: string } }) } })[];
        if (Array.isArray(childrenTyped)) {
            for (const c of childrenTyped) {
                if (typeof c !== 'string') {
                    if (!Array.isArray(c.props.children)) {
                        if ((c.props.children as string).trim().startsWith('[')) {
                            header = (c.props.children as string).trim().split('\n')[0];
                            content.push((c.props.children as string).trim().split('\n')[1]);
                            break;
                        }
                    } else {
                        if (typeof c.props.children[0] === 'string') {
                            header = (c.props.children)[0].trim().startsWith('[') ? (c.props.children)[0] : null;
                        } else {
                            // No defined header, it's ok :)
                        }
                        content = Children.toArray(c.props.children).slice(header ? 1 : 0).map((child, i) => {
                            if (typeof child === "string") {
                                if (child.includes("\n")) return (
                                    child.split("\n").map((line, j, arr) => {
                                        return (
                                            <Fragment key={`${i}-${j}`}>
                                                {line}
                                                {arr.length - 1 !== j ? <br /> : null}
                                            </Fragment>
                                        );
                                    })
                                );
                                else return child;
                            } else if (isValidElement(child)) {
                                return (child);
                            } else return String(child);
                        });
                        break;
                    }
                }
            }
        } else if (typeof children === 'string' && children.trim().startsWith('[')) {
            header = children.trim().split('\n')[0];
        }

        // Default values
        let type: keyof typeof QuoteType = 'info';
        let icon: boolean = true;

        // If header is present, parse it
        if (header && (header = header.removeAll(' ').trim())) {
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
            type = defaultValues.type;
            icon = defaultValues.icon;
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
                'pl-4 py-2 my-6',
                'flex items-center gap-4 [&_*]:my-0 box-border',
                'bg-white/70 dark:bg-black/70 w-[113%] xs:w-[108%] sm:w-full justify-self-center sm:justify-self-start sm:rounded-r-lg',
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
        </article>
    );
};

/* Usage :

Title :
- List item 1
- List item 2

*/
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


// Usage : ---
export const MdxSeparator = () => (<article><Separator/></article>);

// Usage : # Heading 1
export const MdxHeadingOne = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingOne isAnchorLink containerClassName='ml-0'>{ children }</HeadingOne>
    </article>
);

// Usage : ## Heading 2
export const MdxHeadingTwo = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingTwo isAnchorLink containerClassName='ml-0' className="mdx-heading">{ children }</HeadingTwo>
    </article>
);

// Usage : ### Heading 3
export const MdxHeadingThree = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingThree isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingThree>
    </article>
);

// Usage : #### Heading 4
export const MdxHeadingFour = ({ children }: ChildrenInterface) => (
    <article>
        <HeadingFour isAnchorLink containerClassName='!ml-0' className="mdx-heading">{ children }</HeadingFour>
    </article>
);

// Usage: My paragraph...
export const MdxParagraph = ({ children }: ChildrenInterface) => (
    <article>
        <Paragraph alignment={ParagraphAlignment.justify}>{ children }</Paragraph>
    </article>
);

// Usage
// [link_text](https://example.com) 
export const MdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline underline-offset-2' target='_blank'>
        { children }
    </a>
);