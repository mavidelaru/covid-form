import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})


export class FormComponent {

  getAnswers(answerA, answerB, answerC) {

    this.formService.getAnswer(answerA, answerB, answerC);

    if (this.validationService.notAnswered(answerA, answerB, answerC) === true) {
      this.goThanks();
    }
  }

  goThanks() {
    this.router.navigate(['thanks']);
  }

  constructor(
    private formService: FormService,
    private router: Router,
    private validationService: ValidationService,
  ) {}
}
