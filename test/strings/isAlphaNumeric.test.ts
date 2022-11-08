import strings from "../../src/strings";

describe('strings.isAlphaNumeric', () => {
    test('a', () => {
        let result = strings.isAlphaNumeric('a');
        expect(result).toBe(true)
    })
    test('aa', () => {
        let result = strings.isAlphaNumeric('aa');
        expect(result).toBe(true)
    })

    test('a10', () => {
        let result = strings.isAlphaNumeric('a10');
        expect(result).toBe(true)
    })

    test('with spance', () => {
        let result = strings.isAlphaNumeric('with spance');
        expect(result).toBe(false)
    })

    test('Hello world!', () => {
        let result = strings.isAlphaNumeric('Hello world!');
        expect(result).toBe(false)
    })
})