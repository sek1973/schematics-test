import { TestBed } from '@angular/core/testing';

import { MyTest2Service } from './my-test2.service';

describe('MyTest2Service', () => {
  let service: MyTest2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTest2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
