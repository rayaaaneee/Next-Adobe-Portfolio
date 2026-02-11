import { BundledLanguage } from 'shiki';

import hash_sum from 'hash-sum';

import { type ChildrenType } from '@/util/interface/children';

import cn from '@/util/function/cn';

import CodeBlockContent from './code-block-content';
import CodeBlockParent from './code-block-parent';

export interface CodeBlockProps {
  children: ChildrenType;
  showLineNumbers?: boolean;
  filename?: string;
  lang?: BundledLanguage,
}

export const CodeBlock = (props: CodeBlockProps) => {

    const { children, lang, filename, showLineNumbers = false } = props;

    const code: string = String(children).trim();

    const inlineCode: boolean = !lang;

    const id: string = cn(!inlineCode && (`code-block-${hash_sum(props)}`));

    const codeBlockContent = <CodeBlockContent
        inlineCode={inlineCode} 
        showLineNumbers={showLineNumbers} 
        code={code}
        filename={filename}
        lang={lang}
    />;

    if (inlineCode) return codeBlockContent;
    else return (
        <CodeBlockParent id={id}>
            { codeBlockContent }
        </CodeBlockParent>
    );
}
