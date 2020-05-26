import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
 
  notAnswered(answerA, answerB, answerC, answerD, answerE, answerF) {

    const element = document.getElementsByClassName('form-control');
    const alert = document.getElementById('alert');
    const answers = [answerA, answerB, answerC, answerD, answerE, answerF];
    let flag = true;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < element.length; i++) {
      if (answers[i] == null || answers[i] === '') {
        element[i].classList.add('is-invalid');
        alert.style.display = 'block';
        flag = false;
      }
    }

    return flag;
  }
}
