"use client";

import { cn } from '@/lib/utils';

import useTryingContext from '@/utils/hook/use-try-context';

import languageContext from '@/utils/context/language-context';
import GetStarted from './get-started';
import TextTypeWriter from './text-type-writer';
import BlinkingVerticalBar from './blinking-vertical-bar';

const MainContainer = () => {

    const { language } = useTryingContext(languageContext);

    return (
        <div className={cn("container w-full h-full flex items-center justify-center")}>
            <div id='presentationContainer' className={cn("flex flex-col gap-4 md:gap-10 items-center md:items-start")}>
                <h3 className={cn(
                    "font-apple to-animate appear -translate-x-10 anim-delay-0 text-blanchedalmond text-center self-center sm:self-start dark:text-[rgb(255,230,249)] global-text-shadow text-[10vw] sm:text-[5.5vw] md:text-[4vw] ml-[1.5vw]",
                )}>Welcome to</h3>
                <h1 className={cn(
                    "font-adobebold to-animate appear translate-y-10 anim-delay-400 self-center sm:self-start text-center sm:text-start text-[23vw] sm:text-[12vw] leading-[13.5vw] sm:leading-[0.8] text-wrap sm:text-nowrap font-medium text-[rgb(251,246,233)] dark:text-title-dark global-text-shadow",
                )}>{ language.title }</h1>
                <div id='main-bar' className={cn(
                    "w-[70%] opacity-0 h-3 rounded-[10px] transition-opacity duration-600 bg-blanchedalmond dark:bg-[#f1e8ef] animate-bar",
                )}></div>
                <div id='subtitle' className={cn(
                    "flex flex-row items-center to-animate appear -translate-y-10 anim-delay-2100 justify-start gap-[1vw]"
                )}>
                    <TextTypeWriter id='normal' className='hidden sm:block' />{/*  Texte dynamique  */}
                    <TextTypeWriter id='reduced' reduced className='block sm:hidden' />{/*  Texte dynamique  */}
                    <BlinkingVerticalBar />
                </div>
                <GetStarted id={"two"} colored className='two block md:hidden to-animate appear -translate-y-3 anim-delay-2300' />
            </div>
        </div>
    )
}

export default MainContainer;
