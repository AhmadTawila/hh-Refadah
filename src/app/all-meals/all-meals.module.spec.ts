import { AllMealsModule } from './all-meals.module';

describe('AllMealsModule', () => {
  let allMealsModule: AllMealsModule;

  beforeEach(() => {
    allMealsModule = new AllMealsModule();
  });

  it('should create an instance', () => {
    expect(allMealsModule).toBeTruthy();
  });
});
