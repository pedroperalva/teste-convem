import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://63ab666dcf281dba8c2217bc.mockapi.io/api/convem/v1';
  constructor(private http: HttpClient) {}

  getApi(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
