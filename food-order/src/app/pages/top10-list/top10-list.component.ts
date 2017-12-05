import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Item } from '../../model/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-top10-list',
  templateUrl: './top10-list.component.html',
  styleUrls: ['./top10-list.component.css']
})
export class Top10ListComponent implements OnInit {
  displayedColumns: String[] = ['name', 'price','category'];
  items : MatTableDataSource<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getTop10().subscribe(item =>{
      this.items = new MatTableDataSource(item);
    });
  }

}
