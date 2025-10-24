declare global {
    interface String {
        remove(sub: string): string;
    }
}

String.prototype.remove = function (this: string, sub: string) {
    return this.replace(sub, '');
};

export {};