import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Item} from "../model/Item";
import {Routes, Server} from "../utils/ServerRoutes";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers,RequestOptions } from "@angular/http";


@Injectable()
export class ItemService {


  constructor(private http:HttpClient) {}

  getItems(id:number): Observable<Item[]> {
    return this.http.get<Item[]>(Server.routeTo(Routes.CATEGORIES) + '/' + id + '/' + (Routes.ITEMS));
  }

   read(id: number, catId:number) : Observable<Item>{
    return this.http.get<Item>(Server.routeTo(Routes.CATEGORIES) + '/' + catId + '/' + (Routes.ITEMS) + '/' + id);
  }
  toCart(itemId: number) {
    return this.http.post(Server.routeTo(Routes.CART), itemId);
  }
  create(item: Item){
    return this.http.post(Server.routeTo(Routes.ITEMS) + '/new',item);
  }
  getTop10() : Observable<Item[]>{
    return this.http.get<Item[]>(Server.routeTo(Routes.ITEMS) + '/max');
  }

}
