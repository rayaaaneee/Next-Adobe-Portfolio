"use client";

import { useEffect } from "react";

import { BundledLanguage } from "shiki";

import CodeBlockCopyButton from "./code-block-copy-button";
import { createRoot, Root } from "react-dom/client";

interface CodeBlockHeaderProps {
    text: string;
    parentId?: string;
    lang: BundledLanguage;
}

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
            elHeader.className = 'h-fit mt-3 mb-5 flex items-center justify-center';

            el.prepend(elHeader);

            const root = createRoot(elHeader);
            root.render(
                <>
                    <div className="points-container flex flex-row gap-2 absolute left-3">
                        { new Array(3).fill(0).map((_,i) => (
                            <span key={i} className={`block h-4 w-4 rounded-full mr-2 ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                        ))}
                    </div>
                    <p className="text-sm">{"</>"} <b>{lang.charAt(0).toUpperCase() + lang.slice(1)}</b></p>
                    <CodeBlockCopyButton className="absolute right-0" code={text} />
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
