import { useEffect, useRef } from "react";
import Image, { StaticImageData } from 'next/image';

import { cn } from "@/lib/utils";

import languageContext from "@/utils/context/language-context";

import useTryingContext from "@/utils/hook/use-try-context";

import ManageLanguages, { Language } from "@/utils/manager/manage-language";

import englishFlag from '@/asset/img/index/flags/english.png';
import frenchFlag from '@/asset/img/index/flags/french.png';
import spanishFlag from '@/asset/img/index/flags/spanish.png';

export interface SelectLanguageButtonProps {
    className?: string | null
}

const SelectLanguage = ({ className = null }: SelectLanguageButtonProps) => {

    const selectLanguageOptions = useRef<HTMLDivElement | null>(null);

    const { language, setLanguage } = useTryingContext(languageContext);

    type LanguageFlag = {
        flag: StaticImageData,
        denomination: string
    }

    const languageFlags: Record<Language, LanguageFlag> = {
        fr: {
            flag: frenchFlag,
            denomination: 'Français',
        },
        en: {
            flag: englishFlag,
            denomination: 'English',
        },
        es: {
            flag: spanishFlag,
            denomination: 'Español',
        }
    }

    useEffect(() => {

        const handleClick = (e: MouseEvent) => {
            if ((selectLanguageOptions.current) &&

                (selectLanguageOptions.current.classList.contains('active'))
                    && 
                (selectLanguageOptions.current.closest(".select-language") !== e.target)
                    &&
                (!(selectLanguageOptions.current.closest(".select-language")!.contains(e.target as Node))) 
            ) {
                selectLanguageOptions.current.classList.remove('active');
            }
        };

        window.addEventListener('click', handleClick);

        // Nettoyer l'effet
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={cn(
            'select-language',
            'relative w-fit h-fit z-[1] font-poppins',
            className
        )}>
            <div className={cn(
                    'choice',
                    'grid cursor-pointer grid-cols-select-language items-center justify-center gap-[10px] text-black no-underline',
                    'backdrop-blur-md rounded-[10px] h-[40px] w-[180px] px-[15px] py-[5px]'
                )} onClick={ (_) => { selectLanguageOptions.current!.classList.toggle("active")} }>
                <Image
                    className={cn('h-auto w-[90%] rounded-[5px]')}
                    alt='current-flag'
                    src={ languageFlags[language.current as Language].flag }
                    width={24}
                    height={24}
                />
                <p>{ languageFlags[language.current as Language].denomination }</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                    <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
                </svg>
                <div className={cn(
                    "options-wrapper", 
                    "absolute left-0 top-full h-fit cursor-auto !pointer-events-none w-full overflow-hidden"
                    )}>
                    <div className={cn(
                        'options',
                        "w-full h-fit flex flex-col items-center justify-center backdrop-blur-lg overflow-hidden rounded-[10px]",
                        "text-black z-[-1] cursor-auto !pointer-events-none opacity-0 -translate-y-full transition-all duration-150",
                        "ease-in bg-select-language-options",
                        "[&.active]:opacity-100 [&.active]:cursor-pointer ![&.active]:pointer-events-auto [&.active]:translate-y-0"
                    )} ref={ selectLanguageOptions }>
                    { ManageLanguages.supportedLanguages
                        .filter(([name]) => name !== language.current)
                        .map(
                            ([name, json], i) => {
                                return name !== language.current && 
                                (<div key={i} className={cn(
                                    'option',
                                    "hover:bg-select-language-options-hover",
                                    "w-full h-[50px] grid grid-cols-[1fr_2fr] pl-[30px] items-center content-center",
                                    "transition-all duration-300 cursor-pointer gap-[10px]",
                                )} onClick={ (_) => {
                                    ManageLanguages.setLanguage(name);
                                    setLanguage(json);
                                } }>
                                    <Image
                                        className="h-[35px] w-[85%] rounded-[5px] self-center justify-self-center"
                                        alt={`${name}-flag`}
                                        src={ languageFlags[name as Language].flag }
                                        width={200}
                                        height={500}
                                    />
                                    <p>{ languageFlags[name as Language].denomination }</p>
                                </div>)
                            }) 
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectLanguage;