"use client";

import { cn } from '@/lib/utils';

import { useState } from 'react';
import { TypewriterProps, useTypewriter } from 'react-simple-typewriter';
import useTryingContext from '@/utils/hook/use-try-context';

import languageContext from '@/utils/context/language-context';
import GetStarted from './get-started';
import TextTypeWriter from './text-type-writer';
import BlinkingVerticalBar from './blinking-vertical-bar';

const MainContainer = () => {

    const { language } = useTryingContext(languageContext);

    const textTab: readonly string[] = language.home.description;
    const reducedTextTab: readonly string[] = language.home.reduced_description;

        // Intitially longer delay for the first word
    const [delaySpeed, setDelaySpeed] = useState(3000);

    const typeWriterTemplate: Omit<TypewriterProps, 'words'> = {
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: delaySpeed,
        onDelay: () => setDelaySpeed(800)
    }

    const [textTypeWriter] = useTypewriter({
        words: textTab as string[],
        ...typeWriterTemplate
    });

    const [reducedTextTypeWriter] = useTypewriter({
        words: reducedTextTab as string[],
        ...typeWriterTemplate
    });

    return (
        <div className={cn("container w-full h-full flex items-center justify-center")}>
            <div id='presentationContainer' className={cn("flex flex-col gap-10 items-center md:items-start")}>
                <h3 className={cn(
                    "font-apple to-animate appear -translate-x-10 anim-delay-0 text-blanchedalmond dark:text-[rgb(255,230,249)] global-text-shadow text-7xl ml-4",
                )}>Welcome to</h3>
                <h1 className={cn(
                    "font-adobebold to-animate appear translate-y-10 anim-delay-400 [line-height:0.8] text-[12vw] text-nowrap font-medium text-[rgb(251,246,233)] dark:text-title-dark global-text-shadow",
                )}>{ language.title }</h1>
                <div id='main-bar' className={cn(
                    "w-[70%] opacity-0 h-3 rounded-[10px] transition-opacity duration-600 bg-blanchedalmond dark:bg-[#f1e8ef] animate-bar",
                )}></div>
                <div id='subtitle' className={cn(
                    "flex flex-row items-center to-animate appear -translate-y-10 anim-delay-2100 justify-start gap-[1vw]"
                )}>
                    <TextTypeWriter id='normal' className='hidden sm:block'>{ textTypeWriter }</TextTypeWriter>{/*  Texte dynamique  */}
                    <TextTypeWriter id='reduced' className='block sm:hidden'>{ reducedTextTypeWriter }</TextTypeWriter>{/*  Texte dynamique  */}
                    <BlinkingVerticalBar />
                </div>
                <GetStarted id={"two"} className='two block md:hidden to-animate appear -translate-y-3 anim-delay-2300' />
            </div>
        </div>
    )
}

export default MainContainer;
