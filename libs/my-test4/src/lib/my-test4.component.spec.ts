import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest4Component } from './my-test4.component';

describe('MyTest4Component', () => {
  let component: MyTest4Component;
  let fixture: ComponentFixture<MyTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
