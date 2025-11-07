export {};

declare global {
    interface String {
        remove(sub: string | RegExp): string;
        uppercaseFirstLetter(): string;
    }
}

String.prototype.remove = function (this: string, sub: string | RegExp) {
    return this.replace(sub, '');
};

String.prototype.uppercaseFirstLetter = function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1);
};