import { Component, OnInit } from '@angular/core';
import { Cart } from "../../model/Cart";
import { Item } from "../../model/Item";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import { CartService } from "../../services/cart.service";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  displayedColumns: String[] = ['name', 'description','price'];
  cartItems: MatTableDataSource<Item>;
  total : number;
  emptyCart : boolean;

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.reload();
  }
  private reload(){
    this.cartService.getCart().subscribe(items => {
      this.cartItems = new MatTableDataSource(items);
    });
    this.cartService.getTotal().subscribe(sum => {
      this.total=sum; 
      if (this.total===0) {
        this.emptyCart=false;
      } else {
        this.emptyCart=true;
      }
    });
  }

  deleteCart() {
    this.cartService.deleteCart();
    this.reload();
  }
}