/* Quote component with customizable type and icon */
// > [type=info,icon=true] // Optional
// > # MdxQuote title...
// > **MdxQuote** content...

import cn from "@/util/function/cn";

import { ArticleWrapper } from "./article-wrapper";
import { Children, type ReactElement, type ReactNode } from "react";

import { MdInfo } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { FaLightbulb } from "react-icons/fa6";

import getFirstText, { removeFromFirstText } from "@/util/function/get-first-text";

export const MdxQuote = ({ children }: { children: ReactNode[] }) => {

    // Clear array for unused vars
    const content = children.filter(children => {
        if (typeof children === "string" && children === "\n") return false
        else return true;
    });

    enum QuoteType {
        info = 'border-[blanchedalmond]/70 dark:border-pink-200/70',
        warning = 'border-yellow-400/70 dark:border-yellow-600/70',
        danger = 'border-red-400/70 dark:border-red-600/70',
        tip = 'border-green-400/70 dark:border-green-600/70',
    }

    const QuoteIcon: Record<keyof typeof QuoteType, ReactElement> = {
        info: <MdInfo className='text-3xl text-slate-600 dark:text-pink-200/70' />,
        warning: <IoWarning className='text-3xl text-yellow-400/70 dark:text-yellow-600/70' />,
        danger: <CgDanger className='text-3xl text-red-400/70 dark:text-red-600/70' />,
        tip: <FaLightbulb className='text-3xl text-green-400/70 dark:text-green-600/70' />,
    }

    type ParsedType = {
        type: keyof typeof QuoteType,
        icon: boolean,
        content: ReactNode,
    }

    const defaultValues: Omit<ParsedType, 'content'> = {
        type: 'info',
        icon: true,
    }

    const parseQuote = (children: ReactNode): ParsedType => {

        // if (debug) debugger; 
        children = Children.toArray(children);

        let type: ParsedType["type"] = defaultValues.type;
        let icon: ParsedType["icon"] = defaultValues.icon;

        const getDefaultValues = () => {
            const tmp = children;
            return ({ type, icon, content: tmp });
        }

        let firstLine = getFirstText(children);
        
        if (firstLine.includes("\n")) {
            
            firstLine = firstLine.split("\n")[0];
            
        }
        
        let header: string;
        if (firstLine.trim().startsWith("[")) {
            // There's a header
            header = firstLine;
        } else {
            // There's no header defined
            return getDefaultValues();
        }

        const match = header.clean().removeAll(" ").match(/^\[(.*?)\]$/);

        if (!match) return getDefaultValues();

        children = removeFromFirstText(header, children);

        // Parse params
        const params = match[1].split(",").map(p => p.trim()).filter(Boolean);

        const invalidParam = (param: string, val: string, allowed: readonly { toString(): string }[]) => 
            (new Error(
                `Invalid ${param} "${val}". Here's accepted values: ${allowed.map(v => `"${v.toString()}"`).join(", ")}.`
            ));


        for (const param of params) {

            if (param.startsWith("type=")) {

                const val = param.slice(5);
                const allowed = Object.keys(QuoteType);

                if (!allowed.includes(val)) throw invalidParam("type", val, allowed);

                type = val as keyof typeof QuoteType;

            } else if (param.startsWith("icon=")) {

                const val = param.slice(5);
                const allowed = ["true", "false"];

                if (!allowed.includes(val)) throw invalidParam("icon", val, allowed);

                icon = val === "true";

            } else {

                const allowed = Object.keys(defaultValues);
                
                throw invalidParam("parameter", param, allowed);

            }
        }
        
        return { type, icon, content: children };
    };


    const parsed: ParsedType = parseQuote(content);

    return (
        <ArticleWrapper className='max-size'>
            <blockquote className={cn(
                QuoteType[parsed.type],
                'border-l-8 text-lg',
                'pl-4 py-2 mt-6',
                'flex items-center gap-4 [&_*]:my-0 box-border',
                'bg-white/70 dark:bg-black/70 w-[113%] sm:w-full justify-self-center sm:justify-self-start sm:rounded-r-lg',
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
        </ArticleWrapper>
    );
};