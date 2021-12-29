import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest3Component } from './my-test3.component';

describe('MyTest3Component', () => {
  let component: MyTest3Component;
  let fixture: ComponentFixture<MyTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
