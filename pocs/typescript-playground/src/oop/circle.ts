import { Shape } from './shape'

export class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }
    
    area(): number {
        return Math.PI * this.radius * this.radius
    }

    public report(): void {
        console.log(`Radius: ${this.radius}, Diameter: ${this.radius * 2}, Area: ${this.area()}`)
    }
}