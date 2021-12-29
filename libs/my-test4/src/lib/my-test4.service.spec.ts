import { TestBed } from '@angular/core/testing';

import { MyTest4Service } from './my-test4.service';

describe('MyTest4Service', () => {
  let service: MyTest4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTest4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
