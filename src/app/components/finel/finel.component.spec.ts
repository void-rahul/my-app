import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinelComponent } from './finel.component';

describe('FinelComponent', () => {
  let component: FinelComponent;
  let fixture: ComponentFixture<FinelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
