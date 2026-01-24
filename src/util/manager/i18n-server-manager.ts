// i18n-server-manager.ts
import { cookies } from 'next/headers';

import I18nManager from '@/util/manager/i18n-manager';

import Language from '@/util/type/language';

// Server-side I18n Manager for handling internationalization in server components
export class I18nServerManager {

    private managerInstance: I18nManager = I18nManager.instance;

    public static instance: I18nServerManager = new I18nServerManager();

    private constructor() {}

    public resolveCookie = async (data: Parameters<I18nManager["getValue"]>[0]): Promise<string> => {
        const clientCookies = await cookies(); 

        let lang: Language = this.managerInstance.defaultLanguage;

        const cookieVal = clientCookies.get(I18nManager.cookieName)?.value;
        if (cookieVal && I18nManager.instance.isSupported(cookieVal)) {
            lang = cookieVal satisfies Language;
        }

        return I18nManager.instance.getValue(data, lang);
    }
}