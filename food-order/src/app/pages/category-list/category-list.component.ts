import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { Category } from "../../model/Category";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  displayedColumns: String[] = ['name'];
  categories : MatTableDataSource<Category>;

  constructor(private categoryService: CategoryService) { }
  ngOnInit(){
    this.categoryService.getCategories().subscribe(cat => {
      this.categories = new MatTableDataSource(cat);
    });
  }
}