import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  room: Room;
  @Output() add = new EventEmitter<Room>();
  constructor() { }

  addRoom(name: HTMLInputElement, price: HTMLInputElement, link: HTMLInputElement, rating: HTMLInputElement, description: HTMLTextAreaElement): void {
    this.room = new Room(name.value, parseInt(price.value), link.value, parseFloat(rating.value), description.value);
    name.value = price.value = link.value = description.value = rating.value = "";
    this.add.emit(this.room);
  }

  ngOnInit(): void {
  }

}
