import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChefListComponent} from  './chef-list.component'
const routes: Routes = [
{
	path:'',
	component:ChefListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefListRoutingModule { }
