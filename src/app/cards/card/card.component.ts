import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../services/list';
import {ListService} from '../../services/list.service';
import {ChartService} from '../../services/chart.service';
import {Chart} from 'angular-highcharts';
import {generateColor, IChartConfig} from '../../services/chart';

const FULL_CHART = 7;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() cardObj: Card;

  @Input() id: number;

  public chart: Chart;

  constructor(private httpService: ListService, private chartService: ChartService) {}

  ngOnInit() {
    const daysLeft = this.cardObj.daysLeft || 0;
    const color = generateColor();
    const chartData: any[] = [
      {
        name: daysLeft,
        y: +daysLeft,
        color,
      },
      {
        y: FULL_CHART - daysLeft,
        color: '#eee'
      }
      ];
    // params for chart
    const prms: IChartConfig = {
      height: 200,
      width: 200,
      size: 140,
      innerSize: 90,
      data: chartData,
      text:
        `<div style="text-align:center; font-size:25px">
        ${chartData[0].name} <div style="font-size:12px;font-weight: lighter"> Days Left </div>
      </div>`,
      useHTML: true,
      name: chartData[0].name
    };
    // create chart with params
    this.chart = this.chartService.createChart(prms);
  }
}


