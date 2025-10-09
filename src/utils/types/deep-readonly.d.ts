type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type DeepRedonliable<T, R extends boolean = true> = R extends true ? DeepReadonly<T> : T;

export default DeepReadonly;