import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTypeComponent } from './saving-type.component';

describe('SavingTypeComponent', () => {
  let component: SavingTypeComponent;
  let fixture: ComponentFixture<SavingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
