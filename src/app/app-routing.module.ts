import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: '',
  redirectTo: 'AllMeals',
  pathMatch: 'full'
},
{
  path: 'add-meals',
  loadChildren: './meals-form/meals-form.module#MealsFormModule'
},
{
  path: 'AllMeals',
  loadChildren: './all-meals/all-meals.module#AllMealsModule'
},
{
  path: 'personMeals',
  loadChildren: './person-meals/person-meals.module#PersonMealsModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
