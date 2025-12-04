import { updateTarget } from './strings'
import { toTitleCase } from './strings'
import { isPalindrome } from './strings'

describe('strings', () => {
    describe('updateTarget', () => {
        test('should be defined', () => {
            expect(updateTarget).toBeDefined()
        })

        test('should match snapshot', () => {
            expect(updateTarget("Put update here: <UPDATE>", "<UPDATE>", 'Foo')).toMatchSnapshot()
        })

        test('should update target string', () => {
            const result = updateTarget("Put update here: <UPDATE>", "<UPDATE>", 'Foo')
            expect(result).toBe("Put update here: Foo")
        })
    })

    describe('toTitleCase', () => {
        test('should be defined', () => {
            expect(toTitleCase).toBeDefined()
        })

        test('should match snapshot', () => {
            expect(toTitleCase("hello world")).toMatchSnapshot()
        })

        test('should capitalize substrings', () => {
            const result = toTitleCase("hello world")
            expect(result).toBe("Hello World")
        })

        test('should return input if input is empty', () => {
            const result = toTitleCase("")
            expect(result).toBe("")
        })
    })

    describe('isPalindrome', () => {
        test('should be defined', () => {
            expect(isPalindrome).toBeDefined()
        })

        test('should match snapshot', () => {
            expect(isPalindrome("racecar")).toMatchSnapshot()
        })

        test('should return true for: tacocat', () => {
            const result = isPalindrome("tacocat")
            expect(result).toBe(true)
        })

        test('should return false for: Foo', () => {
            const result = isPalindrome("Foo")
            expect(result).toBe(false)
        })

        test(`should return true for: gO hang a SAlami I'm a lasagna HOG`, () => {
            const result = isPalindrome("gO hang a SAlami I'm a lasagna HOG")
            expect(result).toBe(true)
        })

        test('should reutrn true for empty string', () => {
            const result = isPalindrome("")
            expect(result).toBe(true)
        })

        test('should reutrn true for whitespace', () => {
            const result = isPalindrome("   ")
            expect(result).toBe(true)
        })
    })
})