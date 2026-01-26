export {};

declare global {
    interface String {
        remove(sub: string | RegExp): string;
        removeAll(sub: string | RegExp): string;
        isEmpty(): boolean;
        uppercaseFirstLetter(): string;
    }
}

String.prototype.remove = function (this: string, sub: string | RegExp) {
    return this.replace(sub, '');
};

String.prototype.removeAll = function (this: string, sub: string | RegExp) {
    return this.replaceAll(sub, '');
}

String.prototype.uppercaseFirstLetter = function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.isEmpty = function (this: string) {
    return this.trim().length === 0;
}