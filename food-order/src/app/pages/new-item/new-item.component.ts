import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Item} from "../../model/Item";
import {Category} from "../../model/Category";
import {ItemService} from "../../services/item.service";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  itemForm: FormGroup;
  categories: Category[];

  constructor(private itemService: ItemService,private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories=categories;
   },
   err => {
     console.log(err);
   });
    this.createForm();
   }

   createForm(){
     this.itemForm = this.fb.group({
       name: ['', Validators.required],
       description : '',
       price: ['', [Validators.required, Validators.pattern("[1-9][0-9]*")]],
       category: ['', Validators.required],
       spicy: false,
       vegetarian: false
     });
   }
  
  get name() {
    return this.itemForm.get('name')
  }
  get description() {
    return this.itemForm.get('description')
  }
  get price() {
    return this.itemForm.get('price')
  }
  get category() {
    return this.itemForm.get('category')
  }
  get spicy() {
    return this.itemForm.get('spicy')
  }
  get vegetarian() {
    return this.itemForm.get('vegetarian')
  }
  submit() {
    this.itemService.create(new Item(this.name.value,this.category.value, this.description.value,this.price.value,this.spicy.value, this.vegetarian.value))
    .subscribe(res => {
      this.router.navigate(['/categories']);
    });
  }

}