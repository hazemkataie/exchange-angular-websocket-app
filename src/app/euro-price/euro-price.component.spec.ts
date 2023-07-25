import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroPriceComponent } from './euro-price.component';

describe('EuroPriceComponent', () => {
  let component: EuroPriceComponent;
  let fixture: ComponentFixture<EuroPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuroPriceComponent]
    });
    fixture = TestBed.createComponent(EuroPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
