import { IPerson } from './person'
import { Person } from './person'

let sut: IPerson

const getSut = () : IPerson => {
    return new Person("John Smith")
}

beforeEach(() => {
    sut = getSut()
})

describe('person', () => {
    describe('full name', () => {
        test('should be defined', () => {
            expect(sut.fullName).toBeDefined()
        })
    })

    describe('greet', () => {
        test('should be defined', () => {
            expect(sut.greet).toBeDefined()
        })

        test('should print greeting with name in console', () => {
            const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
            sut.greet()
            expect(logSpy).toHaveBeenCalledWith("Hello, my name is John Smith")
            logSpy.mockRestore()
        })
    })
})