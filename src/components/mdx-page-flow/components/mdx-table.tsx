/*
Table components :

Usage :

    Col1 | Col2 | Col3
    -----|------|-----
    Data1 | Data2 | Data3
    Data4 | Data5 | Data6

*/

import { type ReactNode } from "react";

import cn from "@/util/function/cn";

import hash from "hash-sum";

import type ChildrenInterface from "@/util/interface/children";

import { type TableInterface } from "../types/mdx-page-flow-interface";

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

import { ArticleWrapper } from "./article-wrapper";

import MdxTableRounded from "./table/table-rounded";
import MdxTableSorter from "./table/table-sorter";
import MdxTableResizer from "./table/table-resizer";



export const MdxTable = (props: ChildrenInterface) => {
    const id = `mdx-table-${hash(props).slice(0,8)}`;

    const ClientComponents: React.FC<TableInterface>[] = [
        MdxTableRounded,
        MdxTableSorter,
        MdxTableResizer
    ];

    return (
        <ArticleWrapper>
            <div className={cn(
                'w-full mt-6 overflow-x-auto',
                'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-400',
                'scrollbar-track-transparent',
            )}>
                <table id={id} className={cn(
                    'box-border w-full max-size',
                    'rounded-2xl table-auto border-collapse',
                    '[&.table-resize-cursor]:!cursor-col-resize'
                )}>
                    { props.children }
                </table>
            </div>
            { ClientComponents.map((ClientComponent, index) => (
                <ClientComponent key={index} tableId={id} />
            )) }
        </ArticleWrapper>
    );
}

export const MdxThead = (props: ChildrenInterface) => {
    return (
        <thead 
            className={cn(
                'font-apple',
                'bg-[#f0efed]/60 border dark:bg-[#383836]/60',
                'border-[#686766] dark:border-[#383836]/60',
                'rounded-md overflow-hidden'
            )}>
            { props.children }
        </thead>
    );
};

export const MdxTbody = (props: ChildrenInterface) => {
    return (
        <tbody className={cn(
            'font-apple',
            'bg-[#FFFFFF]/60 border dark:bg-[#191919]/60',
            'border-[#e6e5e3] dark:border-[#383836]/60',
            'rounded-md overflow-hidden'
        )}>
            { props.children }
        </tbody>
    );
};

export const MdxTr = (props: ChildrenInterface) => {
    return (
        <tr className={cn(
            'group transition-colors',
            'border border-[#e6e5e3] dark:border-[#383836]/60',
            'hover:bg-[#F7F7F6] dark:hover:bg-white/10'
        )}>
            { props.children }
        </tr>
    );
};

export const MdxTh = ({ children }: ChildrenInterface) => {
    return (
        <th className={cn(
            'px-4 py-3',
            'text-left align-middle text-md font-medium',
            'text-[#37352F] dark:text-[rgba(255,255,255,0.9)]',
            'border border-[#e6e5e3] dark:border-[#383836]',
            'first:rounded-tl-md last:rounded-tr-md',
            "cursor-pointer [.table-resize-cursor_&]:cursor-col-resize"
        )}>
            <div className={cn('select-none break-words inline-flex items-center gap-2')}>{ children }</div>
        </th>
    );
};


export const MdxTd = ({ children }: ChildrenInterface) => {

    type BooleanString = 'true' | 'false';

    enum _Severity {
        VERY_HIGH = 'Very High',
        HIGH = 'High',
        MEDIUM = 'Medium',
        LOW = 'Low',
    }

    const getBooleanString = (child: ReactNode): BooleanString | null => {
        if (typeof child === 'string') {
            const s = child.clean();
            if (s === 'true' || s === 'false') return s as BooleanString;
            else return null;
        }
        return null;
    }

    const isBooleanString = (child: ReactNode): child is BooleanString => 
        (getBooleanString(child) !== null);

    const isNumberString = (child: ReactNode): child is string => {
        if (typeof child === 'string') {
            const s = child.clean();
            return !Number.isNaN(Number(s));
        }
        return false;
    }

    const renderChild = (child: ReactNode): ReactNode => {
        const boolStr = getBooleanString(child);
        switch (boolStr) {
            case 'true':
                return <ImCheckmark className='text-green-500 text-2xl' />;
            case 'false':
                return <ImCross className='text-red-500 text-xl' />;
            default:
                return child;
        }
    };

    const getType = (children: ReactNode): 'boolean' | 'number' | 'text' => {
        if (isBooleanString(children)) return 'boolean';
        else if (isNumberString(children)) return 'number';
        else return 'text';
    };

    const containerClassName = `py-0.5 ${isBooleanString(children) ? 'flex justify-center' : 'break-words'}`;

    return (
        <td 
            className={cn(
                "px-4 py-2",
                "text-md text-[#37352F] dark:text-[rgba(255,255,255,0.9)]",
                "align-middle",
                "border border-[#e6e5e3] dark:border-[rgba(255,255,255,0.03)]"
            )}
            data-type={ getType(children) }
            data-value={ isBooleanString(children) ? children : undefined }
        >
            <div className={containerClassName}>
                { renderChild(children) }
            </div>
        </td>
    );
    
};