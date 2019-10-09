# JuniorTest

## Description
This application demonstrates the work of Angular using internal routing (3 routes). The first route loads the list of cards. The data comes in an HTTP request. 
It contains a chart (highcharts.js) in accordance with the data of this card. The internal pipe Angular date is also used. When a user clicks on the card application 
redirects to the next route where data of card is displayed (data receives from an HTTP request and is based on card index which is presented in URL).The last route 
indicates the successful completion of the request. Two services participate in the work: a separate service for the API request and a separate service for creating a chart. 
For styling used scss. The following libraries were also used: Angular 8.3.0, RxJS 6.4.0, Bootstrap 4.3.1, highcharts 7.2.0.
Images:
![alt text](https://github.com/AllaHlazova/angular-card-list/commit/9e07167d67ceb3007db8fbe237a9e425587a54a5?short_path=a617582#diff-a617582d727ea2fab0d524b21228e58a)
![alt text](https://github.com/AllaHlazova/angular-card-list/commit/9e07167d67ceb3007db8fbe237a9e425587a54a5?short_path=e2dd5f6#diff-e2dd5f69be68e203a55a1a02dbb4fe39)
![alt text](https://github.com/AllaHlazova/angular-card-list/commit/9e07167d67ceb3007db8fbe237a9e425587a54a5?short_path=f6f241b#diff-f6f241b283b5ef144b0c4799589cd94d)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
