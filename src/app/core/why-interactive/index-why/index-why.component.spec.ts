import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWhyComponent } from './index-why.component';

describe('IndexWhyComponent', () => {
  let component: IndexWhyComponent;
  let fixture: ComponentFixture<IndexWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
