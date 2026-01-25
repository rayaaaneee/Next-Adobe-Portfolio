import { type DependencyList, type RefObject, useEffect, useRef } from "react";

// Executes an effect only on update, not on mount
const useConditionalEffect = (effect: () => void, deps: DependencyList): void => {
	const isMounted: RefObject<boolean> = useRef(false);
	useEffect(() => {
		if (isMounted.current) {
			return effect();
		} else {
			isMounted.current = true;
		}
	}, [...deps]); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useConditionalEffect;
