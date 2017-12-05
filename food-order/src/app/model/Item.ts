import { Category } from "../model/Category";

export class Item{
    name: String;
    category: Category;
    description: String;
    price: number;
    spicy: boolean;
    vegetarian: boolean;

    constructor(name?: String, category?: Category,description?: String, price?: number, spicy?: boolean, vegetarian?: boolean){
        this.name=name;
        this.category=category;
        this.description=description;
        this.price=price;
        this.spicy=spicy;
        this.vegetarian=vegetarian;
    }
}