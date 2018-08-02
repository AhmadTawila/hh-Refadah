import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMealsComponent } from './person-meals.component';

describe('PersonMealsComponent', () => {
  let component: PersonMealsComponent;
  let fixture: ComponentFixture<PersonMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
