import { DegreeModule } from './degree.module';

describe('DegreeModule', () => {
  let degreeModule: DegreeModule;

  beforeEach(() => {
    degreeModule = new DegreeModule();
  });

  it('should create an instance', () => {
    expect(degreeModule).toBeTruthy();
  });
});
