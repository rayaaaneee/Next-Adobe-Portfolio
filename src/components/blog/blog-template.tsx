import { cn } from '@/lib/utils';

import { HeadingOne } from '../page-flow';
import Separator from '../home/separator';
import ComingSoon from '../coming-soon';
import { MouseEventHandler } from 'react';
import QuitButton from '../quit-button';

export interface BlogTemplateProps {
    id: string;
    quitButtonHref?: string;
    quitButtonClassName?: string;
    onClose?: MouseEventHandler<HTMLSpanElement>;
    onBackgroundClick?: MouseEventHandler<HTMLDivElement>;
}

const BlogTemplate = ({ id, onBackgroundClick, onClose, quitButtonClassName, quitButtonHref }: BlogTemplateProps) => {
    return (
        <>
            <QuitButton
                title="blog"
                id="blog-modal-close"
                href={quitButtonHref}
                className={cn("fixed top-14 right-14 w-10 h-10 bg-red-300", quitButtonClassName)}
                onClick={ onClose }
            />
            <div
                onClick={ onBackgroundClick } 
                id="blog-modal-bg" 
                className="fixed inset-0 w-full h-full bg-white/70 dark:bg-black/70">
            </div>
            <div className={cn(
                "absolute inset-0 w-2/3 min-h-full h-fit box-border mx-auto py-5 my-14",
                "bg-white/80 dark:bg-black/80 rounded-lg",
                "flex flex-col gap-5"
            )}>
                <HeadingOne containerClassName="w-full mx-auto !m-0">Blog</HeadingOne>
                <Separator className="!my-0" />
                <ComingSoon title={id} />
            </div>
        </>
    )
}

export default BlogTemplate;
