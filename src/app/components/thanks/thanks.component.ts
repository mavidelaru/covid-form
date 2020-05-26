import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.sass']
})






export class ThanksComponent implements OnInit {

 answer: any[];
 quest1;
 quest2;
 quest3;
 quest4;
 quest5;
 quest6;




 ngOnInit(){
  this.quest1 = this.formService.quest1;
  this.quest2 = this.formService.quest2;
  this.quest3 = this.formService.quest3;
  this.quest4 = this.formService.quest4;
  this.quest5 = this.formService.quest5;
  this.quest6 = this.formService.quest6;




}

  constructor(

    private formService: FormService,

  ) { }

}
