import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.scss']
})
export class AllMealsComponent implements OnInit {
  persons:any=[];
  constructor() { }

  ngOnInit() {
    this.persons=[
      'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali', 'Ahmed Ali'
    ]
  }

}
