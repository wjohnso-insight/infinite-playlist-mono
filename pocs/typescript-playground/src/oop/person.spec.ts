import { Person } from './person'

describe('person', () => {
    describe('full name', () => {
        test('should be defined', () => {
            const person = new Person("Jessica Smith")
            expect(person.fullName).toBeDefined()
        })
    })

    describe('greet', () => {
        test('should be defined', () => {
            const person = new Person("John Smith")
            expect(person.greet).toBeDefined()
        })

        test('should print greeting with name in console', () => {
            const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
            const person = new Person("John Smith")
            person.greet()
            expect(logSpy).toHaveBeenCalledWith("Hello, my name is John Smith")
            logSpy.mockRestore()
        })
    })
})