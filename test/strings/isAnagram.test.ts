import strings from '../../src/strings'
describe('strings.isAnagram', () => {

    test('"anagram", "nagaram"', () => {
        let result: boolean = strings.isAnagram('anagram', 'nagaram')
        expect(result).toBe(true)
    })

    test('"rat", "car"', () => {
        let result: boolean = strings.isAnagram('rat', 'car')
        expect(result).toBe(false)
    })

    test('"", ""', () => {
        let result: boolean = strings.isAnagram('', '')
        expect(result).toBe(true)
    })

    test('"aaz", "zza"', () => {
        let result: boolean = strings.isAnagram('aaz', 'zza')
        expect(result).toBe(false)
    })

    test('"texttwisttime", "timetwisttext"', () => {
        let result: boolean = strings.isAnagram('texttwisttime', 'timetwisttext')
        expect(result).toBe(true)
    })

})