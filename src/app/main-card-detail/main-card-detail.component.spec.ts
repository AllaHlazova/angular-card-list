import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardDetailComponent } from './main-card-detail.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainCardDetailComponent', () => {
  let component: MainCardDetailComponent;
  let fixture: ComponentFixture<MainCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       RouterTestingModule,
      ],
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
