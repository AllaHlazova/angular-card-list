import { fakeAsync, inject, TestBed } from '@angular/core/testing';

import {ListService} from './list.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListService', () => {

  beforeEach(fakeAsync(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ListService]
    })));

  it('should be created', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));

  it('request should return the data', async (done) => {
    inject([ListService, HttpTestingController],
      (service: ListService, back: HttpTestingController) => {
        const info = [{
          title: 'Pasturia',
          subTitle: 'Emma Brennan',
          date: 1558347089,
          daysLeft: 2,
          isInfoCard: true
        }];

        service.getData().subscribe(card => {
          expect(card).toEqual(info);
          done();
        });

        back.expectOne({
          method: 'GET',
          url: '/assets/list.json'
        }).flush(info);
        back.verify();
      })();
  });
});
