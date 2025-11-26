import { unique } from './array'

describe('array', () => {
    describe('unique', () => {
        test('should be defined', () => {
            expect(unique).toBeDefined()
        })

        test('for input [1,1,2,3], function returns [1,2,3]', () => {
            const result = unique([1,1,2,3])
            expect(result).toEqual([1,2,3])
        })

        test('for empty array input, function returns empty array', () => {
            const result = unique([])
            expect(result).toEqual([])
        })

        test('for input ["a","a","b","c"], function returns ["a","b","c"]', () => {
            const result = unique(["a","a","b","c"])
            expect(result).toEqual(["a","b","c"])
        })

        test('for input ["foo", "foo", "bar"], function returns ["foo", "bar"]', () => {
            const result = unique(["foo", "foo", "bar"])
            expect(result).toEqual(["foo", "bar"])
        })

        test('for input [[1,2,3],[1,2,3]], function returns [[1,2,3]]', () => {
            const result = unique([[1,2,3],[1,2,3]])
            expect(result).toEqual([[1,2,3]])
        })

        test('for input [{foo: "bar"},{foo: "bar"}], function returns [{foo: "bar"}]', () => {
            const result = unique([{foo: "bar"},{foo: "bar"}])
            expect(result).toEqual([{foo: "bar"}])
        })
    })
})