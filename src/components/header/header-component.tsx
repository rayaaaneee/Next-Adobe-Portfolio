"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import languageContext, { LanguageContextType } from '@/utils/context/language-context';

import useConditionalEffect from '@/utils/hook/use-conditionnal-effect';
import useTryingContext from '@/utils/hook/use-try-context';

import Logo, { LogoColors } from '../logo';
import HamburgerMenu from './hamburger-menu';
import MenuLink from './menu-link';
import SelectLanguageButton from './select-language-button';
import SwitchThemeButton from './switch-theme-button';

const HeaderComponent = ({ hasFooter = true }) => {

    const { language } = useTryingContext<LanguageContextType>(languageContext);

    const location = usePathname();

    const hamburgerMenu = useRef<HTMLDivElement>(null);
    const mediaMenu = useRef<HTMLUListElement>(null);

    const links = [
        {to: '/', text: language.menu.index, isColored: false },
        {to: '/blog', text: language.menu.blog, isColored: false },
        {to: '/about', text: language.menu.about, isColored: true }
    ]

    // Close menu when changing page
    useConditionalEffect(() => {
        if (hamburgerMenu.current) {
            hamburgerMenu.current.querySelector<HTMLInputElement>("input[type='checkbox']")?.click();
        }
    }, [location]);

    // Handle menu logic
    useEffect(() => {

        const checkbox = hamburgerMenu.current && hamburgerMenu.current.querySelector("input[type='checkbox']");

        const onClosing = () => {
            document.body.classList.remove("full-menu-active");
        }

        const onOpening = () => {
            document.body.classList.add("full-menu-active");
        }

        const onClickMenu = (e: MouseEvent) => {
            if (e.currentTarget && !(e.currentTarget as HTMLElement).classList.contains("active")) {
                (checkbox as HTMLInputElement)?.click();
            }
        }
        
        const clickOutsideMenu = (e: MouseEvent) => {
            if (mediaMenu.current?.classList.contains("active") && !(e.target as HTMLElement).closest('#menu-container')) {
                (checkbox as HTMLInputElement)?.click();
            }
        }

        const observer = new MutationObserver(() => {
            if (mediaMenu.current && mediaMenu.current.classList.contains("active")) {
                onOpening();
            } else onClosing();
        });

        observer.observe(mediaMenu.current as Node, { attributes: true, attributeFilter: ['class'] });

        mediaMenu.current && mediaMenu.current.addEventListener('click', onClickMenu);

        window.addEventListener('click', clickOutsideMenu);

        return () => {
            window.removeEventListener('click', clickOutsideMenu);
            mediaMenu.current && mediaMenu.current.removeEventListener('click', onClickMenu);
        };

    }, []);

    return (
        <nav id="menu-container">
            <ul className={"header-media-menu"} ref={ mediaMenu }>
                <SelectLanguageButton className={"onmenu"} />
                { hasFooter && ( 
                    <Link href={'/'}>
                        <Logo color={LogoColors.black} className="menu-logo" />
                    </Link>
                ) }
                { links.map((link) => (
                    <MenuLink key={link.to} to={link.to} isColored={link.isColored}>{ link.text }</MenuLink>
                )) }
                <SwitchThemeButton pinkMoon whiteIcons/>
                <div className='menu-footer'></div>
            </ul>
            { mediaMenu.current && <HamburgerMenu ref={hamburgerMenu} menuElement={mediaMenu.current}/> }
        </nav>
    );
}

export default HeaderComponent;