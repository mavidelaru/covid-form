import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
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


// -----------------------------------------------------
onSubmit(){

alert(`Tu nombre es  ${this.firstName }`);
this.goThanks();
this.formService.getAnswer(this.firstName.value, this.lastName.value, this.email.value, this.language.value);

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
                                              Validators.minLength(8)]);

        this.email = new FormControl('', [Validators.required,
                                          Validators.pattern("[^ @]*@[^ @]*")
                                        ]);
        this.language = new FormControl('', Validators.required);

  }

  createForm(){

  this.myform = new FormGroup({
    name: new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    }),
    email: this.email,
    language: this.language
  });

  }

}
