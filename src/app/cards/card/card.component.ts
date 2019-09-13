import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../list';
import {ListService} from '../../services/list.service';
import {ChartService} from '../../services/chart.service';
import {Chart} from 'angular-highcharts';

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
  // создаем переменную,достаем из чарт сервиса метод по созда.чарта(теперь по названию переменной можем воспользоваться методом создания чарта везде.)
  // обязательно в конструктор добавляем новую переменную с методом чарт сервис.+добавляем импорт "чарт сервис"
  public chart: Chart = this.chartService.createChart();

  constructor(private httpService: ListService, private chartService: ChartService) { }

  ngOnInit() {
    console.log(this.chart);
    // this.chart = this.chartService.createChart();
  }
}


