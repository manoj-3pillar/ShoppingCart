export class Filter {
    fromRange: number;
    toRange: number;
    categoryIDs : number[];

    constructor(fromRange:number, toRange:number, categoryIDs:number[])
    {
        this.fromRange = fromRange;
        this.toRange = toRange;
        this.categoryIDs = categoryIDs;
    }
}
