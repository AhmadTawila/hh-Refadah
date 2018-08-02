import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-meals',
  templateUrl: './person-meals.component.html',
  styleUrls: ['./person-meals.component.scss']
})
export class PersonMealsComponent implements OnInit {
  days:any=[];
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
    this.days=[
      'Day 1:Aug 20','Day 2:Aug 21','Day 3:Aug 22','Day 4:Aug 23','Day 5:Aug 24','Day 6:Aug 25','Day 7:Aug 26','Day 8:Aug 27',
      'Day 9:Aug 28','Day 10:Aug 29'
    ]
  }

}
