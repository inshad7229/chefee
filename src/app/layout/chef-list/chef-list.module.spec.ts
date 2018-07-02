import { ChefListModule } from './chef-list.module';

describe('ChefListModule', () => {
  let chefListModule: ChefListModule;

  beforeEach(() => {
    chefListModule = new ChefListModule();
  });

  it('should create an instance', () => {
    expect(chefListModule).toBeTruthy();
  });
});
