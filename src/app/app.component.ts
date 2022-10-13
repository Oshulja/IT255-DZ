import { Component } from '@angular/core';
import { Room } from "./room/room.model"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: Room[];
  searchText: string = '';

  constructor() {
  }

  addRoom(name: HTMLInputElement, price: HTMLInputElement, link: HTMLInputElement, rating: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    console.log(`Adding Room Name ${name.value}, price: ${price.value}, link: ${link.value}, rating: ${rating.value} and description: ${description.value}`);
    this.rooms.push(new Room(name.value, price.value, link.value, rating.value, description.value));
    name.value = price.value = link.value = description.value = rating.value = "";
    return false;
  }

  randomize() {
    if(this.searchText !== ""){
      alert("Can't use randomize while searching!");
      return;
    }
    for (let i = this.rooms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.rooms[i], this.rooms[j]] = [this.rooms[j], this.rooms[i]];
    }
  }

  ngOnInit(): void {
    this.rooms = [new Room('Ambasador', '200', 'https://sr.wikipedia.org/sr-el/Хотел_Амбасадор#/media/Датотека:Ambasador_Hotel,_Niš_(2019).IMG_4719.jpg', '4.7', 'Beautiful rooms in Nish')];
  }

}
