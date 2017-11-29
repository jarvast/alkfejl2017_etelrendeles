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

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent{

  orderForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  displayedColumns: String[] = ['name', 'price'];
  cartItems: DataSource<any> = new CartDataSource(this.cartService);
  total : number;
  items: Item[];
  order : Order;
  //@Input() order: Order;
  //model: Order = null;
  //@Output() onSubmit = new EventEmitter<Order>();

  constructor(private cartService: CartService, private orderService:OrderService, private router: Router) {
    this.cartService.getCart().subscribe(ite => {
      this.items=ite;
    });
    this.cartService.getTotal().subscribe(res => {
      this.total=res;
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

  /*ngOnChanges() {
    this.model = Object.assign({}, this.order);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }*/
  submit() {
    this.order = new Order(this.items, this.name.value, this.address.value, this.address.value);
    console.log(this.order);
    this.orderService.create(this.order, this.items)
      .subscribe(
        res => this.router.navigate(['/categories']),
        err => console.log(err)
      )
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
