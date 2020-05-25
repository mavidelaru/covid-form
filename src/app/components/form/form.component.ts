import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormControlName} from '@angular/forms';
import { ThanksComponent } from '../thanks/thanks.component';


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
   firstName: FormControl;
   lastName: FormControl;
   email: FormControl;
   language: FormControl;
   opinion: FormControl;
   addSomething: FormControl;

// -----------------------------------------------------
onSubmit(){
  if(this.myform.valid){
    this.goThanks();
    this.formService.getAnswer(this.firstName.value, this.lastName.value, this.email.value, this.language.value);
    
    this.myform.reset();
  }



}

  // getAnswer(firstName, lastName, email, language) {


  //   // if (this.validationService.notAnswered(answerA, answerB, answerC) === true) {
  //   //   this.goThanks();
  //   // }
  // }


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
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){

        this.firstName = new FormControl('', [Validators.required,
                                              Validators.minLength(2)]);
        this.lastName = new FormControl('', [Validators.required,
                                              Validators.minLength(2)]);

        this.email = new FormControl('', [Validators.required,
                                          Validators.pattern('[^ @]*@[^ @]*')]);

        this.language = new FormControl('', Validators.required);

        this.opinion = new FormControl('', Validators.required);

        this.addSomething = new FormControl('', [Validators.required,
                                            Validators.minLength(6)]);

  }

  createForm(){

  this.myform = new FormGroup({

      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      language: this.language,
      opinion: this.opinion,
      addSomething: this.addSomething

    });

  }

}
