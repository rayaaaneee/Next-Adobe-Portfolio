import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from "react";

import languageContext from "@/utils/context/language-context";
import useTryingContext from "@/utils/hook/use-try-context";
import ManageLanguages, { Language } from "@/utils/manager/manage-language";

import englishFlag from '@/asset/img/index/flags/english.png';
import frenchFlag from '@/asset/img/index/flags/french.png';
import spanishFlag from '@/asset/img/index/flags/spanish.png';

export interface SelectLanguageButtonProps {
    className?: string | null
}

const SelectLanguageButton = ({ className = null }: SelectLanguageButtonProps) => {

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

    console.log(`@/asset/img/index/flags/${language.flag_img}`);

    return (
        <div className={`select-language ${className}`}>
            <div className='choice' onClick={ (_) => { selectLanguageOptions.current!.classList.toggle("active")} }>
                <Image
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
                <div className="options-wrapper">
                    <div className='options' ref={ selectLanguageOptions }>
                    { ManageLanguages.supportedLanguages
                        .filter(([name]) => name !== language.current)
                        .map(
                            ([name, json]) => {
                                return name !== language.current && 
                                (<div className='option' onClick={ (_) => {
                                    ManageLanguages.setLanguage(name);
                                    setLanguage(json);
                                } }>
                                    <Image
                                        alt={`${name}-flag`}
                                        src={ languageFlags[name as Language].flag }
                                        width={24}
                                        height={24}
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

export default SelectLanguageButton;