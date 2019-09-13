import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RequestsComponent } from './requests/requests.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ChartModule } from 'angular-highcharts';
import { MainCardDetailComponent } from './main-card-detail/main-card-detail.component';
import {ChartService} from './services/chart.service';


@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    CardsComponent,
    CardComponent,
    HeaderComponent,
    CardDetailComponent,
    MainCardDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }


