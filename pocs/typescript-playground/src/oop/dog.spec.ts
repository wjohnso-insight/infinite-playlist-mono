import { Dog } from './dog'

let dog: Dog

const getDog = () : Dog => {
    return new Dog("Canis lupis familiaris")
}

beforeEach(() => {
    dog = getDog()
})

afterEach(() => {
    jest.restoreAllMocks()
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
        })
    })
})