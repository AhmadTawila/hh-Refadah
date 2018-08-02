import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsFormComponent } from './meals-form.component'

const routes: Routes = [{ path: '', component: MealsFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsFormRoutingModule { }
