// RxJs
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Angular
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//  Components
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent implements OnInit {
  obs: any;
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countryForm: FormGroup;
  selectField: FormControl;
  searchField: FormControl;
  countries;
  countrySearch;
  flag = false;
  newArray;
  prueba;
  errorFlag;

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    (this.selectField = new FormControl()),
      (this.searchField = new FormControl()),
      (this.countryForm = new FormGroup({
        selectField: this.selectField,
        searchField: this.searchField,
      }));
    this.getRegion();
    this.searchCountry();
  }

  getRegion() {
    this.selectField.valueChanges.subscribe((region) => {
      this.flag = true;
      this.apiCallService.getRegion(region).subscribe((data) => {
        this.countries = data;
      });
    });
  }

  searchCountry() {
    this.searchField.valueChanges
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .subscribe((term) => {
        this.countrySearch = term;
        this.apiCallService.getCountry(this.countrySearch).subscribe((data) => {
          try {
            this.countries = data;
            console.log('NO HAY ERROR');
          } catch (error) {
            this.errorFlag = error;
            console.log('HAY ERROR');
          }
        });
      });
  }
}
