import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent{
  categoryForm : FormGroup;

  constructor(private categoryService : CategoryService, private fb : FormBuilder, private router: Router) {
    this.createForm();
   }
   createForm(){
     this.categoryForm= this.fb.group({
       name: ['', Validators.required]
     });
   }
   get name(){
     return this.categoryForm.get('name')
   }

   submit(){
     this.categoryService.create(new Category(this.name.value)).subscribe(res =>{
      this.router.navigate(['/categories']);
     })
   }

}
