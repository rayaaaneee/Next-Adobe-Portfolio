import { Undefined } from "@/util/type/nullable";

const assertDefined = <T>(value: Undefined<T>, name?: string): T => {
    if (value === undefined) {
        throw new Error(name ? `${name} is undefined` : 'Value is undefined');
    }
    return value;
};

export default assertDefined;