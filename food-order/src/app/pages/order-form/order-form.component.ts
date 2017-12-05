import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
  import { Order } from "../../model/Order";
  import { Item } from "../../model/Item";
  import {DataSource} from "@angular/cdk/collections";
  import {FormControl, FormGroup, Validators} from "@angular/forms";
  import {Observable} from "rxjs/Observable";
  import { CartService } from "../../services/cart.service";
  import { OrderService } from "../../services/order.service";
  import {Router} from "@angular/router";
  import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{

  orderForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
  });

  displayedColumns: String[] = ['name', 'price'];
  cartItems: MatTableDataSource<Item>;
  total : number;
  items: Item[];
  order : Order;

  constructor(private cartService: CartService, private orderService:OrderService, private router: Router) {
  }
  ngOnInit(){
    this.cartService.getCart().subscribe(items => {
      this.cartItems = new MatTableDataSource(items);
      this.items = items;
    });

    this.cartService.getTotal().subscribe(sum => {
      this.total=sum; 
    });
  }

  get name() {
    return this.orderForm.get('name')
  }
  get address() {
    return this.orderForm.get('address')
  }
  get phone() {
    return this.orderForm.get('phone')
  }

  submit() {
    this.order = new Order(this.items, this.name.value, this.address.value, this.phone.value);
    this.orderService.create(this.order, this.items)
      .subscribe(
        res => {
          this.router.navigate(['/categories']);
          this.cartService.deleteCart();
        },
        err => console.log(err)
      );
  }
}