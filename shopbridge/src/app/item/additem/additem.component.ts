import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  addItems = new FormGroup({
    name: new FormControl(null, Validators.required),
    desc: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    image: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
  })

  constructor(private item: ItemserviceService, private router: Router) { }
  alert: boolean = false;

  ngOnInit(): void {
  }

  closeAlert() {
    this.alert = false;
  }

  listHandler() {
    this.router.navigateByUrl('list');
  }

  get name() {
    return this.addItems.get('name');
  }

  get desc() {
    return this.addItems.get('desc');
  }

  get price() {
    return this.addItems.get('price');
  }

  get image() {
    return this.addItems.get('image');
  }

  onSubmit() {
    if (this.addItems.valid) {
      this.item.saveItem(this.addItems.value).subscribe((result: any) => {
        this.alert = true;
      })
      this.addItems.reset({});
    } else {
      // validate all form fields
      Object.keys(this.addItems.controls).forEach(field => {
        const control = this.addItems.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
