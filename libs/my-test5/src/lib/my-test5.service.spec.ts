import { TestBed } from '@angular/core/testing';

import { MyTest5Service } from './my-test5.service';

describe('MyTest5Service', () => {
  let service: MyTest5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTest5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
