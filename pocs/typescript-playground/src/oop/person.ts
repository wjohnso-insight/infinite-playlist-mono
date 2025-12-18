interface IPerson {
    fullName: string;
    greet(): void;
}

export class Person implements IPerson {
    public readonly fullName: string;
    
    constructor(fullName: string) {
        this.fullName = fullName;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.fullName}`)
    }
}

