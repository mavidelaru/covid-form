import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  search: string;
  apiRootRegion : string;
  apiRoot: string = 'https://restcountries.eu/rest/v2/';


  getRegion(region) {
    this.apiRootRegion = this.apiRoot+'region/'+region;
    console.log(this.apiRootRegion)
    return this.http.get(this.apiRootRegion);
  }



  getInfo(search) {
    alert(search);
    this.search = search;

    console.log(this.apiRoot + this.search);

    return this.http.get(this.apiRoot + this.search);
  }

  constructor(private http: HttpClient) {}
}
