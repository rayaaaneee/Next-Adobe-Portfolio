"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import useConditionalEffect from '@/utils/hook/use-conditional-effect';
import useTryingContext from '@/utils/hook/use-try-context';

import languageContext, { LanguageContextType } from '@/utils/context/language-context';

import Logo, { LogoColors } from '../logo';
import HamburgerMenu from './hamburger-menu';
import MenuLink from './menu-link';
import SelectLanguage from './select-language';
import SwitchTheme from './switch-theme-button';

export interface HeaderProps {
    hasFooter?: boolean,
}


const Header = ({ hasFooter = true }: HeaderProps) => {

    const { language } = useTryingContext<LanguageContextType>(languageContext);

    const location = usePathname();

    const hamburgerMenu = useRef<HTMLDivElement>(null);
    const mediaMenu = useRef<HTMLUListElement>(null);

    const [isMenuReady, setIsMenuReady] = useState(false);

    const links = [
        {to: '/home', text: language.menu.home, isColored: false },
        {to: '/blog', text: language.menu.blog, isColored: false },
        {to: '/about', text: language.menu.about, isColored: true }
    ]

    // Close menu when changing page
    useConditionalEffect(() => {
        if (hamburgerMenu.current) {
            const checkbox: HTMLInputElement | null = hamburgerMenu.current.querySelector<HTMLInputElement>("input[type='checkbox']");
            if (checkbox && checkbox.checked) {
                checkbox.click();
            }
        }
    }, [location]);

    // Handle menu logic
    useLayoutEffect(() => {

        if (mediaMenu.current) setIsMenuReady(true);

        if (!isMenuReady || !hamburgerMenu.current) return;

        const checkbox = hamburgerMenu.current && hamburgerMenu.current.querySelector("input[type='checkbox']");

        const onClosing = () => {
            document.documentElement.classList.remove("menu-active");
        }

        const onOpening = () => {
            document.documentElement.classList.add("menu-active");
        }

        const onClickMenu = (e: MouseEvent) => {
            if (e.target && !(e.target as HTMLAnchorElement).classList.contains("active")) {
                if (!(checkbox as HTMLInputElement).checked) {
                    (checkbox as HTMLInputElement).click();
                }
            }
        }
        
        const clickOutsideMenu = (e: MouseEvent) => {
            if (mediaMenu.current?.classList.contains("active") && !(e.target as HTMLElement).closest('#menu-container')) {
                if ((checkbox as HTMLInputElement).checked) {
                    (checkbox as HTMLInputElement).click();
                }
            }
        }

        const observer = new MutationObserver(() => {
            if (mediaMenu.current && mediaMenu.current.classList.contains("active")) {
                onOpening();
            } else onClosing();
        });

        observer.observe(mediaMenu.current as Node, { attributes: true, attributeFilter: ['class'] });

        if (mediaMenu.current) mediaMenu.current.addEventListener('click', onClickMenu);

        window.addEventListener('click', clickOutsideMenu);

        const mediaMenuTmp = mediaMenu.current;

        return () => {
            window.removeEventListener('click', clickOutsideMenu);
            if (mediaMenuTmp) mediaMenuTmp.removeEventListener('click', onClickMenu);
        };

    }, [isMenuReady]);


    return (
        <header>
            <Link href="/" className={cn(
                'w-[70px] h-[70px] fixed top-4 left-4 z-[1]',
                { "hidden md:block": location !== '/' },
                { "to-animate appear -translate-t-3 anim-delay-1000" : location === '/' }
            )}>
                <Logo color={LogoColors.theme} className={cn(
                    "w-full h-full"
                )}/>
            </Link>
            <nav id="menu-container">
                <ul id='header-media-menu' className={cn(
                    "box-content bg-[rgb(255_255_255/50%)] [&.active]:bg-[rgb(255_255_255/30%)] transition-all ease-menu duration-600",
                    "flex flex-col justify-center items-center gap-[3vh] cursor-pointer fixed list-none m-0 top-0 right-0 w-[60px] h-[60px]",
                    "backdrop-blur-md p-[25px] rounded-[50%] translate-x-[17%] translate-y-[-20%] z-[2]",
                    "[&>*]:opacity-0 [&>*]:transition-opacity [&>*]:ease-menu [&>*]:duration-450 [&>*]:pointer-events-none",
                    "[&.active>*]:opacity-100 [&.active>*]:pointer-events-auto",
                    "[&.active]:p-0 [&.active]:cursor-auto [&.active]:w-screen [&.active]:h-full [&.active]:rounded-none [&.active]:translate-x-0 [&.active]:translate-y-0",
                    "md:[&.active]:w-[450px]",
                    "dark:bg-menu-dark dark:[&.active]:bg-menu-dark dark:[&_*]:text-white",
                )} ref={ mediaMenu }>
                    <SelectLanguage className={"absolute top-[25px] left-[25px]"} />
                    { hasFooter && ( 
                        <Link href={'/'} className='w-fit h-fit'>
                            <Logo
                                color={LogoColors.theme}
                                className="absolute left-[25px] bottom-[25px] w-[50px] h-[50px] bg-cover bg-center"
                            />
                        </Link>
                    ) }
                    <div className={cn(
                        "flex flex-col items-center justify-center gap-[3vh] w-fit",
                    )}>
                        { links.map((link) => (
                            <MenuLink key={link.to} to={link.to} isColored={link.isColored}>{ link.text }</MenuLink>
                        )) }
                    </div>
                    <SwitchTheme pinkMoon />
                    <div className='menu-footer'></div>
                </ul>
                <HamburgerMenu ref={hamburgerMenu} />
            </nav>
        </header>
    );
}

export default Header;