"use client";

import cn from "@/util/function/cn";

import useLanguage from "@/util/hook/use-language";

import GetStarted from './get-started';
import TextTypeWriter from './text-type-writer';
import BlinkingVerticalBar from './blinking-vertical-bar';

const MainContainer = () => {

    const { t } = useLanguage();

    return (
        <div className={cn("container w-full h-full flex flex-col items-center justify-center")}>
            <div id='presentationContainer' className={cn(
                "flex flex-col gap-6 md:gap-10 items-center justify-center w-full"
                )}>
                <h1 className={cn(
                    "font-adobebold to-animate appear translate-y-10 anim-delay-300 text-black dark:text-white text-center text-[23vw] sm:text-[12vw] leading-[13.5vw] sm:leading-[0.8] text-wrap sm:text-nowrap font-medium",
                )}>{ t('title') }</h1>
                <div id='main-bar' className={cn(
                    "w-[40%] opacity-0 h-3 rounded-[10px] transition-opacity duration-600 bg-black dark:bg-white animate-bar",
                )}></div>
                <div id='subtitle' className={cn(
                    "flex flex-row items-center justify-center to-animate appear -translate-y-10 anim-delay-1500 gap-[1vw]",
                )}>
                    <TextTypeWriter id='normal' className='hidden md:block' />{/*  Texte dynamique  */}
                    <TextTypeWriter id='reduced' reduced className='block md:hidden' />{/*  Texte dynamique  */}
                    <BlinkingVerticalBar />
                </div>
            </div>
            <GetStarted id={"two"} colored className={cn(
                'mt-4',
                'two block self-center md:hidden to-animate appear -translate-y-3 anim-delay-1700',
            )} />
        </div>
    )
}

export default MainContainer;
