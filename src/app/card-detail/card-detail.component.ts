import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Chart} from 'angular-highcharts';
import {ChartService} from '../services/chart.service';
import {IChartConfig} from '../services/chart';
import {Card} from '../services/list';
import {ListService} from '../services/list.service';

const FULL_CHART = 7;

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent implements OnInit {
  public cardObj: Card;
  public chartData;
  public chart: Chart;
  public prm: IChartConfig;

  @Input() request;

  constructor(private route: ActivatedRoute, private chartService: ChartService, private httpService: ListService) {
  }
  ngOnInit() {
    // routing.get id of card
    this.route.params.subscribe((params: Params) => {
      // request on cardObj to server based on the selected id
      this.httpService.getData().subscribe((data: Card[]) => {
        data.forEach((card, ind) => {
          if (+params.cardId === ind) {
            this.cardObj =  card;
          }
        });

        const daysLeft = this.cardObj.daysLeft || 0;

        this.chartData = [
          {
            name: daysLeft,
            y: +daysLeft
          },
          {
            y: FULL_CHART - daysLeft,
            color: '#eee'
          }
        ];
        // new params for chart
        this.prm = {
          height: 250,
          width: 250,
          size: 200,
          innerSize: 170,
          data: this.chartData,
          text:
            `<div style="text-align: center;font-size: 35px">${this.chartData[0].name}
              <div style="font-weight:lighter; font-size:20px;"> Leave Balance </div>
          </div>`,
          useHTML: true,
          name: this.chartData[0].name
        };
        // create chart with new params
        this.chart = this.chartService.createChart(this.prm);
      });
    });
  }
}





