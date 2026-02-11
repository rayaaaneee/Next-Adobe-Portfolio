import { JSX } from 'react';

import cn from '@/util/function/cn';

import { BundledLanguage, BundledTheme, codeToTokens, TokensResult } from 'shiki';

import CodeBlockHeader from './code-block-header';

export interface CodeBlockContentProps {
    inlineCode: boolean;
    showLineNumbers: boolean;
    code: string;
    lang?: BundledLanguage,
    filename?: string;
}

export type Theme = "light" | "dark";

const CodeBlockContent = async ({ inlineCode, showLineNumbers, code, lang, filename }: CodeBlockContentProps) => {

    const isHTML = (code: string) => code.includes('<') && code.includes('>');

    const themes: { [K in Theme]: BundledTheme } = {
        light: 'material-theme-lighter',
        dark: 'catppuccin-frappe',
    };

    type ThemedCode = {
        theme: Theme,
        code: TokensResult,
    }

    const codes: ThemedCode[] = await Promise.all(

        (Object.entries(themes)).map(async ([themeKey, themeValue]) => {

            const codeTokens = await codeToTokens(code, { 
                lang: inlineCode ? (isHTML(code) ? 'html' : 'typescript') : lang!,
                theme: themeValue as BundledTheme,
            });

            return {
                theme: themeKey as Theme, 
                code: codeTokens
            } satisfies ThemedCode;

        })

    );

    const getCode = (theme: Theme): TokensResult => {
        const found = codes.find(c => c.theme === theme);
        if (!found) throw new Error(`Theme ${theme} is unresolved`);
        return found.code;
    };

    const formatCode = (

        light: TokensResult,
        dark: TokensResult

    ): JSX.Element => (
        <>
            {light.tokens.map((line, lineIndex) => {
                const darkLine = dark.tokens[lineIndex];
                return (
                    <div key={lineIndex} className='line whitespace-pre'>
                        { line.map((token, tokenIndex) => {

                            const darkToken = darkLine[tokenIndex];

                            return (
                                <span
                                    key={tokenIndex}
                                    style={{
                                        '--token-light': token.color,
                                        '--token-dark': darkToken?.color,
                                        fontStyle: token.fontStyle === 1 ? 'italic' : undefined,
                                        fontWeight: token.fontStyle === 2 ? 'bold' : undefined,
                                    } as React.CSSProperties}
                                    className={cn(
                                        "text-[color:var(--token-light)]",
                                        "dark:text-[color:var(--token-dark)]"
                                    )}
                                >
                                    {token.content}
                                </span>
                            );
                        })}
                        
                    </div>

                );
            })}
        </>
    );

    const baseClassName = inlineCode && 'inline-code';

    const codeContainerBaseClassName = cn(
        "code-container flex flex-col", 
        { "no-lines": !showLineNumbers },
        baseClassName,
    );
    
    return (
        <div
            style={{ 
                "--code-bg-light": getCode("light").bg,
                "--code-bg-dark": getCode("dark").bg,
                "--code-font-color-light": getCode("light").fg,
                "--code-font-color-dark": getCode("dark").fg,
             } as React.CSSProperties}
            className={cn(
                `${codeContainerBaseClassName} [&.inline-code]:inline-block`,
                "bg-[color:var(--code-bg-light)] dark:bg-[color:var(--code-bg-dark)]",
                "text-[color:var(--code-font-color-light)] dark:text-[color:var(--code-font-color-dark)]",
            )}
        >
            {!inlineCode ? (
                <>
                    <CodeBlockHeader 
                        text={code}
                        lang={lang!}
                        filename={filename}
                    />
                    <pre className={cn(
                        "m-0 rounded-b-lg px-4 pb-3 overflow-auto",
                        baseClassName
                    )} >
                        <code>
                            { formatCode(getCode("light"), getCode("dark")) }
                        </code>
                    </pre>
                </>
            ) : (
                <>{ formatCode(getCode("light"), getCode("dark")) }</>
            ) }
        </div>
    );
}

export default CodeBlockContent;
