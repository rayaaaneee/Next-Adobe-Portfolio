// type/object-keys.ts
// Utility to produce dot-path keys for an object T.
// - For tuples: produces concrete numeric keys ("0" | "1" | ...)
// - For generic arrays: no numeric keys are produced (only tuples yield numeric indices)
// - Does not include Array prototype keys like "push"/"length".

type TupleNumericKeys<T> = T extends readonly unknown[] ? Extract<keyof T, `${number}`> : never;

type ObjectKeys<T, P extends string = ""> =
  // If T is an array/tuple
  T extends readonly unknown[]
    ? (
        // Tuple case: concrete numeric keys like "0" | "1"; generic arrays produce no numeric keys
        TupleNumericKeys<T> extends never
          ? never
          : TupleNumericKeys<T> extends infer K
            ? K extends string
              ? P extends "" ? K : `${P}.${K}`
              : never
            : never
      )
    // If T is a plain object
    : T extends object
      ? {
          [K in keyof T]-?: K extends string
            ? T[K] extends readonly unknown[]
              ? ObjectKeys<T[K], P extends "" ? K : `${P}.${K}`>
              : T[K] extends object
                ? ObjectKeys<T[K], P extends "" ? K : `${P}.${K}`>
                : P extends "" ? K : `${P}.${K}`
            : never
        }[keyof T]
      : never;

export default ObjectKeys;