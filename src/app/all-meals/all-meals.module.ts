import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMealsRoutingModule } from './all-meals-routing.module';
import { AllMealsComponent } from './all-meals.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker'
//import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'

@NgModule({
  imports: [
    CommonModule,
    AllMealsRoutingModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    SatDatepickerModule,
    MatIconModule
  ],
  declarations: [AllMealsComponent]
})
export class AllMealsModule { }
