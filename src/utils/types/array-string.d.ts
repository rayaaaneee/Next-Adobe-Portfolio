type ArrayType<T, Size extends number> = T[] & { length: Size };

export default ArrayType;