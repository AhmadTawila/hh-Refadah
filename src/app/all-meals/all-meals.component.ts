import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.scss']
})
export class AllMealsComponent implements OnInit {
  persons:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.persons=[
      'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali'
    ]
  }

  openPersonMeals(){
    this.router.navigateByUrl('personMeals');
  }

}
