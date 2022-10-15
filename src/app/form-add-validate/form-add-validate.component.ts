
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../room/room.model';

function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  let word: string = control.value;
  return word.charAt(0) === word.charAt(0).toUpperCase() ? null : { invalidName: true};
}

function ratingValidator(control: AbstractControl): { [key: string]: any } | null {
  let score = control.value;
  return (score >= 1 && score <= 10) ? null : { invalidRating: true}; 
}

function linkValidator(control: AbstractControl): { [key: string]: any } | null {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(control.value) ? null : { invalidLink: true};
}


@Component({
  selector: 'app-form-add-validate',
  templateUrl: './form-add-validate.component.html',
  styleUrls: ['./form-add-validate.component.css']
})
export class FormAddValidateComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
  }

  

}
