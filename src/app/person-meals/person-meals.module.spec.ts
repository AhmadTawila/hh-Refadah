import { PersonMealsModule } from './person-meals.module';

describe('PersonMealsModule', () => {
  let personMealsModule: PersonMealsModule;

  beforeEach(() => {
    personMealsModule = new PersonMealsModule();
  });

  it('should create an instance', () => {
    expect(personMealsModule).toBeTruthy();
  });
});
