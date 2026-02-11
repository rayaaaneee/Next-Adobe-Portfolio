/* Usage :
language is optional, (lines) is optional (only if language) to show line numbers, 
and file name is optional (only if language) to show file name in the top right corner 
of the code block. 
The order of these options does not matter.
```language(lines)[file:/...]
    //[code content] 
```
*/

import { BundledLanguage } from "shiki";

import { MdxCodeProps } from "../types/mdx-page-flow-interface";
import { CodeBlock } from "./code-block/code-block";

export const MdxCode = ({ children, className }: MdxCodeProps) => {

    const fileRegex = /\[file:\/?([^\]]+)\]/;
    
    const lang: BundledLanguage | undefined = className?.removeAll(" ").remove('language-')
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