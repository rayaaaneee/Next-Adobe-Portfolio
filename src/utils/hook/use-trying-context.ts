
import { Context, useContext } from "react";

function useTryingContext<T>(context: Context<T | null>): T {
    const value = useContext(context);
    if (value === null) {
      	throw new Error("Given context is null. Make sure the provider is set.");
    }
    return value;
}


export default useTryingContext;