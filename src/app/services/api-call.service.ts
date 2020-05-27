
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  search: string;
  apiRootRegion: string;
  apiRoot: string = 'https://restcountries.eu/rest/v2/';
  errorFlag=false;

  getRegion(region) {
    this.apiRootRegion = this.apiRoot + 'region/' + region;
    return this.http.get(this.apiRootRegion);
  }

  getCountry(search) {
    this.search = search;
    return this.http.get(this.apiRoot + 'name/' + this.search).pipe(
      tap(() => console.log('made request')),
      catchError((error) => {
        if (error.status === 404) {
          console.log('Not Found');
        }
        throw error;
      }),
    );
  }
  constructor(private http: HttpClient) {}
}
