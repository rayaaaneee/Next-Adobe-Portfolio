"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useCallback, useRef } from 'react';

import cn from '@/utils/function/cn';

import QuitButton from '@/components/quit-button'

const Part = () => {

    const router = useRouter();

    const hashChanges = useRef<number>(0);

    useEffect(() => {

        if (typeof window === "undefined") throw new Error("Window is undefined");
        if (typeof document === "undefined") throw new Error("Document is undefined");

        document.body.classList.add("no-overflow");

        const hashChangeHandler = () => (hashChanges.current += 1);

        window.addEventListener("hashchange", hashChangeHandler);

        return () => {
            window.removeEventListener("hashchange", hashChangeHandler);
        };
    }, []);

    const closePage = useCallback(() => {
        for (let i = 0; i < hashChanges.current + 1; i++) {
            router.back();
        }
        hashChanges.current = 0;
    }, [hashChanges, router]);

    useEffect(() => {

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closePage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [closePage]);

    return (
        <>
            <div className={cn(
                "fixed left-0 top-0 w-full h-full backdrop-blur-md",
                "bg-white/70 dark:bg-black/70",
            )} onClick={closePage} />
            <QuitButton
                title="blog"
                id="blog-modal-close"
                className={cn("fixed top-14 right-14 w-10 h-10 bg-red-300")}
                onClick={ closePage }
            />
        </>
    )
}

export default Part
