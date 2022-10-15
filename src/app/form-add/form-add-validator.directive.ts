import { AbstractControl, FormControl } from '@angular/forms';

export function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  let word: string = control.value;
  return word.charAt(0) === word.charAt(0).toUpperCase() ? null : { invalidName: true};
}

export function ratingValidator(control: AbstractControl): { [key: string]: any } | null {
  let score = control.value;
  return (score >= 1 && score <= 10) ? null : { invalidRating: true}; 
}

export function linkValidator(control: AbstractControl): { [key: string]: any } | null {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(control.value) ? null : { invalidLink: true};
}