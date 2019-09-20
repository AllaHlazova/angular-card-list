import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import {Card} from '../services/list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardList: Card[] = [];

  constructor(public httpService: ListService) {}

  ngOnInit() {
    // request to server
    this.httpService.getData().subscribe((data: Card[]) => this.cardList = data );
  }
}


