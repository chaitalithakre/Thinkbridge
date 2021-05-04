import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AdditemComponent } from './item/additem/additem.component';
import { ListitemComponent } from './item/listitem/listitem.component';
import { UpdateitemComponent } from './item/updateitem/updateitem.component';

const routes: Routes = [
  {
    component : AdditemComponent,
    path : 'add'
  },
  {
    component : BodyComponent,
    path : 'home'
  },
  {
    component : UpdateitemComponent,
    path : 'update/:id'
  },
  {
    component : ListitemComponent,
    path : 'list'
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
