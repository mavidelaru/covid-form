import { Injectable } from '@angular/core';
import { ValidationService } from './validation.service';
import { BodyComponent } from '../components/body/body.component';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  quest1: number[] = [];
  quest2: number[] = [];
  quest3: any[] = [];
  done: boolean = false;

  getAnswer(answerA, answerB, answerC){

    this.quest1.push(answerA);

    this.quest2.push(answerB);

    this.quest3.push(answerC);

    this.validationService.notAnswered(answerA, answerB, answerC);

    this.done = true;

  
  }




  constructor(
    private validationService: ValidationService,
    public bodyComponent: BodyComponent
  ) {  }





}
