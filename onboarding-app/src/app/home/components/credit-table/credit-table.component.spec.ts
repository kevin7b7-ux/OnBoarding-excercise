import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTableComponent } from './credit-table.component';

describe('CreditTableComponent', () => {
  let component: CreditTableComponent;
  let fixture: ComponentFixture<CreditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
