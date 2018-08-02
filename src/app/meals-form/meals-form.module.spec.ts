import { MealsFormModule } from './meals-form.module';

describe('MealsFormModule', () => {
  let mealsFormModule: MealsFormModule;

  beforeEach(() => {
    mealsFormModule = new MealsFormModule();
  });

  it('should create an instance', () => {
    expect(mealsFormModule).toBeTruthy();
  });
});
