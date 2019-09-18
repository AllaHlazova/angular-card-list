import { Component, OnInit } from '@angular/core';

// this main component for routing to children components `CardDetailComponent` and `RequestsComponent`.
@Component({
  selector: 'app-main-card-detail',
  templateUrl: './main-card-detail.component.html',
  styleUrls: ['./main-card-detail.component.scss']
})
export class MainCardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
