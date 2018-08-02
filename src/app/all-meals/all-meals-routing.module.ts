import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMealsComponent } from './all-meals.component';

const routes: Routes = [{
  path:'' ,component : AllMealsComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMealsRoutingModule { }
