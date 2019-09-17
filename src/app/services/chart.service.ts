import { Injectable } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {SeriesOptionsType} from 'highcharts';
import {IChartConfig} from '../chartInt';

// const testData = [{name: '05', y: 5}, {y: 2.5, color: '#eee'}];

// create new file for interfaces

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  public createChart(config: IChartConfig): Chart {
    return new Chart({
      chart: {
        backgroundColor: 'transparent',
        margin: [0, 0, 0, 0],
        renderTo: 'TestDonut',
        spacing: [0, 0, 0, 0],
        type: 'pie',
        height: config.height,
        width: config.width
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
          data: config.data,
          name: config.name,
          size: config.size,
          innerSize: config.innerSize,
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
          fontSize: '20px',
          fontWeight: 'bold'
        },
        // text: `<div style="text-align: center; font-weight: lighter;font-size: 15px;">${testData[0].name} <br> Leave Balance</div>`,
        // text: `<div>${testData[0].name} <br> Leave Balance</div>`,

        text: config.text,
        useHTML: config.useHTML,
        verticalAlign: 'middle',
        // y: 25
      }
    });
  }

  constructor() { }
}
