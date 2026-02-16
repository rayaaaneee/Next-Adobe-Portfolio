const a = "aabcddeeeefghhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";

const compressString = (str: string): string => {
    let newChain = "";

    let seekingChar: string | undefined;
    let charCount: number = 0;
    for (let i = 0; i <= str.length; i++) {
        if (!seekingChar) {
            seekingChar = str[i];
        }
        if (str[i] === seekingChar) {
            charCount++;
        } else {
            newChain += (charCount.toString() + seekingChar);
            charCount = 0;
            seekingChar = undefined;
            i--;
        }
    }

    return newChain;
}

console.log(compressString(a));