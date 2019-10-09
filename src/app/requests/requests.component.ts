import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit, OnDestroy {
  public timeout: any;

  constructor(public router: Router) {
  }

  ngOnInit() {
    // redirected to first route
    this.timeout = setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
