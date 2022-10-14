import { Component, OnInit, Inject} from '@angular/core';
import { Room } from '../room/room.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-room-dialog',
  templateUrl: './edit-room-dialog.component.html',
  styleUrls: ['./edit-room-dialog.component.css']
})
export class EditRoomDialogComponent {

  constructor(public dialog: MatDialogRef<EditRoomDialogComponent>, @Inject(MAT_DIALOG_DATA) public room: Room) {
    
  }

  editRoom(name: HTMLInputElement, price: HTMLInputElement, link: HTMLInputElement, rating: HTMLInputElement, description: HTMLTextAreaElement) {
    this.room.name = name.value;
    this.room.price = parseInt(price.value);
    this.room.link = link.value;
    this.room.rating = parseFloat(rating.value);
    this.room.description = description.value;
    this.dialog.close(this.room);
  }
}
