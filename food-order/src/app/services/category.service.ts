import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Category} from "../model/Category";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class CategoryService {

  constructor(private http: Http) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get(Server.routeTo(Routes.CATEGORIES))
      .map(res => res.json())
  }

  getCategory(id: number) {
    return this.http.get(Server.routeTo(Routes.CATEGORIES) + '/' + id)
      .map(res => res.json())
  }
}
