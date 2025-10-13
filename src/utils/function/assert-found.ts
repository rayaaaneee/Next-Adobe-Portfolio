import { DeepReadonliable } from "@/utils/types/deep-readonly";

export const assertFound = <T>(array: DeepReadonliable<T[]>, predicate: (item: DeepReadonliable<T>) => boolean, name: string): DeepReadonliable<T> => {
    const value = array.find(predicate);
    if (!value) throw new Error(`Element "${name}" not found.`);
    return value;
};
