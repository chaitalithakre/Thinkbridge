import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemserviceService } from '../itemservice.service';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {

  constructor(private item: ItemserviceService, private router: Router) { }
  collection = <any>[];

  ngOnInit(): void {
    this.item.getItems().subscribe((result) => {
      this.collection = result;
    })
  }

  deleteitem(item: any) {
    console.warn(this.collection);
    this.collection.splice(item - 1, 1);
    this.item.deleteItem(item).subscribe((result) => {
      this.item.getItems().subscribe((result) => {
        this.collection = result;
      })
      window.alert("Item deleted Successfully !");
    })
  }

  addHandler() {
    this.router.navigateByUrl('add');
  }
}
