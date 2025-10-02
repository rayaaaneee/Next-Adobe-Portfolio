import { cn } from '@/lib/utils';

import ManageCookies from './manage-cookies';

// import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';
// import faviconLightTheme from '../asset/img/favicon/favicon-light-theme.png';

export const enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export default class ManageThemes {

    static readonly cookieName = 'theme';

    static isDarkTheme: boolean;

    static getSystemTheme = () => {

        let isDarkTheme = false;

        if (window) {
            isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        ManageThemes.isDarkTheme = isDarkTheme;

        ManageCookies.setCookie(ManageThemes.cookieName, ManageThemes.getThemeName());
    }

    static setTheme = () => {

        // const newFaviconLink = document.createElement('link');
        // newFaviconLink.rel = 'icon';

        // switch(ManageThemes.getThemeName()) {
        //   case 'dark' :
        //     newFaviconLink.href = faviconDarkTheme.src;
        //     break;
        //   case 'light' :
        //     newFaviconLink.href = faviconLightTheme.src;
        //     break;
        //   default :
        //     newFaviconLink.href = faviconLightTheme.src;
        //     break;
        // }

        // document.head.querySelector('link[rel="icon"]');
        // document.head.appendChild(newFaviconLink);

    }

    static setBodyTheme = () => {
        document.body.classList.remove(Theme.DARK);
        const className: string = cn(ManageThemes.isDarkTheme && Theme.DARK);
        if (className) document.body.classList.add(className);
    }

    static getThemeName = () => {
        return ManageThemes.isDarkTheme ? Theme.DARK : Theme.LIGHT;
    }

    static manageThemes = () => {
        if (ManageCookies.isCookie(ManageThemes.cookieName)) {
            switch (ManageCookies.getCookie(ManageThemes.cookieName) as string) {
                case Theme.DARK :
                    ManageThemes.isDarkTheme = true;
                    break;
                case Theme.LIGHT :
                default :
                    ManageThemes.isDarkTheme = false;
                    break;
            }
        } else {
            ManageThemes.getSystemTheme();
        }
        ManageThemes.updateTheme(true);
    }

    static toggleThemes = () => {
        ManageThemes.isDarkTheme = !ManageThemes.isDarkTheme;
        ManageThemes.updateTheme();
    }

    static set(theme: Theme) {
        switch(theme) {
            case Theme.LIGHT:
                ManageThemes.isDarkTheme = false;
                break;
            case Theme.DARK:
                ManageThemes.isDarkTheme = true;
                break;
        }
        ManageThemes.updateTheme();
    }

    static updateTheme(initialize: boolean = false) {
        ManageThemes.setTheme();
        if (!initialize) ManageThemes.setBodyTheme();
        ManageCookies.removeCookie(ManageThemes.cookieName);
        ManageCookies.setCookie(ManageThemes.cookieName, ManageThemes.getThemeName());
    }
}