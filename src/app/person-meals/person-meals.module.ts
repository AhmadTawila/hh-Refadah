import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonMealsRoutingModule } from './person-meals-routing.module';
import { PersonMealsComponent } from './person-meals.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    PersonMealsRoutingModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [PersonMealsComponent]
})
export class PersonMealsModule { }
