import { Injectable } from '@angular/core';
import { ValidationService } from './validation.service';
import { BodyComponent } from '../components/body/body.component';
// import { data } from '../services/data.json';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  quest1: number;
  quest2: number;
  quest3: any;
  quest4: any;
  flag: boolean = false;

  getAnswer(answerA, answerB, answerC, answerD){

    this.quest1 = answerA;

    this.quest2 =  answerB;

    this.quest3 = answerC;

    this.quest4 = answerD;

    // this.flag =  this.validationService.notAnswered(answerA, answerB, answerC);

    console.log(this.flag)

    return this.flag;

  }


  constructor(
    private validationService: ValidationService,
    public bodyComponent: BodyComponent
  ) {  }





}
