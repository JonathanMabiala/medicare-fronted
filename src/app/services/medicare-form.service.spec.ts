import { TestBed } from '@angular/core/testing';

import { MedicareFormService } from './medicare-form.service';

describe('MedicareFormService', () => {
  let service: MedicareFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicareFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
