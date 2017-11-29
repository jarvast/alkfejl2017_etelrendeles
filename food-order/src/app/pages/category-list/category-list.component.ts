import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { Category } from "../../model/Category";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  displayedColumns: String[] = ['name', 'id'];
  categories: DataSource<any> = new CategoryDataSource(this.categoryService);

  constructor(private categoryService: CategoryService) { }


}
export class CategoryDataSource extends DataSource<any> {
  constructor(private categoryService: CategoryService) {
    super();
  }

  connect(): Observable<Category[]> {
    return this.categoryService.getCategories();
  }

  disconnect() {
  }
}