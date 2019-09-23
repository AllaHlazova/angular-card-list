import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from '../services/list.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CardsComponent', () => {
  let fixture: ComponentFixture<CardsComponent>;
  let component: CardsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChartModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [CardsComponent, CardComponent],
      providers: [ListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ListService', inject([ListService], (service: ListService) => {
    expect(component).toBeTruthy();
  }));

  it('should get info',
    inject([ListService],
      (service: ListService) => {
        const info = [{
          title: 'Pasturia',
          subTitle: 'Emma Brennan',
          date: 1558347089,
          daysLeft: 2,
          isInfoCard: true
        }];

        spyOn(service, 'getData').and.returnValue(of(info));
        component.ngOnInit();
        expect(component.cardList).toEqual(info);
      }));
});


