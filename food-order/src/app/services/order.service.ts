import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {Order} from "../model/Order";
import {Item} from "../model/Item";
import { Headers,RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http/src/headers';
//import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class OrderService {
  options: RequestOptions;
  asd: any;
  //headers : HttpHeaders;

  constructor(private http: HttpClient) {
    //this.headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    //this.options = new RequestOptions({ headers: headers});
  }

  create(order: Order, items: Item[]) : Observable<any>{
    return this.http.post(Server.routeTo(Routes.ORDERS), order)
    //req.subscribe();
    //return this.http.post(Server.routeTo(Routes.ORDERS + '/addItem'), items);


  }

}
