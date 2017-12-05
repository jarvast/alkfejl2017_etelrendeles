import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Category} from "../model/Category";
import {Routes, Server} from "../utils/ServerRoutes";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService {
  categories : Category[]

  constructor(private http: HttpClient) {
  }

  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(Server.routeTo(Routes.CATEGORIES));
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(Server.routeTo(Routes.CATEGORIES) + '/' + id);
  }
  create(category: Category){
    return this.http.post(Server.routeTo(Routes.CATEGORIES) + '/new',category);
  }
}
