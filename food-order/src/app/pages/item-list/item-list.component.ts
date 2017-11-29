import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../services/item.service";
import { Item } from "../../model/Item";
import { Category } from "../../model/Category";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/observable/of";
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent  {
  displayedColumns: String[] = ['name', 'id', 'description', 'price','isSpicy','isVegetarian','edit'];
  categoryId: number;
  items: DataSource<any>;
  category: Category;

  constructor(private itemService: ItemService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
    params => this.categoryId = params.id,
    err => console.log(err)
    )
    this.items = new ItemDataSource(this.itemService,this.categoryId);
    //this.category = this.categoryService.getCategory(this.categoryId);
}
toCart(id: number) {
  this.itemService.toCart(id)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
}

}
export class ItemDataSource extends DataSource<any> {
  constructor(private itemService: ItemService, private id:number) {
    super();
    this.id=id;
  }

  connect(): Observable<Item[]> {
    return this.itemService.getItems(this.id);
  }

  disconnect() {
  }
}