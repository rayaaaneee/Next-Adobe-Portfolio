import Cookie from 'js-cookie';

import Stringable from '../types/stringable';

export default class ManageCookies {

    static setCookie = (name: Stringable, value: Stringable) => {
        Cookie.set(name.toString(), value.toString(), {
            expires: 31,
            secure: true,
            sameSite: 'strict',
            path: '/'
        });
    }

    static getCookie = (name: Stringable) => {
        return Cookie.get(name.toString());
    }

    static isCookie = (name: Stringable) => {
        return this.getCookie(name) !== undefined;
    }

    static removeCookie = (name: Stringable) => {
        return Cookie.remove(name.toString());
    }

}