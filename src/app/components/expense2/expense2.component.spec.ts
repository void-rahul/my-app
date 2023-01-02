import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expense2Component } from './expense2.component';

describe('Expense2Component', () => {
  let component: Expense2Component;
  let fixture: ComponentFixture<Expense2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Expense2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expense2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
