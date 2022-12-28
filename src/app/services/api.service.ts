import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3040/api';
  constructor(private http: HttpClient) {}

  getApi(value: { response: string }): Observable<any> {
    return this.http.post(this.baseUrl, value);
  }
}
