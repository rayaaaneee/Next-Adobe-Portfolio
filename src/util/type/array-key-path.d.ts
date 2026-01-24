// type/object-keys-array.ts
type ArrayKeyPath<T, P extends string = ""> =
  ArrayLikeOrEnum<T> extends T
    ? P
    : T extends object
      ? {
          [K in keyof T & string]:
            ArrayLikeOrEnum<T[K]> extends T[K]
              ? P extends "" ? K : `${P}.${K}`
              : ArrayKeyPath<T[K], P extends "" ? K : `${P}.${K}`>
        }[keyof T & string]
      : never;

export type ArrayKeyPathValue<T, K extends ArrayKeyPath<T>> =
  K extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? ArrayKeyPathValue<T[Key], Extract<Rest, ArrayKeyPath<T[Key]>>>
      : never
    : K extends keyof T
      ? T[K]
      : never;


export default ArrayKeyPath;
