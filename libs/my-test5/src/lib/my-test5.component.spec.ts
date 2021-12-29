import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest5Component } from './my-test5.component';

describe('MyTest5Component', () => {
  let component: MyTest5Component;
  let fixture: ComponentFixture<MyTest5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTest5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTest5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
