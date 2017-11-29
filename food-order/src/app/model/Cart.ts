import {Item} from "./Item";

export class Cart{
    items: Item[];
    total: number;

    constructor(items?: Item[], total?: number){
        this.items=items;
        this.total=total;
    }
}