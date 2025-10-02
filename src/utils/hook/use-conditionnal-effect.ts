import { DependencyList, RefObject, useEffect, useRef } from "react";

// Executes an effect only on update, not on mount
const useConditionalEffect = (effect: () => void, deps: DependencyList) => {
	const isMounted: RefObject<boolean> = useRef(false);
	useEffect(() => {
		if (isMounted.current) {
			return effect();
		} else {
			isMounted.current = true;
		}
	}, deps);
}

export default useConditionalEffect;
