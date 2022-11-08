import strings from ".";

const charCount = (str: string) => {
    let result: any = {};
    for (const char of str) {
        const lowerChar = char.toLocaleLowerCase();
        if (strings.isAlphaNumeric(lowerChar))
            result[lowerChar] = ++result[lowerChar] || 1;
    }
    return result;
}

export default charCount;