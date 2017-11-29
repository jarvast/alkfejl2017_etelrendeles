import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/Item";
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item = new Item();
  id: number;
  catId: number;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(
    params => this.id = params.id,
    err => console.log(err)
    )
  this.route.params.subscribe(
  params => this.catId = params.catId,
  err => console.log(err)
  )
  console.log("detailkajaid" + this.id);
  console.log("detail catid" + this.catId);
  console.log("item" + this.item.name);
}

  ngOnInit() {
    this.reload();
  }
  private reload() {
    this.itemService.read(this.id,this.catId)
      .subscribe(
        item => this.item = item,
        err => console.log(err)
      )
  }

}
