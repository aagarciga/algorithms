import numbers from "../../src/numbers"

describe('numbers.summation', () => {

    test("1", () => {
        let result: any = numbers.summation(1)
        expect(result).toBe(1)
    })

    test("2", () => {
        let result: any = numbers.summation(2)
        expect(result).toBe(3)
    })

    test("-Infinity", () => {
        let result: any = numbers.summation(-Infinity)
        expect(result).toBe(-Infinity)
    })

    test("Infinity", () => {
        let result: any = numbers.summation(Infinity)
        expect(result).toBe(Infinity)
    })

    test("100", () => {
        let result: any = numbers.summation(100)
        expect(result).toBe(5050)
    })

    test("0.5", () => {
        let result: any = numbers.summation(0.5)
        expect(result).toBe(0.5)
    })

    test("NaN", () => {
        let result: any = numbers.summation(NaN)
        expect(result).toBe(NaN)
    })
})

