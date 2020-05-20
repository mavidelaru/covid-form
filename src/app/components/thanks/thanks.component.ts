import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.sass']
})
export class ThanksComponent {


 quest1 = this.formService.quest1;
 quest2 = this.formService.quest2;
 quest3 = this.formService.quest3;

  constructor(

    private formService: FormService,

  ) { }

}
