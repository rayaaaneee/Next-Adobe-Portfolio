"use client";

import { useEffect } from "react";
import { createRoot, Root } from "react-dom/client";

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
    parentId?: string;
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

const CodeBlockHeader = ({ lang, text, parentId, filename }: CodeBlockHeaderProps) => {

    useEffect(() => {

        const parentCodeBlockSection = document.querySelector<HTMLElement>(`#${parentId}`);

        // For dark and light mode, there are two shiki code blocks inside the parent section
        if (!parentCodeBlockSection) throw new Error(`Parent code block ${parentId} not found for code block header.`);

        const shikiElements: HTMLElement[] = Array.from(
            parentCodeBlockSection.querySelectorAll<HTMLElement>('.shiki')
        ).filter((el): el is HTMLElement => el !== null);

        if (shikiElements.length !== 2) throw new Error(`Shiki code block element not found inside parent code block ${parentId}.`);

        const roots: Root[] = [];

        shikiElements.forEach((el) => {

            el.style.position = 'relative';

            const elHeader = document.createElement('div');
            elHeader.className = 'h-fit mt-3 mb-4 flex items-center justify-center';

            el.prepend(elHeader);

            const root = createRoot(elHeader);
            
            root.render(
                <>
                    <div className="points-container flex flex-row gap-2 absolute left-5">
                        { new Array(3).fill(0).map((_,i) => (
                            <FaCircle key={i} />
                        ))}
                    </div>
                    <HeadingThree 
                        icon={filename ? <FaRegFileCode className="mb-[2px] text-[0.8em]" /> : <FaCode className="mb-[2px] text-[0.8em]" />}
                        containerClassName="!m-0 gap-1"
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
                </>
            );

            roots.push(root);
        });

        return () => {
            roots.forEach((root) => root.unmount());
        };

    }, [lang, text, parentId, filename]);

    return null;
}

export default CodeBlockHeader;
