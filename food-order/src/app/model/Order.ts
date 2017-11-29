import { User } from "../model/User";
import { Item } from "../model/Item";

export class OrderStatus {
    static IDLE: String = "IDLE";
    static DELIVERED: String = "DELIVERED";
  }

export class Order{
    items: Item[];
    name: String;
    address: String;
    phone: String;

    constructor(items?: Item[], name?: String,address?: String, phone?: String){
        this.items=items;
        this.name=name;
        this.address=address;
        this.phone=phone;
    }
}