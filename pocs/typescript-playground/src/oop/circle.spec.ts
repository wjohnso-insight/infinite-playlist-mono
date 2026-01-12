import { Circle } from './circle'

let sut : Circle

const getSut = () : Circle => {
    return new Circle(5)
}

beforeEach(() => {
    sut = getSut()
})

afterEach(() => {
    jest.restoreAllMocks()
})

describe('Circle', () => {
    describe('radius', () => {
        test('should be defined', () => {
            expect(sut.radius).toBeDefined()
        })

        test('should equal 5', () => {
            expect(sut.radius).toEqual(5)
        })
    })

    describe('area', () => {
        test('should be defined', () => {
            expect(sut.area).toBeDefined()
        })

        test('should return area of circle', () => {
            expect(sut.area()).toEqual(Math.PI * sut.radius * sut.radius)
        })
    })

    describe('report', () => {
        test('should be defined', () => {
            expect(sut.report).toBeDefined()
        })

        test('should print radius, diameter, & area to std out', () => {
            const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
            sut.report()
            expect(logSpy).toHaveBeenCalledWith("Radius: 5, Diameter: 10, Area: 78.53981633974483")
        })
    })
})