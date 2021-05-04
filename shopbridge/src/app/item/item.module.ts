import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditemComponent } from './additem/additem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { ListitemComponent } from './listitem/listitem.component';

@NgModule({
  declarations: [
    AdditemComponent,
    UpdateitemComponent,
    ListitemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
