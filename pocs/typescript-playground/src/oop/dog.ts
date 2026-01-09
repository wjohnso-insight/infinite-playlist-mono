import { Animal } from './animal'

export class Dog extends Animal {
    public speak(): void {
        console.log("woof")
    }
}