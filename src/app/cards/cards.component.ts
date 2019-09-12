import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service';
import {User} from '../list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  userList: User[] = [];

  constructor(private httpService: ListService) {}

  ngOnInit() {

    this.httpService.getData().subscribe((data: User[]) => this.userList = data );
  }

}
