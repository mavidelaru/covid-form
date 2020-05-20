
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass'],
})

export class BodyComponent implements OnInit {
  constructor(private router: Router) {}

  done: boolean = false;

   ngOnInit() {
    if (this.done === true) {
      const button = document.getElementById('body-button');
      button.style.display = 'none';
    }
  }

  goForm() {
    this.router.navigate(['form']);
  }

  // formDone(done) {
  //   done = this.done;
  // }
}
