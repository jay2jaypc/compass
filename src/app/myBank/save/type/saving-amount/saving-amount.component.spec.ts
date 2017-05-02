import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAmountComponent } from './saving-amount.component';

describe('SavingAmountComponent', () => {
  let component: SavingAmountComponent;
  let fixture: ComponentFixture<SavingAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
