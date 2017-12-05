import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../services/item.service";
import { Item } from "../../model/Item";
import { Category } from "../../model/Category";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/observable/of";
import { CategoryService } from '../../services/category.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  displayedColumns: String[] = ['name', 'description', 'price','spicy','vegetarian','edit'];
  categoryId: number;
  items : MatTableDataSource<Item>;
  categoryName: String;

  constructor(private itemService: ItemService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {
    this.route.params.subscribe(
    params => this.categoryId = params.id,
    err => console.log(err)
    )
}

ngOnInit(){
  this.itemService.getItems(this.categoryId).subscribe(item =>{
    this.items = new MatTableDataSource(item);
  });
  this.categoryService.getCategory(this.categoryId).subscribe(cat => {
    this.categoryName = cat.name;
  })
}
  toCart(id: number) {
    this.itemService.toCart(id)
      .subscribe(res=> res,
        err => this.openSnackBarError()
      );
   }
   openSnackBarOk() {
    this.snackBar.open('Added to cart!','Ok' ,{
      duration: 3000,
    });
  }
  openSnackBarError() {
    this.snackBar.open('Price limit reached (20.000HUF)','Thanks' ,{
      duration: 3000,
    });
  }
}