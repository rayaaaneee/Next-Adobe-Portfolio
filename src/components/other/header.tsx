"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';
import useConditionalEffect from '@/util/hook/use-conditional-effect';
import useLanguage from '@/util/hook/use-language';

import cn from "@/util/function/cn";

import Logo, { LogoColors } from '../logo';
import HamburgerMenu from './header/hamburger-menu';
import MenuLink from './header/menu-link';
import SelectLanguage from './header/select-language';
import SwitchTheme from './header/switch-theme-button';
import Language, { getStringWithLanguage, WithLanguageable } from '@/util/type/language';

export interface HeaderProps {
    hasFooter?: boolean,
}

const Header = ({ hasFooter = true }: HeaderProps) => {

    const { language } = useLanguage();

    const location = usePathname();

    const hamburgerMenu = useRef<HTMLDivElement>(null);
    const mediaMenu = useRef<HTMLUListElement>(null);

    const [isMenuReady, setIsMenuReady] = useState(false);

    type linkType = {
        to: string,
        text: WithLanguageable<string>,
        isColored: boolean,
        isBottom: boolean,
    }
    const links: linkType[] = [
        {to: '/home', text: "Portfolio", isColored: false, isBottom: false },
        {to: '/blog', text: "Blog", isColored: false, isBottom: false },
        //{to: '/resume', text: { [Language.EN]: "Resume", [Language.FR]: "CV", [Language.ES]: "Currículum"}, isColored: false },
    ]

    const aboutLink: linkType = { to: '/about', text: { [Language.EN]: "About", [Language.FR]: "À propos", [Language.ES]: "Acerca de"}, isColored: true, isBottom: true };

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

        const onEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (mediaMenu.current?.classList.contains("active")) {
                    if ((checkbox as HTMLInputElement).checked) {
                        (checkbox as HTMLInputElement).click();
                    }
                }
            }
        }

        window.addEventListener('click', clickOutsideMenu);
        window.addEventListener('keydown', onEscapeKey);

        const mediaMenuTmp = mediaMenu.current;

        return () => {
            window.removeEventListener('click', clickOutsideMenu);
            window.removeEventListener('keydown', onEscapeKey);
            if (mediaMenuTmp) mediaMenuTmp.removeEventListener('click', onClickMenu);
            observer.disconnect();
        };

    }, [isMenuReady]);

    return (
        <header>
            <Link href="/" className={cn(
                'w-[70px] h-[70px] fixed top-4 left-4 z-[1]',
                { "hidden md:block": location !== '/' },
                { "to-animate appear -translate-t-3 anim-delay-900" : location === '/' }
            )}>
                <Logo color={LogoColors.theme} className={cn(
                    "w-full h-full"
                )}/>
            </Link>
            <nav id="menu-container">
                <ul id='header-media-menu' className={cn(
                    "box-content bg-[#efdde3]/70 [&.active]:bg-[rgb(255_255_255/30%)] transition-all ease-menu duration-600",
                    "flex flex-col justify-center items-center gap-[3vh] cursor-pointer fixed list-none m-0 top-0 right-0 w-[60px] h-[60px]",
                    "[&.active]:backdrop-blur-md p-[25px] rounded-[50%] translate-x-[17%] translate-y-[-20%] z-[2]",
                    "[&>*]:opacity-0 [&>*]:transition-opacity [&>*]:ease-menu [&>*]:duration-450 [&>*]:pointer-events-none",
                    "[&.active>*]:opacity-100 [&.active>*]:pointer-events-auto",
                    "[&.active]:p-0 [&.active]:cursor-auto [&.active]:w-screen [&.active]:h-full [&.active]:rounded-none [&.active]:translate-x-0 [&.active]:translate-y-0",
                    "md:[&.active]:w-[450px]",
                    "dark:bg-menu-dark dark:[&.active]:bg-menu-dark dark:[&_*]:text-white",
                )} ref={ mediaMenu }>
                    <SelectLanguage className={"absolute top-[20px] left-[25px]"} />
                    { hasFooter && ( 
                        <Link href={'/'} className='w-fit h-fit'>
                            <Logo
                                color={LogoColors.theme}
                                className="absolute left-[25px] bottom-[20px] w-[50px] h-[50px] bg-cover bg-center"
                            />
                        </Link>
                    ) }
                    <div className={cn(
                        "flex flex-col items-center justify-center gap-[3vh] w-fit",
                    )}>
                        { links.map((link) => (
                            <MenuLink key={link.to} to={link.to} isColored={link.isColored}>{ getStringWithLanguage<string>(link.text, language.current) }</MenuLink>
                        )) }
                    </div>
                    <SwitchTheme pinkMoon />
                    <MenuLink className='absolute bottom-3 right-3' to={aboutLink.to} isColored={aboutLink.isColored}>{ getStringWithLanguage<string>(aboutLink.text, language.current) }</MenuLink>
                </ul>
                <HamburgerMenu ref={hamburgerMenu} />
            </nav>
        </header>
    );
}

export default Header;