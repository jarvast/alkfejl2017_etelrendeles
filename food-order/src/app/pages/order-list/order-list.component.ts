import { Component, ViewChild } from '@angular/core';
import { OrderService } from "../../services/order.service";
import { Order } from "../../model/Order";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent{
  displayedColumns: String[] = ['name', 'phone','address','received','delivered','status','details'];
  orders : MatTableDataSource<Order>;

  constructor(private orderService: OrderService) {
    this.orderService.getOrders().subscribe(order => {
      this.orders = new MatTableDataSource(order);
    })
   
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.orders.filter = filterValue;
  }

}