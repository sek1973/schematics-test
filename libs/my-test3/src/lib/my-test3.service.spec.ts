import { TestBed } from '@angular/core/testing';

import { MyTest3Service } from './my-test3.service';

describe('MyTest3Service', () => {
  let service: MyTest3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTest3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
