import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { Item } from "../model/Item";
import {Routes, Server} from "../utils/ServerRoutes";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CartService {


  constructor(private http: HttpClient) {
  }

  getCart() : Observable<Item[]>{
      return this.http.get<Item[]>(Server.routeTo(Routes.CART));
  }

  getTotal() : Observable<number>{
    return this.http.get<number>(Server.routeTo(Routes.CART) + '/full')
  }
  deleteCart() {
    return this.http.delete(Server.routeTo(Routes.CART) + '/del').subscribe()
  }
}
