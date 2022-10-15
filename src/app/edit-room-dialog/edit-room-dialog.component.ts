import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Room } from '../room/room.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator, linkValidator, ratingValidator } from '../form-add/form-add-validator.directive';


@Component({
  selector: 'app-edit-room-dialog',
  templateUrl: './edit-room-dialog.component.html',
  styleUrls: ['./edit-room-dialog.component.css']
})
export class EditRoomDialogComponent {
  myForm: FormGroup;
  name: AbstractControl;
  price: AbstractControl;
  rating: AbstractControl;
  description: AbstractControl;
  link: AbstractControl;

  @Output() add = new EventEmitter<Room>();
  constructor(private fb: FormBuilder, public dialog: MatDialogRef<EditRoomDialogComponent>, @Inject(MAT_DIALOG_DATA) public room: Room) {
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
  editRoom(form: any): void {
    if (this.myForm.valid) {
      this.room.name = form.name;
      this.room.price = form.link;
      this.room.link = form.price;
      this.room.rating = form.rating;
      this.room.description = form.description;
      this.dialog.close(this.room);
    }
  }
}
