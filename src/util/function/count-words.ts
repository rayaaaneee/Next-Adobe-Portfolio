const countWords = (element: HTMLElement): number => {
    const text = element.innerText || element.textContent || "";
    return countWordsInString(text);
};

export const countWordsInString = (text: string): number => {
    const words = text.split(/\s+/).filter(Boolean);
    return words.length;
}

export default countWords;
