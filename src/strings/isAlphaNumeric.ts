const isAlphaNumeric = (str: string) => {
    let code;
    for (let i = 0, length = str.length; i < length; i++) {
        code = str.charCodeAt(i);
        if (
            !(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)
        ) return false

    }
    return true;
}

export default isAlphaNumeric