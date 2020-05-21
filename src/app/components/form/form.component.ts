import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})


export class FormComponent implements OnInit {
  done: boolean = false;
  content;


  getAnswers(answerA, answerB, answerC) {

    this.done = this.formService.getAnswer(answerA, answerB, answerC);

    if (this.validationService.notAnswered(answerA, answerB, answerC) === true) {
      this.goThanks();
    }
  }

  goThanks() {
    this.router.navigate(['thanks']);
  }

  checkDonne(){
    this.content = document.getElementById('form-content');
    
    let display = (this.done ===  true)  ? 'none' : 'block';
    this.content.style.display = display;

  }


  constructor(
    private formService: FormService,
    private router: Router,
    private validationService: ValidationService,
  ) {}

  ngOnInit(){

    console.log("llamando al servicio por la flag es "+this.formService.flag);


  
}
}
