import { updateTarget } from './strings'

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
})