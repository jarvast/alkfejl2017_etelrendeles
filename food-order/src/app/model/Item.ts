import { Category } from "../model/Category";

export class Item{
    id: number;
    name: String;
    category: Category;
    description: String;
    price: number;
    isSpicy: boolean;
    isVegetarian: boolean;

    constructor(name?: String, id?: number, category?: Category,description?: String, price?: number, isSpicy?: boolean, isVegetarian?: boolean){
        this.name=name;
        this.id=id;
        this.category=category;
        this.description=description;
        this.price=price;
        this.isSpicy=isSpicy;
        this.isVegetarian=isVegetarian;
    }
}