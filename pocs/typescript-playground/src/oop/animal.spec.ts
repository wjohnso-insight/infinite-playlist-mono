import { Animal } from './animal'

let animal: Animal

const getAnimal = () : Animal => {
    return new Animal("Vulpes vulpes")
}

beforeEach(() => {
    animal = getAnimal()
})

afterEach(() => {
    jest.restoreAllMocks()
})

describe('Animal', () => {
    describe('taxRank', () => {
        test('should be defined', () => {
            expect(animal.taxRank).toBeDefined()
        })
    })

    describe('report', () => {
        test('should be defined', () => {
            expect(animal.report).toBeDefined()
        })

        test('should print taxRank to std out', () => {
            const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
            animal.report()
            expect(logSpy).toHaveBeenCalledWith("Vulpes vulpes")
        })
    })
})