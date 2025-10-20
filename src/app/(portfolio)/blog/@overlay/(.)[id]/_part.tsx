"use client";

import { useRouter } from 'next/navigation';

import cn from '@/utils/function/cn';

import QuitButton from '@/components/quit-button'

const Part = () => {

    const router = useRouter();

    const closePage = () => (router.back());

    return (
        <>
            <div className="fixed inset-0 w-full h-full" onClick={closePage} />
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
