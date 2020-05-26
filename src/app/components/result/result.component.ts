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

  paises;


  constructor(private apiCallService: ApiCallService) {}


  ngOnInit() {
    this.selectField = new FormControl(),
    this.searchField = new FormControl(),
    this.countryForm = new FormGroup({
      selectField : this.selectField,
      searchField : this.searchField,
    });
    
    this.getRegion();
    // this.searchCountry();

    // this.countryForm.reset();

  }


  getRegion(){

    this.selectField.valueChanges.subscribe((region) => {

      this.apiCallService.getRegion(region).subscribe((data) =>{

          console.log(data);

          this.countries = data;

      });
  });

  }

  searchCountry() {

    this.searchField.valueChanges
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .subscribe((term) => {
        console.log(term);
        this.apiCallService
          .getInfo(term)
          .subscribe((paises) => console.log(paises));
      });
  }
}