type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type DeepReadonlyable<T> = DeepReadonly<T> | T;

export default DeepReadonly;