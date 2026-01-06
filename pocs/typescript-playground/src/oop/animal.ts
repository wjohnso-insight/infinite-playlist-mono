export class Animal{
    taxRank: string;

    constructor(taxRank: string) {
        this.taxRank = taxRank;
    }

    public report(): void {
        console.log(this.taxRank)
    }
}

export class Dog extends Animal {
    public speak(): void {
        console.log("woof")
    }
}