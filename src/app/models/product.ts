import { ProductCategory } from './enums/category-enum';
export class Product {
    id: number;
    name: string;
    description : string;
    price : number;
    category : number;
    imageUrl : string;
    categoryName : string;

    constructor(id:number, name:string, description:string, price:number = 0, imageUrl:string, category:number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.categoryName = ProductCategory[category];
    }
}
