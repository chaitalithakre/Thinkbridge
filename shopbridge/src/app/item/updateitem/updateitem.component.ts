import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemserviceService } from '../itemservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  updateItem: FormGroup;

  constructor(private params: ActivatedRoute, private item: ItemserviceService, private router: Router) { }
  alert: boolean = false;

  ngOnInit(): void {
    this.item.getCurrentItem(this.params.snapshot.params.id).subscribe((result: any) => {
      this.updateItem = new FormGroup({
        name: new FormControl(result.name, Validators.required),
        desc: new FormControl(result.desc, Validators.required),
        price: new FormControl(result.price, [Validators.required, Validators.min(1)]),
        image: new FormControl(result.image, Validators.required),
        type: new FormControl(result.type, Validators.required)
      })
    })
  }

  closeAlert() {
    this.alert = false;
  }

  cancelHandler() {
    this.router.navigateByUrl('list');
  }

  onUpdate() {
    if (this.updateItem.valid) {
      this.item.updateItem(this.params.snapshot.params.id, this.updateItem.value).subscribe((result) => {
        this.alert = true;
      });
    } else {
      // validate all form fields
      Object.keys(this.updateItem.controls).forEach(field => {
        const control = this.updateItem.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
