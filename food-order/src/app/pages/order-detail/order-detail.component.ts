import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/Order";
import {Item} from "../../model/Item";
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order = new Order();
  id: number;
  item: Item;

  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
      this.route.params.subscribe(
        params => this.id = params.id,
        err => console.log(err)
        )
    }

  ngOnInit() {
    this.reload();
  }

  private reload() {
    this.orderService.read(this.id)
      .subscribe(
        order => this.order = order,
        err => console.log(err)
      )
  }
  deliver(){
    this.orderService.deliver(this.id).subscribe(res => this.reload());
  }
  
  delete() {
    this.orderService.delete(this.id);
  }

}
