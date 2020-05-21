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

  getAnswers(answerA, answerB, answerC) {

    this.done = this.formService.getAnswer(answerA, answerB, answerC);

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

  ngOnInit(){

  if (this.done === true) {

    //  const content = document.getElementById('form-content');
    // content.style.display = 'none';

  }

}
}
