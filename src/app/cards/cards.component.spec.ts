import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import {CardComponent} from './card/card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ChartModule} from 'angular-highcharts';
import {HttpClientModule} from '@angular/common/http';
import {ListService} from '../services/list.service';
import {Observable, of} from 'rxjs';
import {Card} from '../services/list';
import {inspect} from 'util';

const MOCK_DATA = [
  {
    "title": "Payslip",
    "subTitle": "Next payslip",
    "date": 1558346256,
    "daysLeft": 3,
    "isInfoCard": true
  },
  {
    "title": "Zilidium",
    "subTitle": "Estela Hill",
    "date": 1558347089,
    "daysLeft": 1,
    "isInfoCard": true
  },
  {
    "title": "Zensor",
    "subTitle": "Ora Flowers",
    "date": 1558347089,
    "daysLeft": 5,
    "isInfoCard": true
  },
  {
    "title": "Medicroix",
    "subTitle": "Shelton Bowers",
    "date": 1558347089,
    "daysLeft": 1,
    "isInfoCard": true
  },
  {
    "title": "Fibrodyne",
    "subTitle": "Roberts Barry",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Quonk",
    "subTitle": "Booth Kirby",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Letpro",
    "subTitle": "Millie Barton",
    "date": 1558347089,
    "daysLeft": 4,
    "isInfoCard": true
  },
  {
    "title": "Fossiel",
    "subTitle": "Mccall Lynn",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Radiantix",
    "subTitle": "Erma Jones",
    "date": 1558347089,
    "daysLeft": 7,
    "isInfoCard": true
  },
  {
    "title": "Mixers",
    "subTitle": "Hewitt Banks",
    "date": 1558347089,
    "daysLeft": 4,
    "isInfoCard": true
  },
  {
    "title": "Cogentry",
    "subTitle": "Lindsay King",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Noralex",
    "subTitle": "Luz Stanley",
    "date": 1558347089,
    "daysLeft": 6,
    "isInfoCard": true
  },
  {
    "title": "Speedbolt",
    "subTitle": "Doyle Smith",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Acrodance",
    "subTitle": "Joseph Sandoval",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Maxemia",
    "subTitle": "Lorene Gordon",
    "date": 1558347089,
    "daysLeft": 3,
    "isInfoCard": true
  },
  {
    "title": "Bluplanet",
    "subTitle": "Wallace Fischer",
    "date": 1558347089,
    "daysLeft": 2,
    "isInfoCard": true
  },
  {
    "title": "Trasola",
    "subTitle": "Mathis Bowen",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Pasturia",
    "subTitle": "Emma Brennan",
    "date": 1558347089,
    "daysLeft": 2,
    "isInfoCard": true
  },
  {
    "title": "Quadeebo",
    "subTitle": "Susie Mcneil",
    "date": 1558347089,
    "isInfoCard": false
  },
  {
    "title": "Leave",
    "subTitle": "",
    "date": 0,
    "daysLeft": "",
    "isInfoCard": true
  }
];


describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  // let listService: ListService;
  // let spy: jasmine.Spy;
  // let cardTest;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChartModule,
        HttpClientModule
      ],
      declarations: [ CardsComponent, CardComponent],
      providers: [ListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;

    // listService = fixture.debugElement.injector.get(ListService);
    // // @ts-ignore
    // cardTest = {title: 'title', date: '12.12.12'}
    // spy = spyOn(ListService, "getData()").and.
    // returnValue(Observable.(cardTest));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  // it('should check getMVRData method', inject([WorkflowService, PersonalDataService], (workFlow: WorkflowService, personalDataService: PersonalDataService) => {
  //   let fixture = TestBed.createComponent(PersonalDataComponent);
  //   let inst = fixture.componentInstance;
  //   spyOn(personalDataService, 'getMVRData').and.returnValue(of(WORKFLOW_DATA));
  //   inst.getMVRData().subscribe(value => {
  //     console.log(value);
  //     expect(value).toEqual('It matchs');
  //   });
  // }));

  it('should check getData method',
    inject([ListService],
      (workFlow: ListService, personalDataService: ListService) => {
    let fixture = TestBed.createComponent(CardsComponent);
    let inst = fixture.componentInstance;
    spyOn(inst.httpService, 'getData').and.returnValue(of([{
          'title': 'Pasturia',
          'subTitle': 'Emma Brennan',
          'date': 1558347089,
          'daysLeft': 2,
          'isInfoCard': true
        }]));

    inst.httpService.getData().subscribe(value => {
      expect(value).toEqual([{
        'title': 'Pasturia',
        'subTitle': 'Emma Brennan',
        'date': 1558347089,
        'daysLeft': 2,
        'isInfoCard': true
      }]);
    });
    // expect(val).toEqual([{
    //   'title': 'Pasturia',
    //   'subTitle': 'Emma Brennan',
    //   'date': 1558347089,
    //   'daysLeft': 2,
    //   'isInfoCard': true
    // }]);
    // console.log(inst.httpService.getData());
    // inst.ngOnInit().subscribe(data => {
    //   console.log(data);
    //   expect(data).toEqual(inst.cardList);
    // });
  }));


  // it('should call listService', () => {
  //   component.ngOnInit();
  //   expect(spy.calls.any()).toBeTruthy();
  // });
  // it('should set card', () => {
  //   component.ngOnInit();
  //   expect(component.cardList).toEqual(cardTest);
  // });
});


