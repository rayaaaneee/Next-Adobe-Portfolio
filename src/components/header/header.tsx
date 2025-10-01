"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

import languageContext, { LanguageContextType } from '@/utils/context/language-context';

import useConditionalEffect from '@/utils/hook/use-conditionnal-effect';
import useTryingContext from '@/utils/hook/use-try-context';

import Logo, { LogoColors } from '../logo';
import HamburgerMenu from './hamburger-menu';
import MenuLink from './menu-link';
import SelectLanguage from './select-language';
import SwitchTheme from './switch-theme-button';

import { cn } from '@/lib/utils';

const Header = ({ hasFooter = true }) => {

    const { language } = useTryingContext<LanguageContextType>(languageContext);

    const location = usePathname();

    const hamburgerMenu = useRef<HTMLDivElement>(null);
    const mediaMenu = useRef<HTMLUListElement>(null);

    const [isMenuReady, setIsMenuReady] = useState(false);

    const links = [
        {to: '/', text: language.menu.home, isColored: false },
        {to: '/blog', text: language.menu.blog, isColored: false },
        {to: '/about', text: language.menu.about, isColored: true }
    ]

    // Close menu when changing page
    useConditionalEffect(() => {
        if (hamburgerMenu.current) {
            hamburgerMenu.current.querySelector<HTMLInputElement>("input[type='checkbox']")?.click();
        } else {
            throw new Error("Hamburger menu ref is not assigned");
        }
    }, [location]);

    // Handle menu logic
    useLayoutEffect(() => {

        if (mediaMenu.current) setIsMenuReady(true);

        if (!isMenuReady || !hamburgerMenu.current) return;

        const checkbox = hamburgerMenu.current && hamburgerMenu.current.querySelector("input[type='checkbox']");

        const onClosing = () => {
            document.body.classList.remove("menu-active");
        }

        const onOpening = () => {
            document.body.classList.add("menu-active");
        }

        const onClickMenu = (e: MouseEvent) => {
            if (e.target && !(e.target as HTMLAnchorElement).classList.contains("active")) {
                if (!(checkbox as HTMLInputElement).checked) {
                    (checkbox as HTMLInputElement).click();
                }
            }
        }
        
        const clickOutsideMenu = (e: MouseEvent) => {
            console.log(mediaMenu.current, mediaMenu.current?.classList.contains("active"), !!(e.target as HTMLElement).closest('#menu-container'));
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

        return () => {
            window.removeEventListener('click', clickOutsideMenu);
            if (mediaMenu.current) mediaMenu.current.removeEventListener('click', onClickMenu);
        };

    }, [isMenuReady]);


    return (
        <nav id="menu-container">
            <ul className={cn(
                "header-media-menu box-content bg-menu transition-all transition-menu duration-menu",
                "flex flex-col justify-center items-center gap-[3vh] cursor-pointer fixed list-none m-0 top-0 right-0 w-[60px] h-[60px]",
                "backdrop-blur-md p-[25px] rounded-[50%] translate-x-[17%] translate-y-[-20%] z-[2]",
                "[&>*]:opacity-0 [&>*]:transition-opacity [&>*]:transition-menu [&>*]:duration-[300ms]",
                "[&_*]:pointer-events-none",
                "[&.active>*]:opacity-100 [&.active_*]:pointer-events-auto [&.active]:box-border [&.active]:cursor-auto [&.active]:w-[500px] [&.active]:h-full [&.active]:rounded-none [&.active]:translate-x-0 [&.active]:translate-y-0",
            )} ref={ mediaMenu }>
                <SelectLanguage className={"absolute top-[25px] left-[25px]"} />
                { hasFooter && ( 
                    <Link href={'/'}>
                        <Logo
                            color={LogoColors.black}
                            className="absolute max-w-[60px] left-[25px] bottom-[25px] w-[50px] h-[50px] bg-cover bg-center"
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
                <SwitchTheme pinkMoon whiteIcons/>
                <div className='menu-footer'></div>
            </ul>
            { isMenuReady && <HamburgerMenu ref={hamburgerMenu} menuElement={mediaMenu.current as HTMLUListElement}/>}
        </nav>
    );
}

export default Header;