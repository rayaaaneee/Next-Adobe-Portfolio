import { cn } from '@/lib/utils';
import languageContext from '@/utils/context/language-context';
import useTryingContext from '@/utils/hook/use-try-context';

import ClassNameInterface from '@/utils/interface/classname';
import { useState } from 'react';
import { TypewriterProps, useTypewriter } from 'react-simple-typewriter';

export interface TextTypeWriterProps extends ClassNameInterface {
    reduced?: boolean;
}

const TextTypeWriter = ({ id, className, reduced = false }: TextTypeWriterProps) => {

    const { language } = useTryingContext(languageContext);

    const textTab: readonly string[] = language.home.description;
    const reducedTextTab: readonly string[] = language.home.reduced_description;

        // Intitially longer delay for the first word
    const [delaySpeed, setDelaySpeed] = useState(3000);

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

    const emptyChar: string = '\u200B';

    return (
        <h2 id={`typerWriter-${id}`} className={cn(
            'text-white text-nowrap leading-[1] [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)] font-adobe font-semibold text-[14vw]',
            'sm:text-[8vw] md:text-[6vw]', 
            className
        )}>
            { emptyChar }
            { textTypeWriter }
        </h2>
    )
}

export default TextTypeWriter;
