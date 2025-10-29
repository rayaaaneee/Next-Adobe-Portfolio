import { DeepReadonlyable } from "@/utils/types/deep-readonly";

export const assertFound = <T>(array: DeepReadonlyable<T[]>, predicate: (item: DeepReadonlyable<T>) => boolean, name: string): DeepReadonlyable<T> => {
    const value = array.find(predicate);
    if (!value) throw new Error(`Element "${name}" not found.`);
    return value;
};
