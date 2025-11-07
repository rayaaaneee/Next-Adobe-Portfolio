"use client";

import Link from 'next/link';

import cn from "@/util/function/cn";

import useLanguage from '@/util/hook/use-language';

import ClassNameInterface from '@/util/interface/classname';

interface GetStartedProps extends ClassNameInterface {
    colored?: boolean
}


const GetStarted = ({
    className,
    id,
    colored = false
}: GetStartedProps) => {

    const text: string = useLanguage().language.index.discover;

    return (
        <Link id={`getStarted-${id}`} href={'/home'} className={cn(
            "hover:bg-[rgba(237,186,147,0.35)] font-poppins w-fit h-fit",
            { "bg-[rgba(237,186,147,0.7)] hover:bg-[rgba(237,186,147,0.85)]": colored },
            { "dark:bg-[#4b3e4dad] dark:hover:bg-[#30052b4d]" : colored },
            "p-4 rounded-full flex items-center justify-center text-xl font-medium text-white no-underline",
            "transition-all duration-300 border-white border-2 text-nowrap tracking-wide z-1",
            "dark:bg-[#4b3e4dad] dark:hover:bg-[#30052b4d]",
            className
        )}>{ text }</Link>
    )
}

export default GetStarted
