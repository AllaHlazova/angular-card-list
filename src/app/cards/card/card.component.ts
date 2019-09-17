import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../list';
import {ListService} from '../../services/list.service';
import {ChartService} from '../../services/chart.service';
import {Chart} from 'angular-highcharts';
import {generateColor, IChartConfig} from '../../chartInt';

const FULL_CHART = 7;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  // @Input('userObj') user: User; можно и в кавычках обьявить.Название
  // в кавычках должно дублироваться в card.component.html -
  // {{userObj.title}}.

  @Input() userObj: User;

  // userObj-пишем такое же название, как и в
  // родительском компоненте "cards.component.html" -
  // <app-card [userObj]="user" [id]="ind"></app-card>

  @Input() id: number;
  // создаем переменную,достаем из чарт сервиса метод по созда.
  // чарта(теперь по названию переменной можем воспользоваться методом создания чарта везде.)
  // обязательно в конструктор добавляем новую переменную с методом чарт сервис.+добавляем импорт "чарт сервис"
  public chart: Chart;
  public testData;
  public prms: IChartConfig;

  constructor(private httpService: ListService, private chartService: ChartService) {
    // console.log('constr', this.userObj);
  }

  ngOnInit() {
    const daysLeft = this.userObj.daysLeft || 0;
    const color = generateColor();
    this.testData = [
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
    this.prms = {
      height: 200,
      width: 200,
      size: 140,
      innerSize: 90,
      data: this.testData,
      text:
        `<div style="text-align:center; font-size:25px">
        ${this.testData[0].name} <div style="font-size:12px;font-weight: lighter"> Days Left </div>
      </div>`,
      useHTML: true,
      name: this.testData[0].name
    };
    // console.log(this.chart);
    console.log(color)
    this.chart = this.chartService.createChart(this.prms);
    // this.chart = this.chartService.createChart();
  }
}


