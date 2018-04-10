import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPricingComponent } from './index-pricing.component';

describe('IndexPricingComponent', () => {
  let component: IndexPricingComponent;
  let fixture: ComponentFixture<IndexPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
