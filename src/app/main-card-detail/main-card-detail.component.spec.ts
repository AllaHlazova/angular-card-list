import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardDetailComponent } from './main-card-detail.component';

describe('MainCardDetailComponent', () => {
  let component: MainCardDetailComponent;
  let fixture: ComponentFixture<MainCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
