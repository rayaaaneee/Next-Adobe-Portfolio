// Build a tuple of length N with element type T
type BuildTuple<T, N extends number, R extends readonly T[] = []> =
	R['length'] extends N ? R : BuildTuple<T, N, readonly [T, ...R]>;

type ArrayType<T, Size extends number> = BuildTuple<T, Size>;

export default ArrayType;