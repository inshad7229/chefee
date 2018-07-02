import { SubcategoryModule } from './subcategory.module';

describe('SubcategoryModule', () => {
  let subcategoryModule: SubcategoryModule;

  beforeEach(() => {
    subcategoryModule = new SubcategoryModule();
  });

  it('should create an instance', () => {
    expect(subcategoryModule).toBeTruthy();
  });
});
