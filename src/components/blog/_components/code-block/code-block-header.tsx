"use client";

import { useEffect } from "react";

import { BundledLanguage } from "shiki";

import { FaCircle } from "react-icons/fa6";

import CodeBlockCopyButton from "./code-block-copy-button";
import { createRoot, Root } from "react-dom/client";

interface CodeBlockHeaderProps {
    text: string;
    parentId?: string;
    lang: BundledLanguage;
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
];

const CodeBlockHeader = ({ lang, text, parentId }: CodeBlockHeaderProps) => {

    useEffect(() => {

        const parentCodeBlockSection = document.querySelector<HTMLElement>(`#${parentId}`);

        // For dark and light mode, there are two shiki code blocks inside the parent section
        if (!parentCodeBlockSection) throw new Error(`Parent code block ${parentId} not found for code block header.`);

        const shikiElements = Array.from(
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
                    <p className="text-sm">{"</>"} <b className="inline-block first-letter:uppercase">{languageNamesWithInitials.includes(lang) ? lang.toUpperCase() : lang }</b></p>
                    <CodeBlockCopyButton className="absolute right-0 text-inherit" code={text} />
                </>
            );

            roots.push(root);
        });

        return () => {
            roots.forEach((root) => root.unmount());
        };

    }, []);

    return null;
}

export default CodeBlockHeader;
