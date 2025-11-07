import { RefObject } from "react";
import Nullable, { Nullish } from "../type/nullable";

const verifyReference = <T>(ref: RefObject<T> | RefObject<Nullable<T>> | Nullish<T>, refName: string)
: ref is RefObject<T> => {

    if (!ref) throw new Error("No reference found for the given ref: " + refName);

    if (
        (typeof ref === "object") && 
        (ref !== null && "current" in ref) && 
        (!ref.current)
    ) throw new Error("No current reference found for the given ref: " + refName);

    return true;
}

export default verifyReference;