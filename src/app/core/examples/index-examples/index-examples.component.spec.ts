import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexExamplesComponent } from './index-examples.component';

describe('IndexExamplesComponent', () => {
  let component: IndexExamplesComponent;
  let fixture: ComponentFixture<IndexExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
