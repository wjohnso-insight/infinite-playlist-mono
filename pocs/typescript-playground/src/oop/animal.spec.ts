import { Animal } from './animal'
import { Dog } from './animal'

let animal: Animal
let dog: Dog

const getAnimal = () : Animal => {
    return new Animal("Vulpes vulpes")
}

const getDog = () : Dog => {
    return new Dog("Canis lupis familiaris")
}

beforeEach(() => {
    animal = getAnimal()
    dog = getDog()
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
            logSpy.mockRestore()
        })
    })

    describe('Dog', () => {
        describe('speak', () => {
            test('should be defined', () => {
                expect(dog.speak).toBeDefined()
            })

            test('should print woof to std out', () => {
                const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
                dog.speak()
                expect(logSpy).toHaveBeenCalledWith("woof")
                logSpy.mockRestore()
            })
        })
    })
})