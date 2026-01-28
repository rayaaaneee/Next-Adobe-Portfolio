const isArrayTyped = <T>(element: unknown): element is T[] => {
    return Array.isArray(element);
}

export default isArrayTyped;