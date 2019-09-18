import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CardsComponent} from './cards/cards.component';
import {CardDetailComponent} from './card-detail/card-detail.component';
import { RequestsComponent } from './requests/requests.component';
import { MainCardDetailComponent } from './main-card-detail/main-card-detail.component';


const ROUTERS: Route[] = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'cards/:cardId',
    component: MainCardDetailComponent,
    children: [
      {
        path: '',
        component: CardDetailComponent
      },
      {
        path: 'success',
        component: RequestsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTERS)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
