import { Component, OnInit } from '@angular/core';
import { interval, timer, from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent implements OnInit {
  obs: any;
  newArray = [1,2,3,4,5,6,7,8,9,20];

  searches;
  

  constructor() {}

  public ngOnInit(): void {
    // const contador = interval(1000);

    // const takeFourNumbers = contador.pipe(take(4));

    // console.log('prueba' + contador)

    // takeFourNumbers.subscribe(x => console.log('Next: ',x))

  }

}
