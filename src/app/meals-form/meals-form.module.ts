import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealsFormRoutingModule } from './meals-form-routing.module';
import { MealsFormComponent } from './meals-form.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    MealsFormRoutingModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule

  ],
  declarations: [MealsFormComponent]
})
export class MealsFormModule { }
