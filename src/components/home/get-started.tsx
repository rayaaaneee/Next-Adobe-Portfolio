"use client";

import { cn } from '@/lib/utils';
import languageContext from '@/utils/context/language-context';
import useTryingContext from '@/utils/hook/use-try-context';
import Link from 'next/link';

interface GetStartedProps {
    className?: string
}

const GetStarted = ({
    className
}: GetStartedProps) => {

    const text = useTryingContext(languageContext).language.home.discover;

    return (
        <Link href={'/home'} className={cn(
            "hover:bg-[rgba(237,186,147,0.35)] font-poppins",
            "p-4 rounded-full flex items-center justify-center text-xl font-medium text-white no-underline",
            "transition-all duration-300 border-white border-2 text-nowrap tracking-wide z-1",
            "dark:bg-[#4b3e4dad] dark:hover:bg-[#30052b4d]",
            className
        )}>{ text }</Link>
    )
}

export default GetStarted
