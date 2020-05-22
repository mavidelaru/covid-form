import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})


export class FormComponent implements OnInit {
  done: boolean = false;

  content;

  langs: string[] = [
    'English',
    'Spanish'
  ]

 myform: FormGroup;

// -----------------------------------------------------
 
onSubmit(){
alert(`Tu nombre es  ${this.myform.value }`);
}
  getAnswer(answerA, answerB, answerC) {

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
    const display = (this.done ===  true)  ? 'none' : 'block';
    this.content.style.display = display;
  }

  constructor(
    private formService: FormService,
    private router: Router,
    private validationService: ValidationService,
  ) {}

// ---------------------------------------------------

  ngOnInit(){

  this.myform = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    }),
    email: new FormControl('', [Validators.required,
                                Validators.pattern('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/')]),
    language: new FormControl('', Validators.required)
  });

}
}
