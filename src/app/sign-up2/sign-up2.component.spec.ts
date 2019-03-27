import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUP2Component } from './sign-up2.component';

describe('SignUP2Component', () => {
  let component: SignUP2Component;
  let fixture: ComponentFixture<SignUP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
