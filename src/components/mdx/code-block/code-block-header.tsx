import { BundledLanguage } from "shiki";

import { FaCircle } from "react-icons/fa6";

import CodeBlockCopyButton from "./code-block-copy-button";

import cn from "@/util/function/cn";

import { FaCode } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";
import { HeadingThree } from "@/components/page-flow";

interface CodeBlockHeaderProps {
    text: string;
    lang: BundledLanguage;
    filename?: string;
}

export const languageNamesWithInitials: BundledLanguage[] = [
    'jsx',
    'tsx',
    'html',
    'xml',
    'css',
    'scss',
    'mdx',
    'md',
    'json',
    'yaml',
    'yml',
    'sql',
    'php',
];

const CodeBlockHeader = ({ lang, text, filename }: CodeBlockHeaderProps) => {

    return (
        <div 
            className={cn(
                "h-fit mt-4 mb-5 flex items-center justify-center"
            )}
        >
            <div className="points-container flex flex-row gap-2 absolute left-5">
                { new Array(3).fill(0).map((_,i) => (
                    <FaCircle key={i} />
                ))}
            </div>
            <HeadingThree 
                icon={filename ? <FaRegFileCode className="mb-[2px] text-[0.8em]" /> : <FaCode className="mb-[2px] text-[0.8em]" />}
                containerClassName="!m-0 gap-1 !text-inherit"
                className={cn(
                    "text-sm font-semibold font-[inherit]",  
                    { "first-letter:uppercase": filename === undefined }
                )}
                >
                {filename ? 
                    filename 
                    : 
                    (languageNamesWithInitials.includes(lang) ? 
                        lang.toUpperCase() 
                        : 
                        lang
                    )
                }
            </HeadingThree>
            <CodeBlockCopyButton className="absolute right-0 text-inherit" code={text} />
        </div>
    );
}

export default CodeBlockHeader;
