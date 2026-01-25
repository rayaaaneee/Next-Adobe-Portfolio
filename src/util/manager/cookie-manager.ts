// cookie-manager.ts
import Cookie from 'js-cookie';

import Stringable from '../type/stringable';

export default class CookieManager {

    private static instance: CookieManager;

    private constructor () {}

    public static getInstance(): CookieManager {
        if (!CookieManager.instance) {
            CookieManager.instance = new CookieManager();
        }
        return CookieManager.instance;
    }

    public setCookie = (name: Stringable, value: Stringable): string | undefined => 
        (Cookie.set(name.toString(), value.toString(), {
            expires: 31,
            secure: true,
            sameSite: 'strict',
            path: '/'
        }));

    public getCookie = (name: Stringable): string | undefined =>
        (Cookie.get(name.toString()));

    public isCookie = (name: Stringable): boolean => 
        (this.getCookie(name) !== undefined);

    public removeCookie = (name: Stringable): void => 
        (Cookie.remove(name.toString()));

}