declare global {
    interface String {
        remove(sub: string): string;
        uppercaseFirstLetter(): string;
    }
}

String.prototype.remove = function (this: string, sub: string) {
    return this.replace(sub, '');
};

String.prototype.uppercaseFirstLetter = function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

export {};