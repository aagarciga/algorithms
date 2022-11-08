import strings from '../../src/strings'
describe('strings.chartCount', () => {

    test('aaaa', () => {
        let result: any = strings.charCount('aaaa')
        expect(result).toEqual({ a: 4 })
    })

    test("Hello hi", () => {
        let result: any = strings.charCount('Hello hi')
        expect(result).toEqual({ h: 2, e: 1, l: 2, o: 1, i: 1 })
    })
})