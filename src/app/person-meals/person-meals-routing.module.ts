import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonMealsComponent } from './person-meals.component'
const routes: Routes = [{
  path:'',component:PersonMealsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonMealsRoutingModule { }
