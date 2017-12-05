import { Injectable } from '@angular/core';
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {Order} from "../model/Order";
import {Item} from "../model/Item";
import { Headers,RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  create(order: Order, items: Item[]){
    return this.http.post(Server.routeTo(Routes.ORDERS), order);
  }
  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(Server.routeTo(Routes.ORDERS));
  }
  read(id: number) : Observable<Order>{
    return this.http.get<Order>(Server.routeTo(Routes.ORDERS) + '/' + id);
  }
  delete(id:number){
    return this.http.delete(Server.routeTo(Routes.ORDERS) + '/' + id).subscribe();
  }
  deliver(id:number){
    return this.http.get(Server.routeTo(Routes.ORDERS) + '/' + id + '/deliver');
  }

}
