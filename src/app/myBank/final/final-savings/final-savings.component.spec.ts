import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSavingsComponent } from './final-savings.component';

describe('FinalSavingsComponent', () => {
  let component: FinalSavingsComponent;
  let fixture: ComponentFixture<FinalSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
