import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki';

import CodeBlockHeader from './md/code-block/code-block-header';

import { ChildrenInterface, ChildrenType } from '@/utils/interface/children';

import hash_sum from 'hash-sum';

export interface CodeBlockProps {
  children: ChildrenType;
  lang?: BundledLanguage,
}

const CodeBlock = async (props: CodeBlockProps) => {

    const { children, lang } = props;

    const code: string = String(children).trim();

    const inlineCode: boolean = !lang;

    const id = !inlineCode && (`code-block-${hash_sum(props)}`);

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
        <section id={id as string} className='relative code-block'>
            {children}
        </section>
    );

    const CodeBlockContent = () => (
        <>
            <div className={`code-container block [&.inline-code]:inline-block dark:!hidden ${baseClassName}`} dangerouslySetInnerHTML={{ __html: codeThemes.light }} />
            <div className={`code-container hidden dark:[&.inline-code]:inline-block dark:block ${baseClassName}`} dangerouslySetInnerHTML={{ __html: codeThemes.dark }} />
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
