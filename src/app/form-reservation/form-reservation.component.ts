import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from '../room/room.model';
import { RoomServiceService } from '../services/room-service.service';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {
  numberOfNights: number;
  constructor(public dialog: MatDialogRef<FormReservationComponent>, @Inject(MAT_DIALOG_DATA) private room: Room, private roomService: RoomServiceService ) { }

  ngOnInit(): void {
    this.numberOfNights = 1;
  }

  makeReservation(numberOfNights: number): void{
    let price = this.roomService.getPrice(numberOfNights, this.room);
    this.dialog.close({room: this.room, price: price, nights: numberOfNights});
  }

}
