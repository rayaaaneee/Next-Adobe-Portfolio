// i18n-server-manager.ts
import { cookies } from 'next/headers';

import I18nClientManager from '@/util/manager/i18n-client-manager';

import Language from '@/util/type/language';

// Server-side I18n Manager for handling internationalization in server components
export class I18nServerManager {

    private managerInstance: I18nClientManager = I18nClientManager.instance;

    public static instance: I18nServerManager = new I18nServerManager();

    private constructor() {}

    public resolveCookie = async (data: Parameters<I18nClientManager["getValue"]>[0]): Promise<string> => {
        const clientCookies = await cookies(); 

        let lang: Language = this.managerInstance.defaultLanguage;

        const cookieVal = clientCookies.get(I18nClientManager.cookieName)?.value;
        if (cookieVal && I18nClientManager.instance.isSupported(cookieVal)) {
            lang = cookieVal satisfies Language;
        }

        return I18nClientManager.instance.getValue(data, lang);
    }
}