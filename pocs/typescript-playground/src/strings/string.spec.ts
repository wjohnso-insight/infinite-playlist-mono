import { updateTarget } from './strings'
import { toTitleCase } from './strings'

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
})