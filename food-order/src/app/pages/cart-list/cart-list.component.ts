import { Component, OnInit } from '@angular/core';
import { Cart } from "../../model/Cart";
import { Item } from "../../model/Item";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  displayedColumns: String[] = ['name', 'description','price'];
  cartItems: DataSource<any>;
  total : number;

  constructor(private cartService: CartService) {
    //this.cart.items = this.cartItems;
    //this.reload();
  }
  ngOnInit() {
    this.reload();
  }
  private reload(){
    this.cartItems = new CartDataSource(this.cartService);
    //this.cartService.getCart().subscribe(items => this.cartItems=items)
    this.cartService.getTotal().subscribe(res => {
      this.total=res; 
    });
  }

  deleteCart() {
    console.log("dssdaasd");
    this.cartService.deleteCart();
    console.log("reload előtt")
    this.reload();
    console.log("reload után")
  }


}
export class CartDataSource extends DataSource<any> {
  constructor(private categoryService: CartService) {
    super();
  }

  connect(): Observable<Item[]> {
    return this.categoryService.getCart();
  }

  disconnect() {
  }
}