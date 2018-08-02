import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-meals-form',
  templateUrl: './meals-form.component.html',
  styleUrls: ['./meals-form.component.scss']
})
export class MealsFormComponent implements OnInit {
  maealsForm: FormGroup;
  fullMeals:any={};
  constructor( private formBuilder: FormBuilder,private http:Http,private router:Router,
    private spinnerService: Ng4LoadingSpinnerService) { 
    this.maealsForm = this.formBuilder.group({
      breakfast: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
      breakfastDate:['',Validators.required],
      launch: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
      launchDate:['',Validators.required],
      dinner: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
      dinnerDate:['',Validators.required],
      numberOfPersons: ['',Validators.required],

        }, { updateOn: 'blur change'});
        this.maealsForm = new FormGroup( this.maealsForm.controls, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.fullMeals.breakfastDate='08:00';
     this.fullMeals.launchDate='08:00';
    this.fullMeals.dinnerDate='08:00';
  }
  save(){
    console.log(this.fullMeals);
    this.spinnerService.show();
    this.http.post("https://hajj-meals.herokuapp.com/addMeal",this.fullMeals).subscribe(data=>{
		  this.spinnerService.hide();
        console.log(data.json());
      },
    error=>{
      console.log(error)
    })
  }
}
