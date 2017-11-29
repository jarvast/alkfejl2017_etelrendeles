import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Item} from "../model/Item";
import {Routes, Server} from "../utils/ServerRoutes";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers,RequestOptions } from "@angular/http";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class ItemService {
  options: RequestOptions;


  constructor(private http:Http) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: headers});
   }

  getItems(id:number): Observable<Item[]> {
    return this.http.get(Server.routeTo(Routes.CATEGORIES) + '/' + id + '/' + (Routes.ITEMS))
      .map(res => res.json())
  }

  read(id: number, catId:number) {
    return this.http.get(Server.routeTo(Routes.CATEGORIES) + '/' + catId + '/' + (Routes.ITEMS) + '/' + id)
      .map(res => res.json())
  }
  toCart(itemId: number) {
    return this.http.post(Server.routeTo(Routes.CART), itemId, this.options)
      .map(res => res.json())
  }

}
