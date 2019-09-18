import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Card[]> {
    return this.http.get('/assets/list.json') as Observable<Card[]>;
  }
}
