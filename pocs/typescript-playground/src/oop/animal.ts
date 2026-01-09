export class Animal{
    taxRank: string;

    constructor(taxRank: string) {
        this.taxRank = taxRank;
    }

    public report(): void {
        console.log(this.taxRank)
    }
}