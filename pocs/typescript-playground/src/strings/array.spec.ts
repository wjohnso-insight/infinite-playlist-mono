import { unique } from './array'

describe('array', () => {
    describe('unique', () => {
        test('should be defined', () => {
            expect(unique).toBeDefined()
        })

        type Params = {input: any[], expected: any[]}

        test.each<Params>([
            {input: ["a","a","b","c"], expected: ["a","b","c"]},
            {input: [1,1,2,3], expected: [1,2,3]},
            {input: [], expected: []},
            {input: ["a","a","b","c"], expected: ["a","b","c"]},
            {input: ["foo","foo","bar"], expected: ["foo","bar"]},
            {input: [[1,2,3], [1,2,3]], expected: [[1,2,3]]},
            {input: [{foo: "bar"},{foo: "bar"}], expected: [{foo: "bar"}]}
        ])('unique(input, output)', ({input, expected}) => {
            expect(unique(input)).toEqual(expected)
        })
    })
})