import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Chart} from 'angular-highcharts';
import {SeriesOptionsType} from 'highcharts';
import {ChartService} from '../services/chart.service';

/* чтобы установить плагин,надо  установить нпм(https://www.npmjs.com/package/angular-highcharts)
вынести в переменную параметры. здесь не важно в каком месте класса вставить код-поэтому создали перем.внутри - chart.
название перем. должно совпадать с названием в файле card-detail.component.html

спросить почему дописали 'as SeriesOptionsType'
спросить можно ли было по другому вставить по центру 05
 */

// const testData = [{name: '&nbsp&nbsp 05', y: 5}, {name: ' ', y: 2, color: '#eee'}];

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  //  чтобы воспользоваться сервисом, создаем тут переменную(такая же как и в другом компоненте,где мы юзаем данный  чарт сервис)
  // и пишем в конструкторе то же,как и в другом компоненте.так же в хтмл обращаемся к переменной чарт-чтобы вызвать метод.
  public chart: Chart = this.chartService.createChart();

  // когда юзали чарт в одном месте использовали эту конструкцию.
  // public chart: Chart = new Chart({
  //   chart: {
  //     backgroundColor: 'transparent',
  //     margin: [0, 0, 0, 0],
  //     renderTo: 'TestDonut',
  //     spacing: [0, 0, 0, 0],
  //     type: 'pie',
  //     height: 250,
  //     width: 250
  //   },
  //   colors: ['#1e90ff85'],
  //   credits: {
  //     enabled: false
  //   },
  //   exporting: {
  //     enabled: false
  //   },
  //   legend: {
  //     enabled: false
  //   },
  //   plotOptions: {
  //     series: {
  //       dataLabels: {
  //         enabled: true,
  //         color: 'red'
  //       }
  //     },
  //     pie: {
  //       allowPointSelect: false,
  //       dataLabels: {
  //         connectorWidth: 0,
  //         enabled: false
  //       },
  //       shadow: false,
  //       states: {
  //         hover: {
  //           enabled: false
  //         }
  //       },
  //     },
  //   },
  //   tooltip: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       data: testData,
  //       name: '',
  //       size: 200,
  //       innerSize: 170,
  //       pointPadding: 0,
  //       groupPadding: 0,
  //       type: 'pie'
  //     } as SeriesOptionsType
  //   ],
  //   title: {
  //     align: 'center',
  //     style: {
  //       color: '#696969',
  //       fontFamily: 'Arial, Helvetica, sans',
  //       fontSize: '35px',
  //       fontWeight: 'bold'
  //     },
  //     text: testData[0].name + '<div style="font-weight: lighter;font-size: 15px;">Leave Balance</div>',
  //     useHTML: true,
  //     verticalAlign: 'middle',
  //     y: 25
  //   }
  // });

  @Input() request;
  constructor(private route: ActivatedRoute, private chartService: ChartService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params.cardId);

      // this.http.get('api/cardDetail', {
      //       //   id: params.cardId
      //       // }).subscribe((data) => {
      //       //   this.detCard = data;
      //       // })//чтобы получить айдишник карты
    });
  }
}
