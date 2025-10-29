import { useState } from 'react';
import useLanguage from "@/utils/hook/use-language";
import { TypewriterProps, useTypewriter } from 'react-simple-typewriter';

import cn from "@/utils/function/cn";

import ClassNameInterface from '@/utils/interface/classname';

export interface TextTypeWriterProps extends ClassNameInterface {
    reduced?: boolean;
}

const TextTypeWriter = ({ id, className, reduced = false }: TextTypeWriterProps) => {

    const { language } = useLanguage();

    const textTab: readonly string[] = language.index.description.long;
    const reducedTextTab: readonly string[] = language.index.description.short;

    // Intitially longer delay for the first word (Rayane Merlin)
    const [delaySpeed, setDelaySpeed] = useState(4000);

    const typeWriterTemplate: Omit<TypewriterProps, "words"> = {
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: delaySpeed,
        onDelay: () => setDelaySpeed(800)
    }

    const [textTypeWriter] = useTypewriter({
        words: (reduced ? reducedTextTab : textTab) as string[],
        ...typeWriterTemplate
    });

    const emptyChar: string = '\u200B'; // Invisible character to prevent layout shift

    return (
        <h2 id={`typerWriter-${id}`} className={cn(
            '!leading-[1em] text-nowrap font-adobe font-semibold',
            'text-black dark:text-white',
            ['text-[14vw] sm:text-[8vw] lg:text-[7vw] xl:text-[6vw]'],
            className
        )}>
            { emptyChar }
            { textTypeWriter }
        </h2>
    )
}

export default TextTypeWriter;
