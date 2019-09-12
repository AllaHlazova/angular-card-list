import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../list';
import {ListService} from '../../services/list.service';

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

  constructor(private httpService: ListService) { }


  ngOnInit() {
  }
}


