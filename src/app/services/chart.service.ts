import { Injectable } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {SeriesOptionsType} from 'highcharts';

const testData = [{name: '&nbsp&nbsp 05', y: 5}, {name: ' ', y: 2, color: '#eee'}];

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  public createChart(): Chart {
    return new Chart({
      chart: {
        backgroundColor: 'transparent',
        margin: [0, 0, 0, 0],
        renderTo: 'TestDonut',
        spacing: [0, 0, 0, 0],
        type: 'pie',
        height: 250,
        width: 250
      },
      colors: ['#1e90ff85'],
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            color: 'red'
          }
        },
        pie: {
          allowPointSelect: false,
          dataLabels: {
            connectorWidth: 0,
            enabled: false
          },
          shadow: false,
          states: {
            hover: {
              enabled: false
            }
          },
        },
      },
      tooltip: {
        enabled: false
      },
      series: [
        {
          data: testData,
          name: '',
          size: 200,
          innerSize: 170,
          pointPadding: 0,
          groupPadding: 0,
          type: 'pie'
        } as SeriesOptionsType
      ],
      title: {
        align: 'center',
        style: {
          color: '#696969',
          fontFamily: 'Arial, Helvetica, sans',
          fontSize: '35px',
          fontWeight: 'bold'
        },
        text: testData[0].name + '<div style="font-weight: lighter;font-size: 15px;">Leave Balance</div>',
        useHTML: true,
        verticalAlign: 'middle',
        y: 25
      }
    });
  }

  constructor() { }
}
