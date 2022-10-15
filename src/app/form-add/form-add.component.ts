import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../room/room.model';
import { nameValidator, ratingValidator, linkValidator } from './form-add-validator.directive';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  myForm: FormGroup;
  name: AbstractControl;
  price: AbstractControl;
  rating: AbstractControl;
  description: AbstractControl;
  link: AbstractControl;
  room: Room;

  @Output() add = new EventEmitter<Room>();
  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.compose([
        Validators.required, nameValidator
      ])],
      'price': ['', Validators.required],
      'link': ['', Validators.compose([
        Validators.required, linkValidator
      ])],
      'rating': ['', Validators.compose([
        Validators.required, ratingValidator
      ])],
      'description': ['', Validators.required]
    })

    this.name = this.myForm.controls['name'];
    this.price = this.myForm.controls['price'];
    this.link = this.myForm.controls['link'];
    this.rating = this.myForm.controls['rating'];
    this.description = this.myForm.controls['description'];
    
    this.name.valueChanges.subscribe((form: string) => {
      if (form.length < 6) {
        console.log("Uneta vrednost je: \"" + form + "\" i ona je kraca od 6 karaktera")
      }
    })

    this.description.valueChanges.subscribe((form: string) => {
      if (form.length < 6) {
        console.log("Uneta vrednost je: \"" + form + "\" i ona je kraca od 6 karaktera")
      }
    })

  }

  onSubmit(form: any): void{
    if(this.myForm.valid){
      this.room = new Room(form.name, form.price, form.link, form.rating, form.description);
      this.add.emit(this.room);
    } else{
      alert("Nepravilno popunjena forma!")
    }

  }

  // addRoom(name: HTMLInputElement, price: HTMLInputElement, link: HTMLInputElement, rating: HTMLInputElement, description: HTMLTextAreaElement): void {
  //   this.room = new Room(name.value, parseInt(price.value), link.value, parseFloat(rating.value), description.value);
  //   name.value = price.value = link.value = description.value = rating.value = "";
  //   this.add.emit(this.room);
  // }

  ngOnInit(): void {
  }

}
