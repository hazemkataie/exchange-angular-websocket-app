import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarPriceComponent } from './dollar-price.component';

describe('DollarPriceComponent', () => {
  let component: DollarPriceComponent;
  let fixture: ComponentFixture<DollarPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DollarPriceComponent]
    });
    fixture = TestBed.createComponent(DollarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
