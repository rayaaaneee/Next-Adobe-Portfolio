import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki';

import CodeBlockHeader from './code-block/code-block-header';

import ChildrenInterface, { type ChildrenType } from '@/utils/interface/children';

import hash_sum from 'hash-sum';
import cn from '@/utils/function/cn';

export interface CodeBlockProps {
  children: ChildrenType;
  showLineNumbers?: boolean;
  lang?: BundledLanguage,
}

const CodeBlock = async (props: CodeBlockProps) => {

    const { children, lang, showLineNumbers = false } = props;

    const code: string = String(children).trim();

    const inlineCode: boolean = !lang;

    const id: string = cn(!inlineCode && (`code-block-${hash_sum(props)}`));

    const themes: Record<'light'|'dark', BundledTheme> = {
        light: 'material-theme-lighter',
        dark: 'catppuccin-frappe',
    };

    const isHTML = (code: string) => code.includes('<') && code.includes('>');

    const codes = await Promise.all(
        (Object.entries(themes)).map(async ([themeKey, themeValue]) => {
            const codeHtml = await codeToHtml(code, { 
                lang: inlineCode ? (isHTML(code) ? 'html' : 'typescript') as BundledLanguage : lang!,
                theme: themeValue,
            });
            return [themeKey, codeHtml] as [string, string];
        })
    );

    const codeThemes: Record<string, string> = Object.fromEntries(codes);

    const baseClassName = inlineCode && 'inline-code';

    const CodeBlockParent = ({ children }: ChildrenInterface) => (
        <article id={id} className='relative code-block max-size'>
            {children}
        </article>
    );

    const codeContainerBaseClassName = cn(
        "code-container block", 
        { "no-lines": !showLineNumbers },
        baseClassName,
    );
    const CodeBlockContent = () => (
        <>
            <div className={`${codeContainerBaseClassName} [&.inline-code]:inline-block dark:!hidden`} dangerouslySetInnerHTML={{ __html: codeThemes.light }} />
            <div className={`${codeContainerBaseClassName} hidden dark:[&.inline-code]:inline-block dark:block`} dangerouslySetInnerHTML={{ __html: codeThemes.dark }} />
        </>
    );

    if (inlineCode) return <CodeBlockContent />;
    else return (
        <CodeBlockParent>
            {!inlineCode && (<CodeBlockHeader lang={lang!} text={code} parentId={id as string} />) }
            <CodeBlockContent />
        </CodeBlockParent>
    );
}

export default CodeBlock;
