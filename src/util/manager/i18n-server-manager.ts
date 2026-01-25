// i18n-server-manager.ts
import { cookies } from 'next/headers';

import I18nClientManager from '@/util/manager/i18n-client-manager';

import Language from '@/util/type/language';

// Server-side I18n Manager for handling internationalization in server components
export class I18nServerManager extends I18nClientManager {

    public static instance: I18nServerManager = new I18nServerManager();

    private constructor() {
        super();
    }

    public resolveCookie = async (data: Parameters<I18nClientManager["getValue"]>[0]): Promise<string> => {
        const clientCookies = await cookies(); 

        let lang: Language = this.defaultLanguage;

        const cookieVal = clientCookies.get(this.cookieName)?.value;
        if (cookieVal && this.isSupported(cookieVal)) {
            lang = cookieVal satisfies Language;
        }

        return this.getValue(data, lang);
    }
}