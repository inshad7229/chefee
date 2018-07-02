import { SpecialityModule } from './speciality.module';

describe('SpecialityModule', () => {
  let specialityModule: SpecialityModule;

  beforeEach(() => {
    specialityModule = new SpecialityModule();
  });

  it('should create an instance', () => {
    expect(specialityModule).toBeTruthy();
  });
});
